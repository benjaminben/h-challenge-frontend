(function() {
  var cards = Array.from(document.querySelectorAll(".card"))
  cards.forEach(function(c,i,a) {
    c.querySelector(".stats").addEventListener("click", function(e) {
      c.className = c.className.match(/ liked/)
                  ? c.className.replace(/ liked/, "")
                  : c.className + " liked"
    })
  })
})()
