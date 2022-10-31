function setup() {
  // initialize our beholder library to start tracking markers
  p5beholder.prepare({});
  createCanvas(640, 480);
}

function draw() {
  background(0);

  // check the first 25 marker ID and see if they are present in the current frame
  for(let i=0; i<24; i++) {
    let marker = p5beholder.getMarker(i);
    if (marker.present) {
      // console.log(marker)
      // see https://github.com/enricllagostera/p5.beholder/blob/4d7dfa4ca0d25f285ab969fb18988933fe868910/src/p5.beholder.js#L138
      // convert marker coordinates to canvas coordinates
      let center = p5beholder.cameraToCanvasXY(marker.center.x, marker.center.y);

      // if we see marker with ID 0 we'll draw a red circle
      if(i === 0) {
        fill(255, 0, 0);
        circle(center.x, center.y, 30);
      }

      // if we see marker with ID 1 we'll draw a green circle
      if(i === 1) {
        fill(0, 255, 0);
        circle(center.x, center.y, 30);
      }

    }
  }
}
