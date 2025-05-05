var root = "/home/bodie/projects/hydra-stress/hydra"
    root = "/Users/bodie/Desktop/misc/art/hydra"
var extension_location = root+'/.hydra-extensions/'
loadScript(extension_location + "hydra-arrays.js")
loadScript(extension_location + "hydra-blend.js")
loadScript(extension_location + "hydra-canvas.js")
loadScript(extension_location + "hydra-tap.js")
loadScript(extension_location + "hydra-wrap.js")

a.hide()

hush()

canvas.setRelativeSize(1);
bpm = 140

s0.initScreen(2)

s1.initScreen(3)


// jellyfish
osc(Math.PI * 2, .2, 1)
  .color(1, -.5, 1)
  .mask(shape([3,4,8,99].smooth(.5), .1, .5))
  .scale(1, innerHeight / innerWidth)
  .modulate(noise([...Array(5).keys()].smooth(1).fast(.2)))
  .modulateScale(osc(20, .01), -.5)
  .blend(src(o2)
    .scrollY(-0.1), 0.2)
  .modulate(o2, () => .1 * Math.cos(time))
  .colorama([0, .02].smooth(1))
  .saturate(() => am(1, .2, 0))
  .luma(() => am(0.008, .01, 2), 0)
  .blend(o2, .9)
  .scale(() => am(1.01, -.02, 2))
  .out(o2)


// audio layer
var msub=shape(2,1).scrollY(.2)
src(o0)
  .pixelate(
    [...Array(4).fill(innerWidth),100].smooth(.1),
    [...Array(4).fill(innerHeight),50].smooth(.01))
  .diff(shape(2.5).scale(()=>am(0.2,0.9)).rotate(0,.1)
  .repeat(()=>am(7,3,0),()=>am(8,1,numBins),()=>am(1,1,0),()=>am(1,1,2))
  .modulate(noise()).modulate(o0,()=>am(.2,1)).color(
    [1, 0, 0].smooth(.1).fast(.0125),
    [0,.5, 0].smooth(.1).fast(.0126),
    [0, 0, 1].fast(.0124).smooth(.1))
  .add(o2,0.01)
  .pixelate(
    [...Array(4).fill(innerWidth ),1000,500,100,50,12].smooth(.1),
    [...Array(4).fill(innerHeight),1000,500,100,12].smooth(.8).fast(.25)))
  .modulate(src(s1).mask(msub), [-.05,0,.05].fast(1/16).smooth(.2))
  .out(o3)


// background
var m0 = osc([120,60,16].fast(0.2)).thresh().rotate(0,.04)
var m1 = osc([120,60,16].fast(0.2)).thresh().rotate(0,.04)
.invert()
var c1=[0.5, 1].fast(1/4).smooth(), c2=0.5, c3=1.1
src(s0).color(c1,c2,c3)
.mult(m0,[0.8,1].smooth().fast(1/7))
.add(src(s1).color(c1,c2,c3).mask(m1),)
.modulate(s0, [0,0.01,0.1,0.01].fast(1/4).smooth())
.out()

speed = 0.5

render(o3)
