// run all of this in the console directly!!
clear()
// HYDRA EXTENSIONS
window.root_win = "file:///C:/Users/bodie/Desktop/misc/art/hydra/.hydra-extensions"
window.root_web = "https://hydra-extensions.glitch.me"
window.root_pop = ""
window.root = root_win
await loadScript(root+"/hydra-arrays.js")
await loadScript(root+"/hydra-wrap.js")
await loadScript(root+"/hydra-text.js")
await loadScript(root+"/hydra-tap.js")

hydraText.font = "serif"
hydraText.lineWidth = "1%"
hydraText.fontsize = "2%"

// HYDRA AUDIO
a.show()
// defaults
a.setBins(4)
a.setSmooth(0.2)
a.setScale(10)
a.setMax(15)
a.setCutoff(2)
window.am = (c = 0.01, v = 0.1, i = 0) => c + v * a.fft[i]
window.ar = (c = 0.01, v = 0.1, i = 0, r=0.25) => Math.round(c + v * a.fft[i])

// EXECUTE IN CONSOLE DIRECTLY:
// WEB MIDI
// register WebMIDI
navigator.requestMIDIAccess()
    .then(onMIDISuccess, onMIDIFailure);

function onMIDISuccess(midiAccess) {
    console.log(midiAccess);
    var inputs = midiAccess.inputs;
    var outputs = midiAccess.outputs;
    for (var input of midiAccess.inputs.values()){
        input.onmidimessage = getMIDIMessage;
    }
}

function onMIDIFailure() {
    console.log('Could not access your MIDI devices.');
}

//create an array to hold our cc values and init to a normalized value
var cc=Array(128).fill(0.5)

// MY OWN HACK: copied from hydra-tap.js
const tapper = new BPM();
let resetInterval = 0;

getMIDIMessage = function(midiMessage) {
    var arr = midiMessage.data
    var index = arr[1]
    // console.log('Midi received on cc#' + index + ' value:' + arr[2])    // uncomment to monitor incoming Midi
    var val = (arr[2]+1)/128.0  // normalize CC values to 0.0 - 1.0
    cc[index]=val
    // C0 on Arturia Keystep 32 is c[0]! on release, we get value cc[0]*128-1 == 64
    // MY OWN HACK copied from hydra-tap.js
    if(index == 0 && arr[2] != 64) {
      // use this to set BPM in conjonction with the hydra-tap extension!:
      clearInterval(resetInterval);
      const tap = tapper.tap();
      if (tap.count > 1) {
          _hydra.sandbox.set('bpm', Math.round(tap.avg));
      }
      resetInterval = setInterval(tapper.reset.bind(tapper), 1500);
      console.log(_hydra.sandbox.bpm, Math.round(tap.avg))
    } else if(index==1 && arr[2] != 64){
      _hydra.sandbox.set('time', 0);
    }
}
