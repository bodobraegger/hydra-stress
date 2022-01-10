
src(o0).modulateHue(src(o0).scale(1.01),1).hue(0.003)
  .layer(
    osc(10,.1,2).mask(
      shape(4,0.6,1e-6)
      .modulateScale(osc(12,.3).thresh(0.2,0.2).pixelate(18).color(0,1),-.999,1)
 	)
  ).out()

// fade out gracefully
src(o0).mult(shape(4).scale(2.5)).scale(0.92).rotate(1e-2).out()
