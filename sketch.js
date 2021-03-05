
var im1,im2,sound;
var im,button,show;
var text1= "start"
function preload(){
  im1 = loadImage("bday.jpg")
  im2= loadAnimation("inayat1.jpeg","inayat1.jpeg","inayat1.jpeg","inayat2.jpeg","inayat2.jpeg","inayat2.jpeg","inayat3.jpeg","inayat3.jpeg","inayat3.jpeg")
sound=loadSound("bday.wav")
}

function setup(){
  createCanvas(windowWidth,windowHeight)
 im = createSprite(width/2,height/2+50)
 im.addImage(im1)
 im.scale = 0.5

 button = createSprite(width/2+200,height/2-170,50,50)
 button.visible = false

show=createSprite(width/2,height/2+50)
show.addAnimation("show",im2)
show.scale = 0.8
show.visible =false

}

function draw(){
  background("black")
  drawSprites();
  if(text1==="start"){
    fill("red")
    stroke(50)
  textSize(30)
    text("Make A Wish And Click Me", width/2-150,height-200)
  }
  if(touches.length>0||mousePressedOver(button)){
show.visible=true
sound.play()
im.lifetime = 0
text1 = "play"
  }

}