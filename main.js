
music = "";
music2 = ""; 
leftwrist_x = 0;
leftwrist_y = 0;
rightwrist_x = 0;
rightwrist_y = 0;

function preload()
{
    music = loadSound("music.mp3");
    music2 = loadSound("music2.mp3");
}

function setup()
{
    canvas = createCanvas(500,400);
    canvas.position(480,230);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',getPoses);
}

function modelLoaded()
{
    console.log("PoseNet has loaded!");
}

function draw()
{
    image(video,0,0,500,400);
}

function getPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftwrist_x = results[0].pose.leftWrist.x;
        leftwrist_y = results[0].pose.leftWrist.y;
        console.log("Left wrist x = "+leftwrist_x + "Left wrist y = "+leftwrist_y);

        rightwrist_x = results[0].pose.rigthWrist.x;
        rightwrist_y = results[0].pose.rightWrist.y;
        console.log("Right wrist x = "+rightwrist_x + "Right wrist y = "+rightwrist_y);
    }
}