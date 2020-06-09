var userImg, bombImg, tankImg;
var user, bomber, tank;

function preload() {
    userImg = loadImage("images/user.png");
    bombImg = loadImage("images/user bomb.jpg");
    tankImg = loadImage("images/user tank.jpeg");
}

function setup() {
    var canvas = createCanvas(800, 700);

    user = new Player();
}

function draw() {
    background("red");
    user.display();
}


