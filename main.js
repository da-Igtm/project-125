difference=0;
rightWristX=0;
leftWristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);
    video.position(50,200);
    canvas=createCanvas(600,450);
    canvas.position(600,200);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}
function modelLoaded(){
    console.log("Model is loaded");
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference=floor(leftWristX-rightWristX);
    console.log(difference);
    }
    }
    function draw(){
        background("white");
        textSize(difference);
        fill("red");
        text("Daksh",100,200);
    }