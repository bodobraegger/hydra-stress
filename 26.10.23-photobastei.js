let root = "/home/bodie/projects/hydra-stress/hydra"
let extension_location = root+'/hydra-extensions/'
loadScript(extension_location + "hydra-arrays.js")
loadScript(extension_location + "hydra-blend.js")
loadScript(extension_location + "hydra-canvas.js")
loadScript(extension_location + "hydra-tap.js")
loadScript(extension_location + "hydra-wrap.js")

canvas.setRelativeSize(1);
bpm = 80

shape(4, beats(1).range(0.1,0.5)).out()


a.show()

s0.initScreen(2)

s1.initScreen(3)

hydraWrap.setNoWrap()
speed = 0.2

src(s0).color(0.5,0.5,Array.random(3, 0.5, 0.8).smooth(0.5)).pixelate(Array.random(4, 100, 1000).smooth(0.2), Array.random(9, 200, 2000))
.scale(1, window.innerWidth/window.innerHeight)
.diff(src(s1).scale(Array.random(4, 0.1, 0.7).smooth()).mask(shape(4,Array.random(4, 0.1, 0.7).smooth())).scrollX(Array.random(4, 0.1, 0.3).smooth()).scrollY(Array.random(8, 0.1, 0.4).smooth()))
// .modulate(o0)
.out()
