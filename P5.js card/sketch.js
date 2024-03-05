let diam = 167;
let squares = [];
let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;

function setup() {
  createCanvas(500, 500);
  initializeSquares();
  img1 = loadImage('geode1.png');
  img2 = loadImage('geode2.png');
  img3 = loadImage('geode3.png');
  img4 = loadImage('geode4.png');
  img5 = loadImage('geode5.png');
  img6 = loadImage('geode6.png');
  img7 = loadImage('geode7.png');
  img8 = loadImage('geode8.png');
  img9 = loadImage('geode9.png');
}

function draw() {
  background('#8B634C');
  image(img1, 0, 0, 167, 167);
  image(img2, 167, 0, 167, 167);
  image(img3, 333, 0, 167, 167);
  image(img4, 0, 167, 167, 167);
  image(img5, 167, 167, 167, 167);
  image(img6, 333, 167, 167, 167);
  image(img7, 0, 333, 167, 167);
  image(img8, 167, 333, 167, 167);
  image(img9, 333, 333, 167, 167);

  noStroke();
//array for squares
for (let i = 0; i < squares.length; i++){
  let square = squares[i];
  if (square.isVisible){
    fill(square.color);
    rect(square.x, square.y, square.size, square.size);
  }

  }
}

function mouseClicked(){
  for (let i = 0; i < squares.length; i++){
    let square = squares[i];
    if (
      mouseX > square.x &&
      mouseX < square.x + square.size &&
      mouseY > square.y &&
      mouseY < square.y + square.size
    ) {
      square.isVisible = false;
    }
  }
  mouseClickedImages();
}

function initializeSquares(){
  let squareSize = 167;
  for (let i = 0; i < 3; i++){
    for (let j = 0; j < 3; j++){
      squares.push({
        x: i * squareSize,
        y: j * squareSize,
        size: squareSize,
        color: i % 2 === j % 2 ? '#F5E29F' : '#E09966',
        isVisible: true,
      })
    }
  }
}

function mouseClickedImages() {
if (
  mouseX > 0 && mouseX < 167 &&
  mouseY > 0 && mouseY < 167
) {
  square.isVisible = false;
} else if (
  mouseX > 167 && mouseX < 334 &&
  mouseY > 0 && mouseY < 167
) {
  img2.hide();
} else if (
  mouseX > 333 && mouseX < 500 &&
  mouseY > 0 && mouseY < 167
) {
  img3.hide();
} else if (
  mouseX > 0 && mouseX < 167 &&
  mouseY > 167 && mouseY < 334
) {
  img4.hide();
}
else if (
  mouseX > 167 && mouseX < 334 &&
  mouseY > 167 && mouseY < 334
) {
  img5.hide();
} else if (
  mouseX > 333 && mouseX < 500 &&
  mouseY > 167 && mouseY < 334
) {
  img6.hide();
} else if (
  mouseX > 0 && mouseX < 167 &&
  mouseY > 333 && mouseY < 500
) {
  img7.hide();
} else if (
  mouseX > 167 && mouseX < 334 &&
  mouseY > 333 && mouseY < 500
) {
  img8.hide();
} else if (
  mouseX > 333 && mouseX < 500 &&
  mouseY > 333 && mouseY < 500
) {
  img9.hide();
} 
}


