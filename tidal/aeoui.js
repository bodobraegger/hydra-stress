// osc().thresh().color(0,.5,.5).modulate(noise(2)).modulate(o0).blend(o0).add(osc(2,1,1.8).mult(shape(99).scale(1, innerHeight/innerWidth))).blend(o0).out()


osc(2, .1, 2).mask(shape(3)).repeat().rotate(0,.1).scale(1, innerHeight/innerWidth).modulate(o0).out(o1)

osc().thresh().modulate(noise(1.5)).modulate(o1).diff(o1, ()=>mouse.x).mask(shape(4,[.8, .9].smooth().fast(0.5))).pixelate([10,1000].smooth(), [10,1000].smooth())
.blend(s0)
.out()

solid().out()

s0.initScreen(0)

src(s0).out()

bpm=60
