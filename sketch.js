let canvas;
let lastXpos;
let lastYpos;
let scale;
let aTouchStarted;

function setup() {
  mycanvas = createCanvas(windowWidth, windowHeight);
  mycanvas.touchStarted(newTouchStarted)
  background(color(255));
  scale = 3;

  button = createButton('Start på Vytt!');
  button.position(10, 10);
  button.mousePressed(reset);

  saveButton = createButton('Lagre Vylde!');
  saveButton.position(100, 10);
  saveButton.mousePressed(saveImage);

  touchStarted = false;

  noStroke()
}

function draw() {
  if (aTouchStarted) {
    lastXpos = mouseX;
    lastYpos = mouseY;
  }

  if (mouseIsPressed) {
    if (!lastXpos > 0) {
      lastXpos = mouseX;
      lastYpos = mouseY;
    }
    // Middle piece: black or green
    if (mouseY > lastYpos) {
      fill(color('#00866e'));

    } else {
      // Up: green
      fill(color(0));
    }

    beginShape();
    vertex(lastXpos - scale, lastYpos);
    vertex(lastXpos + scale, lastYpos);
    vertex(mouseX + scale, mouseY);
    vertex(mouseX - scale, mouseY);
    endShape(CLOSE);

    // White
    fill(color(255));
    drawArea(1);

    // Black
    fill(color(0));
    drawArea(3);

    // White outer
    fill(color(255));
    drawArea(5);

  }

  lastXpos = mouseX;
  lastYpos = mouseY;
  aTouchStarted = false;
}

function drawArea(startPoint) {
  let endPoint = startPoint + 2

  // left
  beginShape();
  vertex(lastXpos - startPoint * scale, lastYpos);
  vertex(lastXpos - endPoint * scale, lastYpos);
  vertex(mouseX - endPoint * scale, mouseY);
  vertex(mouseX - startPoint * scale, mouseY);
  endShape(CLOSE);

  // right
  beginShape();
  vertex(lastXpos + startPoint * scale, lastYpos);
  vertex(lastXpos + endPoint * scale, lastYpos);
  vertex(mouseX + endPoint * scale, mouseY);
  vertex(mouseX + startPoint * scale, mouseY);
  endShape(CLOSE);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // background(color(255));
}

function reset() {
  background(color(255));
}

function newTouchStarted() {
  aTouchStarted = true;
}

function saveImage() {
  let fullfilename = "vylde.png";
  save(fullfilename);
}
