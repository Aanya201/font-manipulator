difference = 0;
rightWristX = 0;
leftWristX = 0;


function setup() {
    canvas = createCanvas(600, 400);
    canvas.position(560, 150);
    video = createCapture(VIDEO);
    video.size( 400,400);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
  background('#02def2');
  textSize(difference);
  fill('#9302e0');
  text("BTS", 100, 200);
}
function modelLoaded() {
  console.log('PoseNet is initiated!')
}
function gotPoses(results){
  if(results.length>0){
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX-rightWristX);
    document.getElementById("length").innerHTML = "Font Size ="+difference+"px";
  }

}
