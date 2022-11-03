solid().out()

bpm=60
speed=0.5

a.show()
a.setMax()
a.setCutoff()


render(o1)

osc().color([1, 0, .5],[1, 0, .5].fast(.125).smooth(.5),0)
.modulate(noise(2))
.mask(osc([10, 100, 200, 50, 5].smooth(.3)).thresh().rotate(0,.1))
.mult(shape(4,[.6,.7].smooth().fast(.25)).scroll(1,1000))
.pixelate([2000, 200, 20].fast(.125).smooth(0.1), [1000, 100, 10].fast(1/16).smooth(0.1))
.modulate(src(o1).mask(shape(4,.9)),.2)
.blend(o1,[0,0,1].fast(1/16).smooth(.7))
.out(o1)


s0.initScreen(2)

var cs = 1/32
src(s0).mask(shape(4,.85)).modulate(o1)
.color(
  [1.0, 0.5, 1.0, 1.1].smooth().fast(cs),
  [0.5, 0.5, 0.1, 1.0].smooth().fast(cs),
  [0.5, 1.0, 1.1, 0.9].smooth().fast(cs),
)
.colorama([0,0,0,.0001,0].fast(1/4).smooth(1))
.modulate(src(o0),[0.001, .02,.05,.1,.05,.02, 0.001].smooth())
.blend(o0)
.diff(o1,() => (a.fft[0]*.4))
.out(o0)

render(o0)
