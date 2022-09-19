leftWristX = 0;
rightWristX = 0;
diff = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas =createCanvas(550,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses)
}

function modelLoaded() {
    console.log("Model Loaded!")
}

function gotPoses(results) {
    if (results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        diff = floor(leftWristX - rightWristX);
    }
}

function draw() {
    background("white");
    document.getElementById("font_size").innerHTML = "Font size: " + diff+" px";
    textSize(diff);
    fill("red");
    text("Manas.N",50,400);
}