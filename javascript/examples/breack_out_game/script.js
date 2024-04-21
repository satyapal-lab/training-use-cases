
const playAreaWidth = 960;
const playAreaHeight = 640;


const paddleHeight = 40;
const paddleWidth = 200;

const paddleConfig = {
    x: (playAreaWidth - paddleWidth) / 2,
    y: playAreaHeight - paddleHeight,
    width: paddleWidth,
    height: paddleHeight
}

const ballRadius = 20;

const ballConfig = {
    x: playAreaWidth / 2 ,
    y: playAreaHeight - paddleConfig.height - ballRadius,
    radius: ballRadius
}

class Ball {
    #x;
    #y;
    #radius;
    #xSpeed = 2;
    #ySpeed = -2;
    #color;

    constructor(x, y, radius) {
        this.#x = x;
        this.#y = y;
        this.#radius = radius;
        this.#color = "darkgreen";
    }

    get x() {
        return this.#x;
    }

    get y() {
        return this.#y;
    }

    get radius() {
        return this.#radius;
    }

    get xSpeed() {
        return this.#xSpeed;
    }

    get ySpeed() {
        return this.#ySpeed;
    }


    set xSpeed(value) {
        this.#xSpeed = value;
    }

    set ySpeed(value) {
        this.#ySpeed = value;
    }


    draw(context) {
        // this.#ySpeed = this.#ySpeed * 1.001;
        // this.#xSpeed = this.#xSpeed * 1.001;

        this.#y += this.#ySpeed;
        this.#x += this.#xSpeed;

        context.beginPath();
        context.arc(this.#x, this.#y, this.#radius, 0, Math.PI * 2, false);
        context.fillStyle = this.#color;
        context.fill();
        context.closePath();

    }
}

class Paddle {
    #x;
    #y;
    #width;
    #height;

    #speed = 10;

    #arrowRightPressed = false;
    #arrowLeftPressed = false;

    constructor(x, y, width, height) {
        this.#x = x;
        this.#y = y;
        this.#width = width;
        this.#height = height;

        document.addEventListener("keydown", (ev) => {

            if (ev.key == "ArrowRight" || ev.key == "Right") {
                this.#arrowRightPressed = true;
            }

            if (ev.key == "ArrowLeft" || ev.key == "Left") {
                this.#arrowLeftPressed = true;
            }

        });

        document.addEventListener("keyup", (ev) => {
            if (ev.key == "ArrowRight" || ev.key == "Right") {
                this.#arrowRightPressed = false;
            }

            if (ev.key == "ArrowLeft" || ev.key == "Left") {
                this.#arrowLeftPressed = false;
            }
        });
    }

    get x() {
        return this.#x;
    }

    get y() {
        return this.#y;
    }


    draw(context) {

        if (this.#arrowRightPressed) {
            this.#x = Math.min(this.#x + this.#speed, playAreaWidth - this.#width);
        }

        if (this.#arrowLeftPressed) {
            this.#x = Math.max(this.#x - this.#speed, 0);
        }

        context.beginPath();
        context.rect(this.#x, this.#y, this.#width, this.#height);
        context.fillStyle = "grey";
        context.fill();
        context.closePath();
    }

}

class Brick {
    #x;
    #y;
    #width;
    #height;
    #color;

    #isHit = false;

    constructor(x, y, width, height, color) {
        this.#x = x;
        this.#y = y;
        this.#width = width;
        this.#height = height;
        this.#color = color;
    }

    get x() {
        return this.#x;
    }

    get y() {
        return this.#y;
    }

    set isHit(value) {
        this.#isHit = value;
    }

    get isHit() {
        return this.#isHit;
    }


    draw(context) {
        if (!this.#isHit) {
            context.beginPath();
            context.rect(this.#x, this.#y, this.#width, this.#height);
            context.fillStyle = this.#color;
            context.fill();
            context.closePath();
        }
    }

}

class Game {
    #brickColumnCount = 8;
    #brickRowCount = 3;
    #brickWidth = 110;
    #brickHeight = 30;
    #brickGap = 10;
    #colors = ["red", "green", "blue", "orange", "purple", "pink", "darkpink", "yellow", "grey"];
    #canvas = document.getElementById("canvas");
    #ctx = this.#canvas.getContext("2d");
    #ball;
    #paddle;
    #bricks;
    #status;
    #score = 0;

    constructor() {
        this.#paddle = new Paddle(paddleConfig.x, paddleConfig.y, paddleConfig.width, paddleConfig.height);
        this.#ball = new Ball(ballConfig.x, ballConfig.y, ballConfig.radius);

        this.#bricks = [];

        for (let c = 0; c < this.#brickColumnCount; c++) {
            this.#bricks[c] = [];
            for (let r = 0; r < this.#brickRowCount; r++) {
                const x = c * (this.#brickWidth + this.#brickGap);
                const y = r * (this.#brickHeight + this.#brickGap);
                const color = this.#colors[Math.floor(Math.random() * 8)];
                this.#bricks[c][r] = new Brick(x, y, this.#brickWidth, this.#brickHeight, color);

                this.#bricks[c][r].draw(this.#ctx);
            }
        }

        this.#paddle.draw(this.#ctx);
        this.#ball.draw(this.#ctx);
        this.updateScore();
    }

    gameCondition() {
        if (this.#ball.y - this.#ball.radius > playAreaHeight) {
            this.#status = "gameover";
        }
    }

    collisionDetection() {
        // Change the direction of ball if ball hit side walls
        if ((this.#ball.x + this.#ball.xSpeed - this.#ball.radius < 0) ||
            (this.#ball.x + this.#ball.xSpeed + this.#ball.radius > playAreaWidth)) {
            this.#ball.xSpeed = -this.#ball.xSpeed;
        }

        // Change the direction of ball if ball hit the top 
        if (this.#ball.y + this.#ball.ySpeed - this.#ball.radius < 0) {
            this.#ball.ySpeed = -this.#ball.ySpeed;
        }

        // Change the direction of the ball if ball hit the paddle
        if ((this.#ball.y + this.#ball.ySpeed + this.#ball.radius > playAreaHeight - paddleConfig.height) && (this.#ball.x + this.#ball.xSpeed > this.#paddle.x && this.#ball.x + this.#ball.xSpeed < this.#paddle.x + paddleConfig.width)) {
            this.#ball.ySpeed = -this.#ball.ySpeed;
        }

        for (let c = 0; c < this.#brickColumnCount; c++) {
            for (let r = 0; r < this.#brickRowCount; r++) {
                const brick = this.#bricks[c][r];
                if (!brick.isHit) {
                    if (this.#ball.x > brick.x && this.#ball.x < brick.x + this.#brickWidth &&
                        this.#ball.y > brick.y && this.#ball.y < brick.y + this.#brickHeight
                    ) {
                        this.#ball.ySpeed = -this.#ball.ySpeed;
                        brick.isHit = true;
                        this.#score++;
                        this.updateScore();
                    }
                }
            }
        }
    }

    updateScore() {
        document.getElementById("idScore").innerText = `Score: ${this.#score}`;

    }

    drawBricks() {
        for (let c = 0; c < this.#brickColumnCount; c++) {
            for (let r = 0; r < this.#brickRowCount; r++) {
                this.#bricks[c][r].draw(this.#ctx);
            }
        }
    }

    start() {
        this.#status = "running";

        let loopIdentifier;

        const redraw = () => {
            console.log(this.#status);
            try {
                this.gameCondition();
                if (this.#status == "running") {
                    this.collisionDetection();
                    this.#ctx.clearRect(0, 0, 960, 640);
                    this.#paddle.draw(this.#ctx);
                    this.#ball.draw(this.#ctx, this.#paddle);

                    this.drawBricks(this.#ctx);
                }
                else {
                    clearInterval(loopIdentifier);
                    alert("Game Over")
                }
            }
            catch (e) {
                console.log(e);
            }
        }

        loopIdentifier = setInterval(redraw, 10);


    }
}

const game = new Game();

const startButton = document.getElementById("startButton");

startButton.addEventListener("click", () => {
    game.start()
})









