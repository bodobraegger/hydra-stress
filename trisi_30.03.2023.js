bpm   = 60
speed = 1
blend_vals = [0,0,0.01,0.01,0.1,0.2,0.3,0.99,0.3,0.2,0.1,0.01,0,0,0.01,0.01]
modul_vals = [0,0,0.01,0.01,0.1,0.2,0.2,0.20,0.2,0.2,0.1,0.01,0,0,0.01,0.01]
e_halo_size = 0.5
e_halo_0 = shape(64, e_halo_size).scale(1, 0.5).diff(shape(64, e_halo_size-0.01).scale(1, 0.5))
e_halo_1 = shape(64, e_halo_size).scale(1, 0.5).diff(shape(64, e_halo_size-0.01).scale(1, 0.5)).rotate(Math.PI/3)
e_halo_2 = shape(64, e_halo_size).scale(1, 0.5).diff(shape(64, e_halo_size-0.01).scale(1, 0.5)).rotate(Math.PI/3*2)
// bgbg
shape(20,0.2,0.3)
.color(0.001,0.001,0.2)
  .scale([2,1.5,1.3,2.2].fast(0.3).smooth(1))
  .repeat([1,1.5,0.3].fast(0.3).smooth(1))
  .modulateRotate(o0)
  .scale([1,1.5].fast(0.34).smooth(0.8))
  .modulate(noise(2,0.2))
  .rotate(1, .2)
.out(o3)
// atomoi logo
s0.initImage('https://i.ibb.co/THJ3B4s/atomoi.png')
src(s0).scale(0.1,2).scroll(0.01,0.04).mask(shape(2,0.8).add(shape(2,0.8).scrollY(0.1)).add(shape(4,0.8).scroll(0.1,0.2)).invert()).out(o2)
// bg
shape(64, .1).color(0,0.5,1)
  .add(e_halo_2.scale([1.2,   1, 0.9].smooth(),            [  1, 0.9, 1.2, 1.27, 0.7].smooth(), ))
  .add(e_halo_0.scale([  1, 1.1, 0.9, 0.95].smooth(),      [1.2,   1, 0.9].smooth(), ))
  .add(e_halo_1.scale([  1, 0.9, 1.2, 1.27, 0.7].smooth(), [  1, 1.1, 0.9, 0.95].smooth() ))
  .scale(0.5)
  .scrollX(0.5,0.01)
  .scrollY(0.5,0.01)
  .repeat([3,4,3].fast(0.2).smooth(0.5),[3,4,3].fast(0.1).smooth(0.5))
  .modulate(o0, 1)
  // insanity
  .blend(o1,blend_vals.smooth(0.7).fast(0.7))
  .modulate(o0, modul_vals.smooth(1).fast(0.3))
  .blend(o0,blend_vals.smooth(1).fast(0.2))
  .out(o1)
// main
src(o3).add(
  shape(64, .1).color(0,0.5,1)
  .add(e_halo_0.scale([1.2,   1, 0.9].smooth(),            [  1, 0.9, 1.2, 1.27, 0.7].smooth(), ))
  .add(e_halo_1.scale([  1, 1.1, 0.9, 0.95].smooth(),      [1.2,   1, 0.9].smooth(), ))
  .add(e_halo_2.scale([  1, 0.9, 1.2, 1.27, 0.7].smooth(), [  1, 1.1, 0.9, 0.95].smooth() ))
  .rotate(0, 0.2)
  .scale([0.5, 1, 1.2, 0.7].smooth(0.8).fast(0.3),[1, 1.2, 0.9].smooth().fast(0.2))
  .diff(
    src(o1).kaleid(7)
  )
  .scale(1, innerHeight/innerWidth)
)
.add(o2)
.out()
render(o0)


// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
bpm   = 60
speed = 1
blend_vals = [0,0,0.01,0.01,0.1,0.2,0.3,0.99,0.3,0.2,0.1,0.01,0,0,0.01,0.01]
modul_vals = [0,0,0.01,0.01,0.1,0.2,0.2,0.20,0.2,0.2,0.1,0.01,0,0,0.01,0.01]
e_halo_size = 0.5
e_halo_0 = shape(64, e_halo_size).scale(1, 0.5).diff(shape(64, e_halo_size-0.01).scale(1, 0.5))
e_halo_1 = shape(64, e_halo_size).scale(1, 0.5).diff(shape(64, e_halo_size-0.01).scale(1, 0.5)).rotate(Math.PI/3)
e_halo_2 = shape(64, e_halo_size).scale(1, 0.5).diff(shape(64, e_halo_size-0.01).scale(1, 0.5)).rotate(Math.PI/3*2)
// atomoi logo
s0.initImage('https://i.ibb.co/THJ3B4s/atomoi.png')
src(s0).scale(0.1,2).scroll(0.01,0.04).mask(shape(2,0.8).add(shape(2,0.8).scrollY(0.1)).add(shape(4,0.8).scroll(0.1,0.2)).invert()).out(o2)
// bg
shape(64, .1).color(0,0.5,1)
  .add(e_halo_2.scale([1.2,   1, 0.9].smooth(),            [  1, 0.9, 1.2, 1.27, 0.7].smooth(), ))
  .add(e_halo_0.scale([  1, 1.1, 0.9, 0.95].smooth(),      [1.2,   1, 0.9].smooth(), ))
  .add(e_halo_1.scale([  1, 0.9, 1.2, 1.27, 0.7].smooth(), [  1, 1.1, 0.9, 0.95].smooth() ))
  .scale(0.5)
  .scrollX(0.5,0.01)
  .scrollY(0.5,0.01)
  .repeat([3,4,3].fast(0.2).smooth(0.5),[3,4,3].fast(0.1).smooth(0.5))
  .modulate(o0, 1)
  // insanity
  .blend(o1,blend_vals.smooth(0.7).fast(0.7))
  .modulate(o0, modul_vals.smooth(1).fast(0.3))
  .blend(o0,blend_vals.smooth(1).fast(0.2))
  .out(o1)
// main
shape(64, .1).color(0,0.5,1)
.add(e_halo_0.scale([1.2,   1, 0.9].smooth(),            [  1, 0.9, 1.2, 1.27, 0.7].smooth(), ))
.add(e_halo_1.scale([  1, 1.1, 0.9, 0.95].smooth(),      [1.2,   1, 0.9].smooth(), ))
.add(e_halo_2.scale([  1, 0.9, 1.2, 1.27, 0.7].smooth(), [  1, 1.1, 0.9, 0.95].smooth() ))
.rotate(0, 0.2)
.scale([0.5, 1, 1.2, 0.7].smooth(0.8).fast(0.3),[1, 1.2, 0.9].smooth().fast(0.2))
.diff(
  src(o1).kaleid(7)
)
.scale(1, innerHeight/innerWidth)
.add(o2)
.out()
render(o0)
