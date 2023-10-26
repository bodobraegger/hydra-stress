hydraWrap.setNoWrap()
a.setSmooth(0.2)

// setResolution(3840, 2160)
// setResolution(1920, 1080)

// inputs
// https://www.youtube.com/watch?v=NWBYCdurOYY use this as the screen input
s0.initScreen(2)


// stream
src(s0)
.modulate(o1,[0, 0, 0, 0.2, 0, -0.1].smooth(0.3).fast(0.25))
.color(1,1,1)
.pixelate(
  [10, 100].zfill(8, width).fast(0.25).smooth(0.8),
  [20, 200, 400].zfill(8, height).smooth(0.1)
 )
.out(o1)

render(o1)

// twizzlers
shape([2,4].zfill(8,2).smooth(0.2).fast(0.1))
  .scale(() => am(0.2, 0.9))
  .rotate(0, 0.1)
  .repeat(
    () => ar(4, 3, 1),
    () => ar(8, 1, a.bins.length-1),
  )
  .modulate(noise(1))
  .modulate(o1, () => am(0.2, 1))
  .modulate(o2, () => am(0.2, 2))
  .out(o2);

render(o2)

hydraText.font = "serif"
hydraText.lineWidth = "1%"
hydraText.fontsize = "2%"
window.str =  "tired and wired"
//.colorama(Array.random(4, 0, 0.001))
// shape moving across screen
src(o1).add(src(o2)).add(
shape(5,Array.random(4,0.01,0.4).smooth(0.5), ()=>a.fft[1]*0.01)
.rotate(()=>a.fft[1], 0.7)
.scrollX(Array.random(7, -0.5,0.5).smooth(0.8))
.scrollY(Array.random(8, -0.8, 0.8).smooth(1))
.scale(1, height/width)
.sub(text(str),()=>a.fft[0])
.modulateScale(shape(4).repeat([2,4,8,16]), ()=>a.fft[2]*0.4)
.scale(()=>a.fft[0]*0.02+0.95)
.modulateScrollY(o0, ()=>a.fft[2]*-0.2)
.blend(o0, ()=>a.fft[0]*0.1)
// scale for bad mapping
// .scale(0.8)
// .scrollY(0.15)
)
.out()

render(o0)
