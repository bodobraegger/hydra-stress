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

shape(4, beats(1).range(0.1,0.5)).out()

a.show()

a.hide()

s0.initScreen(1)

s1.initScreen(2)

hydraWrap.setNoWrap()
speed = 0.25

bpm=137

bpm=120

hydraText.font="serif"
var str="<3\n<3 love <3\n<3 xo xo <3\n<3 bodie <3\n<3 thx <3\n<3 \n"
src(s0)
.color(Array.random(8, 0.5, 1.5),Array.random(3, 0.5, 0.8),Array.random(3, 0.2, 0.8).smooth(0.5))
.pixelate(Array.random(4, 100, 1000).zfill(3, 1000).smooth(0.2), Array.random(9, 200, 2000).zfill(4,2000))
.scale(1, window.innerWidth/window.innerHeight)
.blend(src(s1).scale(Array.random(4, 0.9, 1.1).smooth()).mask(
  shape(4,Array.random(4, 0.8, 1).smooth(.8)))
    // .scrollX(Array.random(16, -0.2, 0.2).zfill(4,0).smooth(.3).fast(2))
    // .scrollY(Array.random(24, -0.25, 0.25).zfill(5,0).smooth(0.25))
  .color(1.5,1.5,Array.random(16,1.5,2.5))
,
[0,0.1,0.2,0.3,0.9].zfill(23,1).smooth())
.saturate([0.8,0.9,1,1.2,.9].smooth(0.8))
// .colorama(0.0001)
//
//
// .modulate(
//   shape(Array.random(8,2,2.5).smooth(0.1), beats(1/8,1).range(0.1,0.5))
//   .scrollX(Array.random(4, -0.1, 0.2).zfill(4,0).smooth())
//   .scrollY(Array.random(8, -0.3, 0.4).zfill(5,0).smooth(0.1))
// , 0.02)
// .modulate(
//   shape(Array.random(12,1,4).smooth(0.1), beats(1/16).range(0.1,0.5))
  // .pixelate(10,10)
  // .scrollX(Array.random(4, -0.1, 0.2).zfill(4,0).smooth())
  // .scrollY(Array.random(4, -0.3, 0.4).zfill(5,0).smooth(0.1))
// , 0.05)
.blend(
  shape(Array.random(9,1,5).smooth(0.1), beats(1/16, 2).range(0.1,0.5),[0,0.1])
  .repeat([8].zfill(3,1),[8].zfill(17,1))
  // .scrollX(Array.random(4, -0.2, 0.5).zfill(4,0).smooth())
  // .scrollY(Array.random(8, -0.3, 0.4).zfill(5,0).smooth(0.1))
  .scale(Array.random(16,.2,.44).smooth(.4))
  ,.01
)
// .add(o2, [.01,   .25].smooth())
// .scale(0.9)
// .blend(o0)
//
//
//
// .kaleid(1)
// .color(Array.random(3,1.5,1.8), Array.random(4,.2,.6), Array.random(5,1,1.2))
// .modulate(voronoi())
// .diff(osc(64).modulate(noise(beats(1/2,.25))).modulate(noise(beats(2/8))), 0.4)
.diff(text(str).color(.5,.5,1).modulate(o0).rotate(0,0.1),()=>a.fft[0]*2.5)
// .modulate(o0)
// .blend(o0)
.out()


solid().out()
