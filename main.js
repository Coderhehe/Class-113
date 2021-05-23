function take_snapshot() {
    save("person.png");
}
function draw() {
    image(video,0,0,400,400);
    tint(fil);
}
function setup() {
    canvas=createCanvas(400,400);
canvas.position(160,210);
video=createCapture(VIDEO);
video.hide();
fil="";
}
function afilter() {
    fil=document.getElementById("filterc").value;
}