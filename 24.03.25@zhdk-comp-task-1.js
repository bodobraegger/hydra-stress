// https://strudel.cc/#LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqLwogIHN0YWNrKAogICAgcygid2hpdGUgfCBwaW5rIHwgYnJvd24iKS5hZHNyKCIuMTouMTowOi4yIikuc3VzdGFpbihwZXJsaW4ucmFuZ2UoLjQsIC42KSkuZ2FpbiguMykKICAgICAgLnNvbWV0aW1lc0J5KC43LCB4ID0%2BIHguc2xvdyhzaW5lLnNsb3coMSkucmFuZ2UoMCwxKSkpCiAgICAsCiAgICAvLyBzKCJlYXN0KjIiKS5uKGlyYW5kKDYpKS5nYWluKC40KSwKICAgIHMoImVhc3Q6NigzLDgpIikuZ2FpbihzaW5lLnJhbmdlKC4xLC4zKS5zbG93KDEpKSwKICAgIC8vIG5vdGUoImI1IikuZXVjbGlkUm90KDMsMTYsMTQpLmNsaXAoc2F3LnNsb3coMikpLmdhaW4oc3F1YXJlLnNsb3coMykucmFuZ2UoLjEsLjUpKS5kZWdyYWRlQnkoLjIpLAogICAgcygiaGgqOCIpLm9mZigxLzMyLCB4PT54LmFkZCgxKSkuYmFuaygiUm9sYW5kVFI5MDkiKS5nYWluKHBlcmxpbi5yYW5nZSgwLC4xKSkuZGVncmFkZUJ5KC4zKSwgLy9iZDozKDMsOCkKICAgIHMoImJkOjMoMyw4KSIpLmJhbmsoIlJvbGFuZFRSOTA5IikuZ2FpbihwZXJsaW4ucmFuZ2UoMCwuMSkpLmRlZ3JhZGVCeSguMyksCiAgKQogIC5zbG93KDMpCiAgLnBpYW5vcm9sbCh7dmVydGljYWw6MX0pCiAgLy8gLmh1c2goKQogIA%3D%3D
/***********************************************************************/
stack(
s("white | pink | brown").adsr(".1:.1:0:.2").sustain(perlin.range(.4, .6)).gain(.3)
    .sometimesBy(.7, x => x.slow(sine.slow(1).range(0,1)))
,
// s("east*2").n(irand(6)).gain(.4),
s("east:6(3,8)").gain(sine.range(.1,.3).slow(1)),
//note("b5").euclidRot(3,16,14).clip(saw.slow(2)).gain(square.slow(3).range(.1,.5)).degradeBy(.2),
s("hh*8").off(1/32, x=>x.add(1)).bank("RolandTR909").gain(perlin.range(0,.1)).degradeBy(.3), //bd:3(3,8)
s("bd:3(3,8)").bank("RolandTR909").gain(perlin.range(0,.1)).degradeBy(.3),
)
.slow(3)
.pianoroll({vertical:1})
// .hush()
