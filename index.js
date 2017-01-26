
var cursorX = 0
var cursorY = 0

function update(e){
  cursorX = e.clientX || e.touches[0].clientX
  cursorY = e.clientY || e.touches[0].clientY
  EQCSS.apply()
}

// Update cursor position every mouse/touch move
document.addEventListener('mousemove',update)
document.addEventListener('touchmove',update)
