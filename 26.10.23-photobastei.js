let root = "/home/bodie/projects/gigs/hydra-stress/hydra"
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

s0.initScreen(4)

s1.initScreen(3)

s2.initScreen(5)

hydraWrap.setNoWrap()
speed = 0.25


hush()



src(s0)
// .modulate(noise(4), ()=>am(0))
.color(0.5,0.53,Array.random(3, 1, 1.2).smooth(0.5))
.modulate(o1,[0, 0, 0, 0.2, 0, -0.1].zfill(64, 0).smooth(0.3).fast(0.25))
.pixelate(
  [10, 100].zfill(32, width).fast(0.25).smooth(0.8),
  [20, 200, 400].zfill(32, height).smooth(0.1)
)
.out(o1)

// src(s2)
src(s1)
// .rotate(0, 0.1)
.scale(
Array.random(4, 0.1, 0.5).smooth(1/4).fast(1/4)).mask(shape(4,
Array.random(4, 0.1, 0.5).smooth(3/8).fast(1/4))).scrollX(
Array.random(16,-0.5, 0.5).smooth(1/2).fast(1/4*1/4)).scrollY(
Array.random(18,-0.4, 0.4).smooth(1/8).fast(1/4*1/4))
.out(o0)

// twizzlers
shape([2,4].zfill(8,2).smooth(0.2).fast(0.1))
  .scale(() => am(0.2, 0.9))
  .rotate(0, 0.1)
  .repeat(
    () => ar(4, 3, 1),
    () => ar(4, 2, a.bins.length-1),
  )
  .modulate(noise(1))
  .modulate(o1, () => am(0.02, 0.1, 3))
  .modulate(o3, () => am(-0.01, 0.2, 0))
  .color(0.5, 0.5, 1)
  .out(o3);


a.hide()
// .scale(1, window.innerWidth/window.innerHeight)
src(o1)
// .colorama(() =>am(0, 0.02, 3))
// shape(Array.random(4, 1, 4)).color(0.5,0.5,1)
.blend(
  src(s2).mult(shape(4,1.2,0).scrollX(0.262).add(shape(4,1, 0).scrollY(-0.1)))
  .color(0.5, 0.5, 1)
  .colorama(()=>am(0, 0.1, 3))
  ,()=>am(0.1, 0.63, 0)
)
.add(src(o2), ()=>am(0.5, 1))
.add(src(o3), ()=>am(0.2, 1.8, 2)).modulate(o3, ()=>am(0, 0.1))
.modulate(noise(Array.random(4, 1, 2)),Array.random(4, -0.01, 0.02).smooth(0>.1).fast(1/1))
.brightness([0].zfill(4,-0.2))
// .color(1,0.5,1)
.out()


shape(Array.random(8, 1, 8).smooth(.4).fast(.25), ()=>am(0.3, 1, 1), ).rotate(0,0.1)
.repeat(4, ()=>ar(2, 4))
.color(
  Array.random().fast(1/4),
  ()=>am(0.3, 0.6, 2),
  ()=>am(0.5, 2.2, 3),
)
.modulate(o1)
.add(shape([4, 3].zfill(8, 64).smooth(0.8), ()=>am(0.3, 0.4),()=>am(0, 0.1, 2)).scale(()=>am(1,0.1,2), height/width).modulate(o0).blend(o0).scale(1.01))
.mult(osc(4,0.2).mask(shape(4, ()=>am(0.5, 1))).modulate(noise([2,4,8])))
.out(o1)
