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

// WEB MIDI
//create an array to hold our cc values and init to a normalized value
window.cc = Array(128).fill(0.5)

const tapper = new BPM()
let resetInterval = 0

function getMIDIMessage(midiMessage) {
  const [, index, value] = midiMessage.data
  // console.log('Midi received on cc#' + index + ' value:' + value)    // uncomment to monitor incoming Midi
  cc[index] = (value + 1) / 128.0 // normalize CC values to 0.0 - 1.0
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

navigator.requestMIDIAccess()
  .then((midiAccess) => {
    for (const input of midiAccess.inputs.values()) input.onmidimessage = getMIDIMessage
  }, () => console.log('Could not access your MIDI devices.'))
