

speed = .5
bpm = 136
corrector = 1 / speed
rec = shape([4, 8,3.4].fast(.5), [.3, .4, .5].fast(corrector))
		.scale(1, innerHeight / innerWidth)

osc()
	.mask(shape(.9))
	.mask(shape(4,.9))
	.thresh(.6)
	.color([1,1.2,4,.8,.9].smooth(.5), 0, 0)
	.modulate(noise(2.5))
	.modulate(o0, () => .1 + Math.sin(time) * .04)
	.blend(src(o0)
		.scrollY(() => Math.sin(time) * 1e-4), () => .8 + Math.sin(time * .1) * .1)
	.modulate(o0)
	.blend(o0)
	.modulateScale(rec.scrollX([0,-.2,0,0,.3,-.1,0,0,0]), [-.2, -.1, -.1, -.1, -.5, -.4 ].fast(.33 * corrector)
		.smooth(1))
	.blend(src(o0).scrollY(.1).blend(o0,.9).modulate(o0,.3),.1)
  .out()


  // stutter to death
if(fps>1)fps--;
else if(fps>0)
  fps=1e-8
else
  fps=60

circ = (size, fade) => shape(99, size, fade).scale(1, innerHeight / innerWidth)
// a.setBins(1)
a.setSmooth(0)
am = (c = 0.01, v = 0.1, i = 0) => c + v * a.fft[i]

speed=.5

bpm = 145

solid().out(o0)

osc(Math.PI * 2, .2, 1)
  .color(1, -.5, 1)
  .mask(shape([3,4,8,99], .1, .5))
  .scale(1, innerHeight / innerWidth)
  .modulate(noise([...Array(5).keys()].smooth(1).fast(.2)))
  .modulateScale(osc(20, .01), -.5)
  .blend(src(o1)
    .scrollY(-0.1), 0.2)
  .modulate(o1, () => .1 * Math.cos(time))
  .colorama([0, .02].smooth(1))
  .saturate(() => am(1, .2, 0))
  .luma(() => am(0.008, .2, 3), 0)
  .blend(o1, .9)
  .scale(() => am(1.01, -.02, 3))
  .out(o1)

render(o1)

osc().thresh().color(.5, .5, 1).modulate(noise(2.5, .2)).mult(osc(Math.PI * 10, .01, 0).modulate(noise(1.5)).rotate(0, () => am(.2, -.0001))).modulateScale(o1).modulate(o0).modulate(o0, -.1).diff(src(o1)).blend(o0, .9).mask(shape(4, .9)).scale(() => am(1, .02)).modulateScale(o0, am(-.001, .002), .99).blend(o0).out()
render(o0)

shape([2,3,4,3].smooth(1),.1).scrollX(0,.1).colorama(.44).modulate(o2,-.2).blend(o2).scale(1.01).out(o2)
render(o2)


src(o0).layer(src(o1).luma(.2)).blend(src(o2)).modulate(o3).contrast(1.8).blend(o3,.9).out(o3)
render(o3)


s0.initScreen(2)

src(s0).modulate(o1,0.01).out(o1)

osc().blend(o1).out()


a.show()


root = "file:///C:/Users/bodie/Desktop/misc/art/hydra/"
exts = root+".hydra-extensions/"
loadScript(exts+"hydra-arrays.js")








































shape(99, .3).mult(osc(Math.PI,.1,Math.PI*.5).rotate(0,.1)).scale(1,innerHeight/innerWidth).blend(o1).rotate(0,[0,.0001,.001,.0001,0].map(e=>e*-.1).smooth(1)).modulate(o1).modulate(o1).blend(o1,.8).scale(1.01).colorama([0,.02,.025].smooth(1)).saturate([0,.5,1,1.1,1,1,1,1,1].smooth(1)).modulate(o0,.001).blend(o1,.8).out(o1)

osc(22*Math.PI, .05, 0).color(.5,.5,1).rotate(0,()=>.01+.01*Math.sin(time/100)).modulate(noise(2.5)).mult(osc(15.5*Math.PI, .04, 0).modulate(noise(3.5))).layer(src(o1).luma(.08)).modulate(o1,.2).modulate(o0,.3).blend(o0,.9).scale(1.001).out(o0)
























































s = ()=>window.innerHeight/window.innerWidth
randomWalk = (c=1e-5,v=1e-5,w=.5)=>Math.random()<w?c+Math.random()*v:-c-Math.random()*-v
solid().out()



osc(Math.PI*4, .1, 1).color(1,-.5,1).mult(shape(99,.1,.5).scale(1,()=>s())).modulate(noise(2.5).modulateScale(osc(20),-.5)).add(src(o0).scrollY(-.1),.3).modulate(o0,-.1).blend(o0,.9).scrollY(1e-2).modulateScale(shape(99,.3,.8).scale(1,()=>s(),.1,.1), [...Array(2).keys()].map(e=>e*.1).smooth()).out()



































































osc(22*Math.PI).color(.5,.5,1).modulate(noise(.5)).modulateScale(noise(1.5),.5).modulate(o0,.2).blend(o0,.9).modulate(o0,.01).blend(osc(5,.2,2).color(1,-.5,1).saturate([0,1,2,1].smooth(1)).mult(shape(99).scale(1,innerHeight/innerWidth)).modulate(o0,-.1).scale(1.2).scrollX(-.1).rotate(0,.01).modulateScale(shape(99,[.3,.4,.5,.4].smooth()).scale(1.1,innerHeight/innerWidth)).diff(shape(3,.1).rotate(0,.1).scale(1,innerHeight/innerWidth).mult(osc(.5,.4,2)).scrollX(0,randomWalk).scrollY(0,()=>.1+10e-5*a.fft[3]).repeat(3,3)).blend(o0,.9)).out()



































osc(15, 0.1, 1).color(1, -0.5, 1).mask(shape(200, 0.1, 0.5).modulate(noise(5)).modulateScale(osc(20), -0.5)).add(src(o0).scrollY(-0.1), 0.3).modulate(o0, -0.1).blend(o0, 0.9).scrollY(-0.001).modulateScale(shape(200, 0.3, 0.8).scale(1, 0.5), [0.1, 0].smooth().fast(0.3)).out(o1)
shape(99, .5).mult(osc(Math.PI,.1,2).rotate(0,.1)).scale(1,innerHeight/innerWidth).blend(o0).rotate(0,[0,.0001,.001,.0001,0].map(e=>e*-.1).smooth(1)).modulate(o0).modulate(o0).blend(o0,.8).colorama([0,.01,.02].smooth(1)).saturate([.1,.5,1,1.1,1,1,1,1,1].smooth(1)).blend(o0,.8).blend(o1,.2).scale(1.01).out()






























                            10.02.22 @ DÜKER
                         drahtschmiedlisteig 13

                                  START
                                  22:00
                                prix libre
                            soli 1.mai antirep

                           SOUND 22:00 VISUALS
                     lua, gaudi, joh & bodie [live]
                               SOUND 00:00
                                endobliss
                               SOUND 02:00
                              baby sunshine






































noise(1.5).modulateScale(voronoi(1.5)).out(o1)

solid().out(o1)

speed=.5
a.setSmooth(0)

osc(.9,.1,2).colorama(()=>Math.sin(time*.1)).kaleid([4,2,1,2,4,8,16,8].fast(.5).smooth(1)).blend(src(o2).scale(.9)).out(o2)

solid().invert().color(1,0,1).out(o2)

osc(32).rotate(0,.2).modulate(osc(40)).mult(osc().color(.5,.5,1)).modulate(o1).blend(o0).modulate(o0).blend(o0).scale(.99)
.mult(shape(4,.9)).add(
shape(3).color(1,0,0).scale(.5,()=>innerHeight/innerWidth).rotate(0,.1).scrollX(()=>a.fft[2]*.1,.1).modulate(o0,[0,.1,.5,
  .9].smooth(1)).add(
shape(99).color(1,0,0).scale(.5,()=>innerHeight/innerWidth).scrollX(0,.1))).blend(o0,.6)
.diff(src(o2).blend(o0).scale(()=>Math.max(.9, Math.min(a.fft[0],1)*1)).mask(shape(4,.3,[0,.5].fast(.2).smooth(1)).scale(1,innerHeight/innerWidth))).luma([0,.05,0].smooth(1))
.modulate(o0).scrollX(()=>Math.sin(time*.1)*-.001).add (o3
).out()









































speed=.2
osc(15*Math.PI,.1).modulate(noise(2.5)).rotate(Math.PI*.5,-.5).thresh().mult(
osc(22*Math.PI, .1, 0).color(.5,.5,1).modulate(noise(2.5)).modulate(voronoi(.5)).modulate(o0).modulate(o0).blend(o0).blend(o0).modulate(noise(3.5).thresh())
  .mask(shape(4,.8)))
  .add(shape(3,.1)
    .scale(1,1,()=>innerHeight/innerWidth).color(1,0,0).rotate(0,.4).scrollX(0,()=>.3+Math.random()*1e-5))
  .modulate(o0).blend(o0)
  .modulate(o0).blend(o0)
  .modulateScale(shape(99,.3,.1).scale(1,1,()=>innerHeight/innerWidth).color(1,0,0).rotate(0,1))
  .blend(o0)
  .add(shape(99,[...Array(10).keys()].map(e=>e*.02).smooth(1)).scale(.8,.8,()=>innerHeight/innerWidth).color(1,0,0).rotate(0,.4).scrollX(0,()=>.3))
  .modulate(src(o0).modulate(o0))
  .diff(osc(.9,.1,2)..colorama(()=>Math.sin(time*.1)).kaleid([4,2,1,2,4,8,16,8].smooth(1)).mask(shape(4,.3,0).scale(.5).scale(1,1,()=>innerWidth/innerHeight)))
  .out()



























speed=.3; osc(Math.PI * 20, .06) .rotate(Math.PI * .5) .thresh() .color([...Array(10).keys()].map(e=>e*.1).smooth(1), .5, 1) .modulate(noise(1.5)) .modulate(voronoi(10.5)) .mask(shape(4, .9)) .modulate(o0) .blend(o0) .blend(o0) .modulate(shape(() => 2 + time % 1 * .001) .rotate(() => (time % 360) * .25 + 9) .scale(1, 1, innerWidth / innerHeight), .1) .modulate(o0) .modulate(o0) .mult(voronoi() .modulate(noise(3)), .3) .blend(o0, .2).mask(shape(4,0.9)) .add( solid().color(0,0,0).blend(osc(.9, .5, .0) .kaleid([3, 4, 5, 7, 8, 9, 16].fast(Math.PI * .02)) .color(0, .5, 1) .colorama(.7) .rotate(.009, () => Math.sin(time) * -0.01) .modulateRotate(o0, () => Math.sin(time) * .003) .modulate(o0, .9) .scale(.9) .mask(shape(4, .3, [0,.1,.2,.1,0].smooth(1)).scale(1,1,innerWidth/innerHeight))),.5) .blend(o0) .modulate(src(o0) .diff(o0), .02) .out()
