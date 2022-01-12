var bg
var back
var w1, w2, w3, w4, w5, w6, w7, w8, w9, w10
var w11, w12, w13, w14, w15, w16, w17, w18, w19, w20
var w21, w22, w23, w24, w25, w26, w27, w28, w29, w30
var entry
var exit
var wallImage
var ball, ballImg
var edges
function preload(){
ballImg = loadImage("ball.png")
bg = loadImage("wall picture.jpg")
}

function setup() 
{
  createCanvas(1200,800);
back = createSprite(600,400)
back.addImage(bg)
back.scale = 5
edges = createEdgeSprites()
w1=createSprite(500,70,200,20)
w1.shapeColor = "blue"
w2=createSprite(300,600,20,500)
w2.shapeColor = "blue"
w3=createSprite(100,70,400,20)
w3.shapeColor = "blue"
w4=createSprite(1000,400,20,600)
w4.shapeColor = "blue"
w5=createSprite(800,600,20,220)
w5.shapeColor = "blue"
w6=createSprite(200,200,400,20)
w6.shapeColor = "blue"
w7=createSprite(100,400,20,200)
w7.shapeColor = "blue"
w8=createSprite(200,300,20,200)
w8.shapeColor = "blue"
w9=createSprite(300,600,400,20)
w9.shapeColor = "blue"
w10=createSprite(650,500,300,20)
w10.shapeColor = "blue"
w11=createSprite(710,700,200,20)
w11.shapeColor = "blue"
w12=createSprite(50,500,120,20)
w12.shapeColor = "blue"
w13=createSprite(1100,350,20,700)
w13.shapeColor = "blue"
w14=createSprite(900,500,20,400)
w14.shapeColor = "blue"
w15=createSprite(850,300,120,20)
w15.shapeColor = "blue"
w16=createSprite(1000,750,20,100)
w16.shapeColor = "blue"
w17=createSprite(750,700,120,20)
w17.shapeColor = "blue"
w18=createSprite(500,400,200,20)
w18.shapeColor = "blue"
w19=createSprite(670,340,20,300)
w19.shapeColor = "blue"
w20=createSprite(400,400,20,200)
w20.shapeColor = "blue"
w21=createSprite(600,235,20,350)
w21.shapeColor = "blue"
w22=createSprite(900,160,20,120)
w22.shapeColor = "blue"
w23=createSprite(670,150,20,300)
w23.shapeColor = "blue"
w24=createSprite(950,100,120,20)
w24.shapeColor = "blue"
w25=createSprite(780,200,20,220)
w25.shapeColor = "blue"
w26=createSprite(850,100,150,20)
w26.shapeColor = "blue"
w27=createSprite(780,350,20,100)
w27.shapeColor = "blue"
w28=createSprite(670,350,20,100)
w28.shapeColor = "blue"
w29=createSprite(500,135,20,100)
w29.shapeColor = "blue"
w30=createSprite(500,200,20,240)
w30.shapeColor = "blue"

entry = createSprite(20,770,50,50)
entry.shapeColor="white"
exit = createSprite(1170, 30, 50, 50)
exit.shapeColor="white"

ball = createSprite(20,770)
ball.addImage(ballImg)
ball.scale = 0.075
}

function draw() 
{
background(51);
if(keyDown(RIGHT_ARROW)){
  ball.x = ball.x+5
}
if(keyDown(LEFT_ARROW)){
  ball.x = ball.x-5
}
if(keyDown(UP_ARROW)){
  ball.y = ball.y-5
}
if(keyDown(DOWN_ARROW)){
  ball.y = ball.y+5
}
ball.bounceOff(w1)
ball.bounceOff(w2)
ball.bounceOff(w3)
ball.bounceOff(w4)
ball.bounceOff(w5)
ball.bounceOff(w6)
ball.bounceOff(w7)
ball.bounceOff(w8)
ball.bounceOff(w9)
ball.bounceOff(w10)
ball.bounceOff(w11)
ball.bounceOff(w12)
ball.bounceOff(w13)
ball.bounceOff(w14)
ball.bounceOff(w15)
ball.bounceOff(w16)
ball.bounceOff(w17)
ball.bounceOff(w18)
ball.bounceOff(w19)
ball.bounceOff(w20)
ball.bounceOff(w21)
ball.bounceOff(w22)
ball.bounceOff(w23)
ball.bounceOff(w24)
ball.bounceOff(w25)
ball.bounceOff(w26)
ball.bounceOff(w27)
ball.bounceOff(w28)
ball.bounceOff(w29)
ball.bounceOff(w30)
ball.bounceOff(edges)
drawSprites();
if(ball.isTouching(exit)){
  ball.velocityX = 0
  ball.VelocityY = 0
  textSize(40)
  fill("white")
  text("You Won!",300, 400)
  
}


}

