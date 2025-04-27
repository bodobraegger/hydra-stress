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

// i want the first one to be masked by the osc, and the second one too but a bit

src(s0).color(.5,.5,1)
.mask(osc().thresh())
.add(
  src(s1)
  .mask(osc().thresh().scrollX(1.1,.01))
  .color(.5,.5,1)
)
.out(o0)
