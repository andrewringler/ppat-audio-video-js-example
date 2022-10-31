# Fiducial Markers in Javascript
A few Javascript web demos using a webcam to track <a href="https://en.wikipedia.org/wiki/Fiducial_marker">fiducial markers</a> in 2D space to convert them to visual and auditory patterns. We use the [p5js](https://p5js.org/) library to create visuals and sound and use the <a href="https://github.com/enricllagostera/p5.beholder">p5.beholder</a> library to track Original 7x7 ArUco markers using any available webcam.

## [Demos](https://andrewringler.github.io/ppat-audio-video-js-example/)
- [0.markers](https://andrewringler.github.io/ppat-audio-video-js-example/0.markers/aruco-print-master/) generate a web page with original ArUco markers, useful for printing.
- [1.marker-example](https://andrewringler.github.io/ppat-audio-video-js-example/1.marker-example/) use webcam and print out debug information when ArUco markers are present in frame
- [2.marker-to-visual](https://andrewringler.github.io/ppat-audio-video-js-example/2.marker-to-visual/) convert ArUco markers in webcam frames to shapes on screen
- [3.marker-to-sound](https://andrewringler.github.io/ppat-audio-video-js-example/3.marker-to-sound/) convert ArUco markers in webcam frames to sound