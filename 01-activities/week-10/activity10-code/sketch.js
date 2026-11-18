let colorBtn, sizeSlider, strokeSlider, shapeSelect;
let shapeColor;

function setup() {
  createCanvas(640, 400);
  noStroke();
  textFont("Helvetica");

  // starting color
  shapeColor = color(random(255), random(255), random(255));

   // Button: change color
  colorBtn = createButton("Change Color").style("font-family", "Helvetica");
  colorBtn.position(16, 23);
  colorBtn.mousePressed(randomShapeColor);

  // Dropdown: choose shape
  createP("Shape").position(0, 50).style("margin", "8px 0 0 16px").style("font-family", "Helvetica");
  shapeSelect = createSelect();
  shapeSelect.position(16, 80);
  shapeSelect.option("ellipse");
  shapeSelect.option("rect");
  shapeSelect.option("triangle");

  // Slider: controls size
  createP("Size").position(0, 120).style("margin", "4px 0 0 16px").style("font-family", "Helvetica");
  sizeSlider = createSlider(20, 220, 100, 1);
  sizeSlider.position(16, 150);

  // Slider: controls stroke
  createP("Outline thickness").position(0, 190).style("margin", "8px 0 0 16px").style("font-family", "Helvetica");
  strokeSlider = createSlider(0, 15, 2, 1);
  strokeSlider.position(16, 220);
  
  function randomShapeColor() {
    shapeColor = color(random(255), random(255), random(255));
  }
}

function draw() {
  background(240);
  
  // background control panel
  noStroke();
  fill("#dedede");
  rectMode(CORNER);
  rect(8, 8, 185, 250, 12);

  push();
  translate(width * 0.65, height * 0.5);
  let s = sizeSlider.value();

  fill(shapeColor);

  // stroke
  if (strokeSlider.value() === 0) {
  noStroke();
  } else {
  stroke(0);
  strokeWeight(strokeSlider.value());
}

  // draw chosen shape
  let choice = shapeSelect.value();
  if (choice === "ellipse") {
    ellipse(0, 0, s, s);
  } else if (choice === "rect") {
    rectMode(CENTER);
    rect(0, 0, s, s);
  } else if (choice === "triangle") {
    triangle(-s * 0.6, s * 0.5, 0, -s * 0.6, s * 0.6, s * 0.5);
  }
  pop();
}
