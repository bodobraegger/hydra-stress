
s0.initCam()

bpm=120

// 1 2
// 1 2 3
// 1 2 3 4 5
// 1 2 3 4 5 6 7


src(s0)
.colorama()
.diff(shape(
  [4, 3, 1.2, 99, 99, 99, 99],
  [0.1,0.8]).color(1,0,0))
.pixelate(
  [30,40,50,300,300],
  [20,300,2000])
  .modulate(voronoi())
  .modulate(src(o0))
  .blend(o0,.4)
.pixelate(
  [30,33,30,99,200,700,999,40,4053],
  [20,30300,2000])
 .color(
  ()=>Math.sin(time/17)+20,
  ()=>Math.sin(time/13),
  ()=>Math.sin(time/19)
)
.scale(1, innerHeight/innerWidth).out()
render(o0)

shape(4).modulate(voronoi()).color([.5,.6],()=>Math.tan(time/2)).out(o1)

s1.initScreen()

src(s1).out(o2)

src(o0
   ).blend(o2)
//   .diff(o1)
  .out(o3)

render(o3)
