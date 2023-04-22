window.addEventListener('resize', function() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const sizeInfo = document.querySelector('#sizeInfo');
  if (sizeInfo) {
    sizeInfo.innerHTML = `<h1>Width: ${width} and Height: ${height}</h1>`;
  }
});
