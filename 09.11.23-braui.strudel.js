// kryptonite
//.scale("<G:major")
stack(
// guitar
note("<[G3 B3 D3]!4 [D3 F#3 A3]!4>").sound("gm_harpsichord"),
// bass
note("<[B1 G0]!2 [F#1 D0]!2>/2").sound("gm_synth_bass_1").lpf("1600").decay(.35).sustain(0).gain(1.4),
// twinkle
note("<[[~ B5!2] [~ G5!2]]!2 [[~ F#5!2] [~ D5!2]]!2>/2").sound("gm_voice_oohs").gain(0.2),
// voice hi
note("<B4 A4 G4*2 ~ G4!2 D5@2 C5 B4 A4>*2").sound("gm_voice_oohs").gain(sine.range(.3,.8).slow(4)).degradeBy("<.2 .4>").pan(perlin),
sound(`[[hh hh hh], bd(3, 8)]/2`).bank('RolandTR808').gain(0.6),
  voicing("<G!4 D!4>").sound('folkharp'),
)
  .compressor("-20:4:10:.002:.02")
  .room(".2:.2")
// .hush()
