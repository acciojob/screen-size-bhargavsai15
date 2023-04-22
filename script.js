//your JS code here. If required.
let x = document.getElementById('x');
let y = document.getElementById('y');
x.innerText = window.innerWidth;
y.innerText = window.innerHeight;
function reportWindowSize() {
  x.textContent = window.innerWidth;
  y.textContent = window.innerHeight;
}
window.addEventListener('resize',reportWindowSize)

window.onresize = reportWindowSize;