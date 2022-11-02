bpm=60
osc().modulate(noise(2)).mask(osc(200).thresh().rotate(0,.1)).mult(shape(4,[.9,.95].smooth())).out()
