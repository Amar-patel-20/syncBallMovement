var ball;
var ballPosition;
var database;
var position;

function setup(){
    createCanvas(400,400)
    database = firebase.database()
    ball = createSprite(200,200,40,40)
    ball.shapeColor = "green"
    ballPosition = database.ref("ball/position")
    ballPosition.on("value",readPosition)
}
function draw(){
    background("skyblue")

    if (keyDown(RIGHT_ARROW)){
        writePosition(1,0)
    }
    if (keyDown(LEFT_ARROW)){
        writePosition(-1,0)
    }
    if (keyDown(UP_ARROW)){
        writePosition(0,-1)
    }
    if (keyDown(DOWN_ARROW)){
        writePosition(0,1)
    }
    drawSprites()
} 
function readPosition(data){
    position = data.val()
    ball.x = position.x
    ball.y = position.y
}
function writePosition(x,y){
    database.ref("ball/position").set({
        "x":position.x + x,
        "y":position.y + y
    })
    
}