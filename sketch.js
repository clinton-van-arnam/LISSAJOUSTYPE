// lissajous curve

var t = 0; // time
var speed = 0.00001;

let numWords = 25;
let sentence = "HARMONIC MOTION";
let sentenceArray = [];
let fontSize = 25;
var xsize = 400;
var ysize = 400;

let tx = 0;
let ty = 0;


//easing
let ex = 0;
let ey = 0;
let easing = 0.0005;

let touch;

function setup() {
  smooth();
  noCursor();
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  fill(255);
  textSize(fontSize);
  xsize = windowWidth/2.5;
  ysize = windowHeight/2.5;
  sentenceArray = sentence.split("");


}

function draw() {
  background(0);
  fill(255);
  let distX = mouseX - ex;
  // this increases every frame and eventually catches up
  ex += distX * easing;
  
  let distY = mouseY - ey;
  // this increases every frame and eventually catches up
  ey += distY * easing;

  var a = map(ex, 0, windowWidth, 2, 10);
  var b = map(ey, 0, windowHeight, 2, 10);
  
  print(mouseX,ex);

  // if (touches.length >= 1) {
  //   let mousePosition = "(" + touches[0].x + "," + touches[0].y + ")";
  //   text(mousePosition, touches[0].x + 50, touches[0].y - 50);
  //   strokeWeight(0);
  // }

  for (j = 0; j < numWords; j++) {
    // number of times each word is displayed

    for (let i = 0; i < sentenceArray.length; i++) {
      let Angle = t; // first just set it to the current time, also considered the radian angle
      Angle = Angle + (i / sentenceArray.length) * (-PI / 5); // each letter should have a little offset
      Angle = Angle + (j / numWords) * (PI * 5); // each word has an additional offset

      x = xsize * sin(Angle * a); // here is where you can apply a modifier to the final angle with the slider
      y = ysize * cos(Angle * b); // here is where you can apply a modifier to the final angle with the slider

      text(sentenceArray[i], width / 2 + x, height / 2 + y);
      // ellipse(width/2+x,height/2+y,10,10);
    }
  }
  t += speed; // since this time is moving a radian angle, make it much slower.
  // time moves outside of all the drawing functions
}

function touchStarted() {
  tx = mouseX;
  ty = mouseY;
  return false;
}

function touchMoved() {
  tx = mouseX;
  ty = mouseY;
  return false;
}
