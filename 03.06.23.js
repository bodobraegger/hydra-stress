let root = "/home/bodie/projects/hydra-stress/hydra"
let extension_location = root+'/hydra-extensions/'
loadScript(extension_location + "hydra-arrays.js")
loadScript(extension_location + "hydra-blend.js")
loadScript(extension_location + "hydra-canvas.js")
loadScript(extension_location + "hydra-tap.js")
loadScript(extension_location + "hydra-wrap.js")

canvas.setRelativeSize(1);
bpm = 120

shape(4, beats(1).range(0.1,0.5)).out()


a.show()
s0.initScreen(2)

hydraWrap.setNoWrap()



src(s0).color(0.5,0.5,0.5).pixelate(Array.random(4, 100, 1000).smooth(0.2), Array.random(9, 200, 2000)).modulate(noise(0.5))
.scale(1, window.innerWidth/window.innerHeight)
.add(
  noise(2).color(0.5,1,0.5).add(noise(3,0.12).color(1,0.5,0.5))
  ,0.5
).modulate(
  shape(beats(4).range(3,20), ()=>a.fft[0]*0.5 +0.1).scroll(Array.random().smooth(), Array.random().smooth())
)
.modulate(o0)
.scale(1, window.innerHeight/window.innerWidth)
.out()
