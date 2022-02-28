var scoreLeftWrist=0
var scoreRightWrist=0
var xLeftWrist=0
var yLeftWrist=0
var xRightWrist=0
var yRightWrist=0
function preload() {
}
function setup() {
    canvas = createCanvas(500, 500)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}
function modelLoaded() {
    console.log("poseNet is Initialized")
}
function draw() {
    image(video, 0, 0, 500, 500)
    fill("red")
    stroke("red")

    if(scoreLeftWrist>0.2){
        numberYLeftWrist=Number(yLeftWrist)
        roundYLeftWrist=floor(numberYLeftWrist)
        volume=roundYLeftWrist/500
        
        document.getElementById("volume").innerHTML="volume="+ volume
        circle(xLeftWrist,yLeftWrist,20)
    }
}
function play() {
    song.play()
    song.setVolume(1)
    song.rate(1)
}

function gotPoses(results){
if(results.length>0){
    console.log(results)
   xLeftWrist=results[0].pose.leftWrist.x 
   yLeftWrist=results[0].pose.leftWrist.y
   xRightWrist=results[0].pose.rightWrist.x 
   yRightWrist=results[0].pose.rightWrist.y 
   console.log("Left X: "+ xLeftWrist+" Left Y: "+ yLeftWrist)
   console.log("Right X: "+ xRightWrist+" Right Y: "+ yRightWrist)
  scoreLeftWrist=results[0].pose.keypoints[9].score
  scoreRightWrist=results[0].pose.keypoints[10].score
}

}