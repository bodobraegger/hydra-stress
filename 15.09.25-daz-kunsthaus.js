var root = "/home/bodie/projects/hydra-stress/hydra"
    root = "/Users/bodie/Desktop/misc/art/hydra"
var extension_location = root+'/.hydra-extensions/'
loadScript(extension_location + "hydra-arrays.js")
loadScript(extension_location + "hydra-blend.js")
loadScript(extension_location + "hydra-canvas.js")
loadScript(extension_location + "hydra-tap.js")
loadScript(extension_location + "hydra-wrap.js")


canvas.setRelativeSize(1);
bpm = 125

s0.initScreen(2)

s1.initScreen(3)

var m0 = osc([240,120,60,30,15,8]).thresh().rotate(0,.1).pixelate()
var m1 = osc([240,120,60,30,15,8]).thresh().rotate(0,.1).pixelate()
.invert()
m0.out(o1)
m1.out(o2)
src(s1).mask(m1)
  .add(src(s0).mask(m0))
  .out()

render(o0)
