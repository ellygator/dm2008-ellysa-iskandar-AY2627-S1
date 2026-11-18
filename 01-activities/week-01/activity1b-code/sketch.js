// DM2008 — Activity 1b [Georg Nees]
// Learning By Making (30 min)

let a = 0;
let x;
let y;
let w;

function setup() {
  createCanvas(500,500)
  background(0, 0, 0);
}

function draw() {
  
  x = random(width);
  y = random(height);
  w = random(10, 80);
  
  background(0, 0, 0, 10);
  
  //stroke();
  a = a + 1;
  fill(random(20, 50));
  fill(255, 255, 255, a);
  noStroke();
  ellipse(x, y, w, w);

  
}

function keyPressed() {
    saveCanvas("activity1b-image", "jpg");
}