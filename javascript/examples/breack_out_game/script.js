const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const playAreaWith = 960;
const playAreaHeight = 640;
const ballRadius = 20;

let ballX = 100;
let ballY = 200;

let xSpeed = 2;
let ySpeed = 2;

const paddleHeight = 30;
const paddleWidth = 200;
const paddleSpeed = 10;
let paddleX = playAreaWith / 2;
let paddleY = playAreaHeight - paddleHeight;


const drawBall = () => {
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2, false);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

const drawPaddle = () => {
    ctx.beginPath();
    ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight)
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}

const collDetect = () => {
    if (ballY + ySpeed + ballRadius > playAreaHeight || ballY + ySpeed < ballRadius) {
        ySpeed = -ySpeed;
    }

    if (ballX + xSpeed + ballRadius > playAreaWith || ballX + xSpeed < ballRadius) {
        xSpeed = -xSpeed;
    }
}

const movePaddle = () => {
    if (leftKeyPressed) {
        paddleX = Math.max(0, paddleX - paddleSpeed)
    }
    if (rightKeyPressed) {
        paddleX = Math.min(paddleX + paddleSpeed, playAreaWith - paddleWidth) ;
    }
}

const render = () => {
    collDetect();
    ballY += ySpeed;
    ballX += xSpeed;

    ctx.clearRect(0, 0, playAreaWith, playAreaHeight);

    movePaddle();
    drawPaddle();
    drawBall();
}

let leftKeyPressed = false;
let rightKeyPressed = false;

document.addEventListener("keydown", (ev) => {
    const key = ev.key;
    if (key == "ArrowLeft") {
        leftKeyPressed = true;
    }
    if (key == "ArrowRight") {
        rightKeyPressed = true;
    }
});

document.addEventListener("keyup", (ev) => {
    const key = ev.key;
    if (key == "ArrowLeft") {
        leftKeyPressed = false;
    }
    if (key == "ArrowRight") {
        rightKeyPressed = false;
    }
});

setInterval(render, 10);
