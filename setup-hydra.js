// Runs once when Hydra starts, in the browser editor and in Pulsar.

// The browser editor serves this repository at /files; Pulsar loads files from disk.
const isBrowserEditor = location.protocol.startsWith("http")

// HYDRA EXTENSIONS
window.root = isBrowserEditor ? "/files/hydra/hydra-extensions" : "/home/bodie/projects/gigs/hydra-stress/hydra/hydra-extensions"
await loadScript(root + "/hydra-arrays.js")
await loadScript(root + "/hydra-wrap.js")
await loadScript(root + "/hydra-text.js")
await loadScript(root + "/hydra-tap.js")

hydraText.font = "serif"
hydraText.lineWidth = "1%"
hydraText.fontsize = "2%"

// HYDRA AUDIO
a.show()
a.setBins(4)
a.setSmooth(0.2)
a.setScale(10)
a.setMax(15)
a.setCutoff(2)
window.am = (c = 0.01, v = 0.1, i = 0) => c + v * a.fft[i]
window.ar = (c = 0.01, v = 0.1, i = 0, r = 0.25) => Math.round(c + v * a.fft[i])

// SCREEN CAPTURE
// s0.initScreen() opens the GNOME picker, where you select a window or a screen (both editors).
// The browser editor also captures without a picker, through the Mutter ScreenCast API (its /capture route):
// initCapture(s1, "window", { delay: 3 })  records the window that has the focus after 3 seconds
// initCapture(s1, "monitor", { connector: "HDMI-1" })  empty connector = primary monitor
// initCapture(s1, "area", { area: "0,0,1280,720", width: 1280, fps: 30 })
if (isBrowserEditor) window.initCapture = (source, kind = "window", options = {}) => new Promise((resolve, reject) => {
  stopCapture(source)
  const image = new Image()
  image.onload = () => {
    image.onload = null
    source.init({ src: image, dynamic: true })
    resolve(image)
  }
  image.onerror = () => reject(new Error(`capture ${kind} failed, see the terminal of the editor server`))
  image.src = `/capture/${kind}?` + new URLSearchParams(options)
  source.captureImage = image
})

window.stopCapture = (source) => {
  if (!source.captureImage) return
  source.captureImage.src = ""
  source.captureImage = null
  source.clear()
}

// WEB MIDI: CC values, notes per channel, and the clock of an external sequencer (for example the FM-1).
// osc(() => cc[74] * 60).out()                     CC values, 0 to 1
// shape(4, () => 0.2 + hit(10, 36)).out()          kick on channel 10: 1 at the hit, 0 after 0.25 s
// osc(10).color(1, () => hit(10, [42, 46], 0.1), 1).out()   hi-hats, shorter decay
// osc(() => midi.channels[2].note / 4).out()       last note on channel 2
// The clock sets bpm, and Start resets time, so arrays with .fast() stay on the beat.
const MIDI_CHANNELS = 16
const CLOCK_PULSES_PER_BEAT = 24
const STATUS_NOTE_OFF = 0x80
const STATUS_NOTE_ON = 0x90
const STATUS_CONTROL_CHANGE = 0xb0
const STATUS_CLOCK = 0xf8
const STATUS_START = 0xfa
const STATUS_CONTINUE = 0xfb
const STATUS_STOP = 0xfc
const CONTROLLER_ALL_NOTES_OFF = 123
const BPM_CHANGE_THRESHOLD = 0.5

// cc values are normalized to 0.0 - 1.0
window.cc = Array(128).fill(0.5)
window.midi = {
  bpm: null,
  playing: false,
  beat: 0,
  channels: Array.from({ length: MIDI_CHANNELS + 1 }, () => ({ note: 0, velocity: 0, gate: false })),
}
const noteOnTimes = Array.from({ length: MIDI_CHANNELS + 1 }, () => new Map())
const nowSeconds = () => performance.now() / 1000

// Envelope of the last note-on on a MIDI channel (1-16), for one note, a list of notes, or any note.
window.hit = (channel, notes = null, decay = 0.25) => {
  const wanted = notes === null ? null : [].concat(notes)
  let last = null
  for (const [note, event] of noteOnTimes[channel]) {
    if (wanted && !wanted.includes(note)) continue
    if (!last || event.time > last.time) last = event
  }
  if (!last) return 0
  const age = nowSeconds() - last.time
  return age >= decay ? 0 : (1 - age / decay) * last.velocity / 127
}

let clockPulses = 0
let beatStartTime = null
function receiveClock() {
  clockPulses++
  midi.beat = clockPulses / CLOCK_PULSES_PER_BEAT
  if (clockPulses % CLOCK_PULSES_PER_BEAT) return
  const time = nowSeconds()
  if (beatStartTime !== null) {
    const bpm = 60 / (time - beatStartTime)
    if (midi.bpm === null || Math.abs(bpm - midi.bpm) > BPM_CHANGE_THRESHOLD) {
      midi.bpm = Math.round(bpm * 10) / 10
      _hydra.sandbox.set('bpm', midi.bpm)
    }
  }
  beatStartTime = time
}

const tapper = new BPM()
let resetInterval = 0

function receiveControlChange(channel, index, value) {
  cc[index] = (value + 1) / 128.0
  if (index == CONTROLLER_ALL_NOTES_OFF) for (const state of midi.channels) state.gate = false
  // C0 on Arturia Keystep 32 is cc[0]! on release, we get value cc[0]*128-1 == 64
  if (index == 0 && value != 64) {
    // set the BPM together with the hydra-tap extension
    clearInterval(resetInterval)
    const tap = tapper.tap()
    if (tap.count > 1) {
      _hydra.sandbox.set('bpm', Math.round(tap.avg))
    }
    resetInterval = setInterval(tapper.reset.bind(tapper), 1500)
    console.log(_hydra.sandbox.bpm, Math.round(tap.avg))
  } else if (index == 1 && value != 64) {
    _hydra.sandbox.set('time', 0)
  }
}

function getMIDIMessage(midiMessage) {
  const [status, data1, data2] = midiMessage.data
  // console.log('MIDI', status.toString(16), data1, data2)    // uncomment to monitor incoming Midi
  if (status == STATUS_CLOCK) return receiveClock()
  if (status == STATUS_START) {
    clockPulses = 0
    beatStartTime = null
    midi.playing = true
    return _hydra.sandbox.set('time', 0)
  }
  if (status == STATUS_CONTINUE) return (midi.playing = true)
  if (status == STATUS_STOP) return (midi.playing = false)
  const kind = status & 0xf0
  const channel = (status & 0x0f) + 1
  const state = midi.channels[channel]
  if (kind == STATUS_NOTE_ON && data2 > 0) {
    Object.assign(state, { note: data1, velocity: data2, gate: true })
    noteOnTimes[channel].set(data1, { time: nowSeconds(), velocity: data2 })
  } else if (kind == STATUS_NOTE_OFF || kind == STATUS_NOTE_ON) {
    if (state.note == data1) state.gate = false
  } else if (kind == STATUS_CONTROL_CHANGE) {
    receiveControlChange(channel, data1, data2)
  }
}

navigator.requestMIDIAccess()
  .then((midiAccess) => {
    const listen = () => { for (const input of midiAccess.inputs.values()) input.onmidimessage = getMIDIMessage }
    listen()
    // devices connected later, such as the FM-1 after a restart
    midiAccess.onstatechange = listen
  }, () => console.log('Could not access your MIDI devices.'))
