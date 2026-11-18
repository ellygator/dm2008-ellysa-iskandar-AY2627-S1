// DM2008 — Activity 2b [Guided]
// Pattern Making (40 min)
//
// Use a for loop to draw a repeating row of shapes.
// Add a condition to introduce variation — alternating color, size, or spacing.
// Then add one interaction (mouse or key) that changes the rule.
//
// Stretch: try a second row, or turn your row into a 2D grid.

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  for (let i = 0; i < width; i += 50) {
     ellipse(i + 10, height / 2, 30);
    // % (modulo) alternates between 0 and non-zero — good for switching every other shape
    if (mouseIsPressed) {
      fill(255)
      stroke(0)
    } else if (i % 100 == 0) {
      fill("#e31e66");
      stroke(255)
    } else {
      fill("#b5e31e");
      stroke(255)
    }

    // --- Your shape goes here ---
    // Try swapping this out for your own rule.
    rect(i + 10, height / 2, 30);
  }
}