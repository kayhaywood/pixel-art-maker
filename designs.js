let inputHeight;
let inputWidth;
let pixelCanvas;
let pixelColor;

/**
 * @desc create a grid of squares 
 * @param int $width - number of squares representing the width of the grid
 * @param int $height - number of squares representing the height of the grid
 */
function makeGrid(event) {
  event.preventDefault()
  pixelCanvas.innerHTML = '';

  for (let i = 0; i < inputHeight.value; i++) {
    const row = document.createElement("tr");
    for (let k = 0; k < inputWidth.value; k++) {
      const box = document.createElement("td");
      box.addEventListener("click", colorPixel)
      row.appendChild(box)
    }
    pixelCanvas.appendChild(row);
  }
}

/**
 * @desc create color squares
 * @param int $color - allows to color in square when clicked
 */
function colorPixel(event) {
  event.preventDefault()
  event.target.style.background = pixelColor.value
}

/**
 * @desc initializes the Dom Elements 
 * @param int $width - number of squares representing the width of the grid
 * @param int $height - number of squares representing the height of the grid
 * @param int $canvas - the grid
 * @param int $color - the color choosen to use inside squares of the grid
 */
function init() {
  inputHeight = document.getElementById("inputHeight");
  inputWidth = document.getElementById("inputWidth");
  pixelCanvas = document.getElementById("pixelCanvas");
  pixelColor = document.getElementById("colorPicker");

  document.getElementById("sizePicker").addEventListener("submit", makeGrid)
}