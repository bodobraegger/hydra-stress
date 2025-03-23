bpm=150
speed=.25
beats = 0
a.show()
numBins=4
a.setBins(numBins+1)
// a.setCutoff(.2)
// a.setScale(2)
a.setSmooth(0)
a.onBeat = () => {beats++}

am = (c = 0.01, v = 0.1, i = 0) => c + v * a.fft[i]

s0.initScreen(2 )
render()

m=shape(4,.4,.3).scale(.5,1).scrollY(.2).invert(),[.3,.8].smooth()
walk = [...Array(10).keys()].map(e=>e*.01).fast(0.1).smooth(1)

colorChangeSpeed = 1


osc(44,.1,1.4).rotate(0,.1).thresh([0.5,0.9].smooth(1).fast(.125))
  .color(
    [...Array(8).fill(1),1,0].fast(colorChangeSpeed).smooth(.4),
    [...Array(8).fill(0),.5,.2].fast(colorChangeSpeed).smooth(.4),
    [...Array(8).fill(0),1,0].fast(colorChangeSpeed).smooth(.4))
  .modulate(noise(3.5)).modulate(o0).blend(o0,[.6,.9].smooth().fast(.34)).scale([.99,1.01].smooth(1).fast(.125)).modulateScrollY(o0).blend(o0).mask(shape(4,.8))
  //.mult(m)
  .out()

ol=osc([11,22].smooth(.9).fast(.01),.01,1.4).modulate(voronoi(()=>Math.round(am(2,.5,0))),.2).contrast([.5,1].smooth(1).fast(.03))
ol1=src(o1).modulateRotate(o1,.5)
      .add(osc(Math.PI*8,.1,1.5),.05)
    .mult(
          shape(3,.7,.9).luma(.2,.05)
    )
    .scale(.9)
    .saturate(1.07)
    .contrast(.96)
    .hue(-.03)
    .color(1.05,1,1)

src(o0)
  .add(ol.mask(shape([4,99,4].fast(.25).smooth(1),[...Array(3).fill(.3),.8].smooth(.9).fast(.01),[0,.2,.01].smooth(1)).scale(1,innerHeight/innerWidth)),[0,.8].smooth(1).fast(.125)).modulate(o0).modulate(o1,[-.1,.1].smooth().fast(.67))
  .out(o1)



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

src(o0)
  .add(src(o2).scale([1,.5,.8].smooth(1).fast(speed)).mask(shape([4,22].smooth(.7).fast(.125),[.3,.8].smooth(.7).fast(.125), [0,.2].smooth(.7).fast(.125)).scale(1,innerHeight/innerWidth)).modulate(o0))
  .out(o1)


src(s0).modulate(o1).pixelate([...Array(4).fill(innerWidth),100].smooth(.1),[...Array(4).fill(innerHeight),50].smooth(.01))
  .add(src(o1).pixelate([...Array(4).fill(innerWidth),1000,500,100,50,12].smooth(.1),[...Array(4).fill(innerHeight),1000,500,100,12].smooth(.8).fast(.25)),[1,2].smooth())
  .diff(shape(2.5).scale(()=>am(0.2,0.9)).rotate(0,.1)
  .repeat(()=>am(7,3,0),()=>am(8,1,numBins),()=>am(1,1,0),()=>am(1,1,2))
  .modulate(noise()).modulate(o3,()=>am(.2,1)).color([1,0,0].smooth(.1).fast(.0125),[0,.5,0].smooth(.1).fast(.0126),[0,0,1].fast(.0124).smooth(.1)))
  //.mult(shape(4,.25).scrollY().invert()) // FOR TALL DJs
  .out(o3)

render(o3)

// render()
a.show()

a.hide()

hush()

/*

  // stutter to death
if(fps>1)fps--;
else if(fps>0)
  fps=1e-8
else
  fps=60
*/

/******************* LIVE *******************/
http://92.104.236.19:85/control/userimage.html
http://92.105.26.117/view/viewer_index.shtml?id=18689
http://178.193.25.144/view/viewer_index.shtml?id=3569
http://178.193.25.144/view/viewer_index.shtml?id=3582
http://46.140.230.190:8888/control/userimage.html
http://83.173.201.97/#view
http://146.4.13.19:86/view/index.shtml
http://213.144.147.20:81/view/viewer_index.shtml
http://80.219.126.204:8081/javascript_simple.html
http://37.46.147.87:81/
https://www.youtube.com/watch?v=lscuNcxmUz4
http://145.40.219.164:8080/view/viewer_index.shtml?id=249
http://178.193.101.141:81/control/userimage.html
http://213.144.145.239:8090/
http://85.0.82.120/#view
http://213.3.59.218:81/cgi-bin/guestimage.html
http://178.193.239.63/view/viewer_index.shtml?id=2380
http://94.124.210.59:8083/view/viewer_index.shtml?id=5442
http://213.193.89.202/view/viewer_index.shtml?id=51440

/******************* DEAD *******************/
http://145.40.219.164/ - himmel
