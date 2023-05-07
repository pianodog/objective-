status = "";
piano_image = "";

function preload()
{
    piano_image = loadImage("picture1.jpg");
}
function setup()
{
    canvas = createCanvas(640,350);
    canvas.position(315,200);
    object_detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function modelLoaded()
{
    console.log("Model Loaded");
    status = true;
    object_detector.Detect(piano_image,gotResults);
}
function gotResult(results,error){
    if(error){
        console.error(error);
    }
    console.log(results);
}
function draw()
{
    image(piano_image,0,0,640,350);
}