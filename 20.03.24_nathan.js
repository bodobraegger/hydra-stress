var root = "/home/bodie/projects/hydra-stress/hydra"
    root = "/Users/bodie/Desktop/misc/art/hydra"
var extension_location = root+'/.hydra-extensions/'
loadScript(extension_location + "hydra-arrays.js")
loadScript(extension_location + "hydra-blend.js")
loadScript(extension_location + "hydra-canvas.js")
loadScript(extension_location + "hydra-tap.js")
loadScript(extension_location + "hydra-wrap.js")

s0.initScreen(3)

// s1.initScreen(5);

speed=0.2
bpm = 30
src(s0).modulate(s0, [0,0.2].fast(0.7).smooth(0.5))
.scale(0.8)
.color(
  Array.random(3,0.4,1.2).smooth(),
  Array.random(5,0.3,1).smooth(),
  Array.random(2,0.4,1).smooth(),
)
.saturate(0.5)
.blend(
  src(s0).modulate(s0, [0,0.1].smooth(0.5))
  .scale(0.8)
  .saturate([0, 0.5, 1].smooth())
  .rotate(0,0.2)
  .pixelate([80, 80].zfill(7, width),[80, 50].zfill(7, height)),
  Array.random(4, 0,0.4).smooth(0.4)
)
// .modulate(noise(2), 0.01)
.modulate(o0, -0.01)
// .blend(gradient(1,2.5).pixelate(), [0,0.3].smooth(0.9))
.mask(shape(4, 0.7, 0))
// .add(src(s1).scale(1/4).mask(shape(4)).scroll(Array.random(4,0.2,0.5).smooth().fast(0.3), Array.random(5, -0.2,0.5).smooth().fast(0.2)))
// .modulate(o0)
.scale(1,height/width)
.out()
