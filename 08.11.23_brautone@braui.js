/******************************************************************************/

samples({
  bell: { c6: 'https://freesound.org/data/previews/411/411089_5121236-lq.mp3' },
  bass: { d2: 'https://freesound.org/data/previews/608/608286_13074022-lq.mp3' }
})
stack(
  // s("white | pink | brown").adsr(".1:.1:0:.2").sustain(perlin.range(.4, .6)).gain(.3)
  //   .sometimesBy(.7, x => x.slow(sine.slow(1).range(0,1)))
  // ,
  // s("east*2").n(irand(6)).gain(.4),
  // s("east:6(3,8)").gain(sine.range(.1,.3).slow(1)),
  // note("c5").euclidRot(3,16,14).clip(saw.slow(2)).gain(square.slow(3).range(.1,.5)).degradeBy(.2),
  // s("hh*8").off(1/32, x=>x.add(1)).bank("RolandTR909").gain(perlin.range(0,.1)).degradeBy(.3), //bd:3(3,8)
  // s("bd:3(3,8)").bank("RolandTR909").gain(perlin.range(0,.1)).degradeBy(.3),
  // stack(
  //   "0 2 -4 7*2".degradeBy(.2).slow(2)
  //   .echo("3 | 4", 1/32, .5)
  //     .often( x=> x.sub(rand.range("-12 0",14)))
  //   // .often( x=> x.add(irand(4))
  //   .scale("G:major:pentatonic")
  //   .note()
  //   .s('gm_steel_drums').clip(1).gain(perlin.range(.01,.3)),
  // ),
  
  stack( // bel
  // bass
  // note("<D2 A2 G2 F2>").euclidLegatoRot(6,8,4).s('bass').clip(1).gain(.4).degradeBy(.9),
  // bells
  // "0".euclidLegato(3,8).degradeBy(.4)
  // .echo(3, 1/16, .5)
  // .add(rand.range("0 0 4 2","5 7 12").fast(2))
  // .scale("A:minor:pentatonic").note()
  // .velocity(perlin.range(.5,.8))
  // .s('bell').gain(.1)
  // .delay(.2).delaytime(1/3).delayfeedback(.8)
  // .echo(4, 1/12, .7),
  // note("[A5 F4]*4").s("organ_full").adsr(".1:.5:0:0").gain(.2),
  // stack(sine,cosine).segment("16 24 32").range(0,7).slow(2).scale("A:minor:pentatonic").note().degradeBy(0.01).gain(perlin.range(0,.4)),
  ),

/******************************************************************************/
/* now, to something different */
  
  
  stack(// kryptonite//.scale("<G:major")
  // bass
  // note("<[G2 D1]!2 [F#2 D1]!2>/2").sound("sawtooth").lpf(perlin.range(1200, 1800)).decay(.35).sustain(0).gain(0.8),
  // guitar
  // note("<[G3 B3 D3]!4 [D3 F#3 A3]!4>").sound("gm_harpsichord").adsr(".1:.1:0:0").sustain(perlin.range(0.1,0.3)).gain(0.6),
  // twinkle
  // note("<[[~ B5!2] [~ G5!2]]!2 [[~ F#5!2] [~ D5!2]]!2>/2").sound("gm_flute").gain(sine.slow(16).range(0.2,0.3)),
  // voice hi
  // note("<B4 A4 G4*2 ~ G4!2 D5 D5 C5 B4 A4>*2").sound("gm_voice_oohs").gain(sine.range(.5,0.8).slow(4))
  //   // .vowel("a e o u i o")
  //   .degradeBy("<.3 .8>").decay(.1).sustain(sine.slow(16)).delay(.2),
  )
  .fast(3),
  // .hush()

/******************************************************************************/
/* now, to something entirely different */
)
.slow(3)
.pianoroll({vertical:1})
.hush()

/* 
what u hear now is a neural networks interpretation of selected tracks created by the uncluded

what u heard b4 was all stack sounds of strudel.cc
*/