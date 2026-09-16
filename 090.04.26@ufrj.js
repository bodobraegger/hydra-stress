osc(12,0.01,[2,1,0]).modulate(noise(1.2).mask(shape(4,1.2))).colorama().modulate(s0)
.add(shape(4, 2).scale(0.1).scrollX(()=>Math.cosin()))
.modulate(src(o0)).blend(src(o0))
.out()

s0.initCam(0)
