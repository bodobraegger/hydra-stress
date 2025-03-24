// https://strudel.cc/#JDogc3RhY2soCnMoIndoaXRlIHwgcGluayB8IGJyb3duIikuYWRzcigiLjE6LjE6MDouMiIpLnN1c3RhaW4ocGVybGluLnJhbmdlKC40LCAuNikpLmdhaW4oLjMpCiAgICAuc29tZXRpbWVzQnkoLjcsIHggPT4geC5zbG93KHNpbmUuc2xvdygxKS5yYW5nZSgwLDEpKSkKLAovLyBzKCJlYXN0KjIiKS5uKGlyYW5kKDYpKS5nYWluKC40KSwKLy8gcygiZWFzdDo2KDMsOCkiKS5nYWluKHNpbmUucmFuZ2UoLjEsLjMpLnNsb3coMSkpLAovL25vdGUoImI1IikuZXVjbGlkUm90KDMsMTYsMTQpLmNsaXAoc2F3LnNsb3coMikpLmdhaW4oc3F1YXJlLnNsb3coMykucmFuZ2UoLjEsLjUpKS5kZWdyYWRlQnkoLjIpLAovLyBzKCJoaCo4Iikub2ZmKDEvMzIsIHg9PnguYWRkKDEpKS5iYW5rKCJSb2xhbmRUUjkwOSIpLmdhaW4ocGVybGluLnJhbmdlKDAsLjEpKS5kZWdyYWRlQnkoLjMpLCAvL2JkOjMoMyw4KQovLyBzKCJiZDozKDMsOCkiKS5iYW5rKCJSb2xhbmRUUjkwOSIpLmdhaW4ocGVybGluLnJhbmdlKDAsLjEpKS5kZWdyYWRlQnkoLjMpLAopCi5zbG93KDMpCi5wdW5jaGNhcmQoe3ZlcnRpY2FsOjAsIGxhYmVsczoxfSkuY29sb3IoImJsdWUiKQouX3NwZWN0cnVtKCkKLy8gLmh1c2goKQ%3D%3D
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
.color("blue")
.punchcard({vertical:0, labels:1})
._spectrum()
// .hush()
