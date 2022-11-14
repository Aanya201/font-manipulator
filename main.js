function setup() {
    canvas = createCanvas(600, 400);
    canvas.position(560, 150);
    video = createCapture(VIDEO);
    video.size( 400,400);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background('#0295d4');
}
function modelLoaded() {
  console.log('PoseNet is initiated!')
}
function gotPoses(results){
  if(results.length>0){
    conaole.log(results);
  }

}