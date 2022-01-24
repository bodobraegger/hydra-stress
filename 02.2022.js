
src(o0).modulateHue(src(o0).scale(1.01),1).hue(0.003)
  .layer(
    osc(10,.1,2).mask(
      shape(4,0.6,1e-6)
      .modulateScale(osc(12,.3).thresh(0.2,0.2).pixelate(18).color(0,1),-.999,1)
 	)
  ).out()

// fade out gracefully
src(o0).mult(shape(4).scale(2.5)).scale(0.92).rotate(1e-2).out()

shape(3).color(() => Math.tan(time), () => Math.cos(time), () => Math.sin(time), () => Math.arctan(time)).out(o1)
//dimming screen
src(o0).scale(1.01).rotate(0.01).modulateHue(o0).blend(o1,0.1).diff(o0,0.001).out()
osc(105, 0.01, 0).thresh().modulateRotate(noise(10000).thresh()).modulateScale(osc(105, 0.01).rotate(()=>Math.sin(time)).mask(shape(3))).diff(shape(4, 0.9).color(0,0,1).diff(solid().invert().color(1,1,0)).invert()).out(o2)
src(o0).blend(o2).out(o3)

src(o3).scale(1.01).rotate(0.01).modulateHue(o3).mult(o3,0.001).out(o3)


src(o3).out(o3)


// nice frame, noise to modulate osc 
s0.initCam()
src(s0)
	.repeat(3, 3)
	.color(0, 0, 1)
		.add(src(o1).mask(shape(3).invert()))
	.add(shape(3)
		.invert()
		.modulateScale(noise(4), 0.1)
		.color(0, 0, 1))
	.blend(o0, 0.9)
	.scale(1.02)
	.mask(shape(4, 0.95))
	.add(osc(100, 0.1, 2)
		.modulateRotate(noise(2))
		.mask(shape(4, 0.7)
			.invert())
		.thresh())
	.out()

// whacko selfies
s0.initCam()
osc().thresh().modulate(voronoi(0.5, 0.2)).modulate(voronoi(1)).modulate(noise(1)).modulateScale(noise(1, 0.2).thresh())
  .diff(src(s0).modulate(voronoi(4,0.2)).invert().diff(shape(3).modulate(voronoi(4,0.2)))
  .mult(shape(4, 0.9)))
  .blend(o0)
  .scale(1,1,()=>window.innerWidth/window.innerHeight)
  .out()

// procedural graphics
voronoi(10,0).diff(src(o1).scale(0.9)).diff(shape(()=>Math.sin(time)+3)).mask(shape(99, 0.5).invert()).out(o1)
src(s0)
.modulate(osc().thresh().modulate(noise(1))).modulate(voronoi(1).thresh())
.modulateScale(shape(()=>Math.sin(time)*0.5+3), ()=>Math.sin(time)*0.5)
.mask(shape(4, 0.5)).color(1,0,)
.modulate(o0)
.add(src(o1).mask(shape(4, 0.5).invert()))
  .scale(.6, 1, () => window.innerWidth / window.innerHeight)
.mult(shape(4, 0.8),0.9)
.add(shape(4, 0.9).invert())
  
  .out(o0)

