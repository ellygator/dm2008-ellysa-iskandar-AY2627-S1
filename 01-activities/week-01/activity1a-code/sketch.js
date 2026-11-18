let c;

function setup() {
  createCanvas(400, 400);
  c = color (118, 209, 6)
}

function draw() {
  background(252, 3, 169);
  // Face
  // x, y, width, height
  fill(c)
  stroke(c)
  ellipse(200, 200, 250, 160)

  fill(c)
  stroke(c)
  ellipse(140, 140, 90, 90)

  fill(c)
  stroke(c)
  ellipse(260, 140, 90, 90)

  // Eyes
  fill(255)
  stroke(255)
  ellipse(260, 135, 50, 50)

  fill(0)
  stroke(0)
  ellipse(250, 140, 30, 30)
  
  fill(255)
  stroke(255)
  ellipse(140, 135, 50, 50)
  
  fill(0)
  stroke(0)
  ellipse(150, 140, 30, 30)

  // Mouth
  fill(205,28,24)
  stroke(205,28,24)
  ellipse(200, 240, 100, 50)
  
}