// DM2008 — Activity 2a
// Mode Switch (20 min)
//
// Use keys 1, 2, 3 to switch between at least 3 modes.
// Each mode should change more than just the background — think fill, size, or motion.
//
// Stretch: add a 4th mode, or make the ellipse change shape between modes.

let x = 0;       // ellipse x-position
let size = 50;   // ellipse size
let bgColor;     // background color, changed by key presses

function setup() {
  createCanvas(400, 400);
  bgColor = color(255);
}

function draw() {
  background(bgColor);

  stroke(252, 3, 165);
  strokeWeight(10)
  ellipse(x, height / 2, size);

  x += 10;

  if (x > width + size / 2) {
    x = 0;
  }
}

// Keys a, s, d change the background color and motion
function keyPressed() {
  switch (key) {
    case "a":
      bgColor = color(249, 255, 74, 60);
      break; // yellow
      
    case "s":
      bgColor = color(74, 255, 252, 30);
      break; // teal
    
    case "d":
      bgColor = color(186, 252, 3,10);
      break; // lime
      
    default:
      bgColor = color(as); // white
  }
}
