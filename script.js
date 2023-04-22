//your JS code here. If required.
let x = document.getElementById('x');

let y = document.getElementById('y');
function reportWindowSize() {
  x.textContent = window.innerWidth;
  y.textContent = window.innerHeight;
}
window.addEventListener('resize',reportWindowSize)

window.onresize = reportWindowSize;