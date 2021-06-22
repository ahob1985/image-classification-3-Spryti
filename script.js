// Author: Jordan Muturi

// Global UI Variables
let canvasDiv;
let canvas;
let textDiv;
let textP;
 
// Global ML Variables
let mobilenet;
let video
let isModelReady;

function setup() {
  canvasDiv = createDiv();
  canvas = createCanvas(640, 480);
  canvas.parent(canvasDiv);
  textDiv = createDiv();
  textP = createP();
  textP.parent(textDiv);
  video = createCapture("VIDEO");
  video.style("display", "none");
  isModelReady = false
  mobilenet = ml5 imageClassifier("MobileNet", modelReady);
}

function draw() {

}

function modelReady() {

}

function gotResults(error, results) {

}
