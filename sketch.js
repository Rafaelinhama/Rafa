function setup() {
  createCanvas(600, 600);
   background("rgb(245,218,255)");
}


function draw() {
  
  stroke ("rgb(125,51,166)");
  fill ("rgb(255,38,240)");
 
  
  // console.log(mouseIsPressed);
  
  if (mouseIsPressed){
    rect(mouseX, mouseY, 20, 35);
  }
}
