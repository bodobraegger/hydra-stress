
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
