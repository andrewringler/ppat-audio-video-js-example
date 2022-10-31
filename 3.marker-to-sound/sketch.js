// see https://p5js.org/examples/sound-oscillator-frequency.html
let osc;

function setup() {
  p5beholder.prepare({});
  createCanvas(640, 480);
  osc = new p5.TriOsc(); // set frequency and type
  osc.amp(0.0001);
  osc.start();
}

function draw() {
  background(0);
  oscilatorPresent = false;

  for(let i=0; i<24; i++) {
    let marker = p5beholder.getMarker(i);
    if (marker.present) {
      // console.log(marker)
      // see https://github.com/enricllagostera/p5.beholder/blob/4d7dfa4ca0d25f285ab969fb18988933fe868910/src/p5.beholder.js#L138
      let center = p5beholder.cameraToCanvasXY(marker.center.x, marker.center.y);

      if(i === 2) {
        oscilatorPresent = true;

        // change oscillator frequency based on marker X
        let freq = map(center.x, 0, width, 40, 880);
        osc.freq(freq);

        // change oscillator amplitude based on marker Y
        let amp = map(center.y, 0, height, 1, 0.01);
        osc.amp(amp);

        // draw location of our marker, for some feedback
        fill(255);
        circle(center.x, center.y, 30);
      }
    }
  }

  if(!oscilatorPresent) {
    osc.amp(0.0001);
  }
}

// https://p5js.org/reference/#/p5/userStartAudio
// browsers require a user action to enable sound
// like a mouse click, so we do that here:
function mousePressed() {
  console.log('starting sound...');
  userStartAudio();
}
