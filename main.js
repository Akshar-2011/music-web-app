var sound = "";
var sound1 = "";
leftWristX = "";
leftWristY = "";
rightWristX = "";
rightWristY = "";
function preload(){
    sound = loadSound(music.mp3);
    sound1 = loadSound(music2.mp3);
}
function setup(){
    canvas = createCanvas(500, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modalLoaded);
    posenet.on('pose', gotPoses);
}
function modalLoaded(){
    console.log("Posenet is initialized");
}
function draw(){
    image(video, 0, 0, 500, 400);
}
function gotPoses(results){
    if(results > 0){
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
    }
}