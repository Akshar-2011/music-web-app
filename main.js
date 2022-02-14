var sound = "";
var sound1 = "";
function preload(){
    sound = loadSound(music.mp3);
    sound1 = loadSound(music2.mp3);
}
function setup(){
    canvas = createCanvas(500, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 500, 400);
}