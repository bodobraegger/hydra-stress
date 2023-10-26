hydraWrap.setNoWrap()
a.setSmooth(0.2)

// setResolution(3840, 2160)
// setResolution(1920, 1080)
/*
.pixelate(
  [10, 100].zfill(8, width).fast(0.25).smooth(0.8),
  [20, 200, 400].zfill(8, height).smooth(0.1)
 )
*/

// inputs
// https://www.youtube.com/watch?v=NWBYCdurOYY use this as the screen input
s0.initScreen(2)


// stream - modulate, color
src(s0)
.modulate(o1,[0, 0, 0, 0.2, 0, -0.1].smooth(0.3).fast(0.25))
.color(1,1,1)
.out(o1)

// twizzlers - rotate, color, repeat, modulate by stream?
shape([2,4].zfill(8,2).smooth(0.2).fast(0.1))
  .out(o2);

window.str =  "tired and wired"
//.colorama(Array.random(4, 0, 0.001))
// shape - size, rotate, scale!!, scroll random, modulate scroll y on output, modulateScale by repeated shapes
src(o1).add(src(o2)).add(
shape(5,Array.random(4,0.01,0.4).smooth(0.5), ()=>a.fft[1]*0.01)
.scroll(
  Array.random(7, -0.5,0.5).smooth(0.8),
  Array.random(8, -0.8, 0.8).smooth(1))
.scale(1, height/width)
// scale for bad mapping
// .scale(0.8)
// .scrollY(0.15)
)
.out(o3)

render(o0)
