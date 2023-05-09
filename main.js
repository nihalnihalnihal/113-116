noseX = 0;
noseY = 0;

function preload(){
    mustachio = loadImage('https://i.postimg.cc/3x3QzSGq/m.png')
}

function setup(){
    canvas = createCanvas(325, 250);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(325, 250);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log("PoseNet has been initialized")
}

function draw(){
    image(video, 0, 0, 325, 250);
    
    image(mustachio, noseX - 15, noseY + 10, 30, 30,);
    
}

function takesnapshot(){
    save('myinnerclown.png');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}
