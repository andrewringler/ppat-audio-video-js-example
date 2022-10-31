function setup() {
  p5beholder.prepare({});
  createCanvas(640, 480);
}

function draw() {
  background(0);

  for(let i=0; i<24; i++) {
    if (p5beholder.getMarker(i).present) {
      p5beholder.debugDrawMarker(i);
    }
  }
}