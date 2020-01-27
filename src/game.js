"use strict";

function Game() {
  this.canvas = null;
  this.ctx = null;

  this.enemies = []; // push enemiy objects at random
  this.player = null;

  this.gameIsOver = false;
  this.gameScreen = null;
  this.score = 0;
  this.lines = [];
  this.grass=null;
}

//canvas background

var img = new Image();
img.src = './carretera.png'

var backgroundImage = {
  img: img,
  y: 0,
  speed: 10,


  move: function(canvas) {
    this.y += this.speed;
    this.y %= canvas.height;
  },

  draw: function(canvas, ctx) {
    ctx.drawImage(this.img, 0, this.y);
    if (this.speed < 0) {
      ctx.drawImage(this.img, 0, this.y + this.img.height, this.img.width, this.img.height);
    } else {
      ctx.drawImage(this.img, 0, this.y - canvas.height, this.img.width, this.img.height);
    }
  },
};

// Initialize the game and canvas
Game.prototype.start = function() {
  this.canvasContainer = document.querySelector(".canvas-container");
  this.canvas = this.canvasContainer.querySelector("canvas");
  this.ctx = this.canvas.getContext("2d");

  this.livesElement = this.gameScreen.querySelector(".lives .value");
  this.scoreElement = this.gameScreen.querySelector(".score .value");

  var containerWidth = this.canvasContainer.offsetWidth;
  var containerHeight = this.canvasContainer.offsetHeight;

  this.canvas.setAttribute("width", 787);
  this.canvas.setAttribute("height", 787);

  var sixth = containerWidth/6;
  this.lines.push(sixth - sixth%10)
  this.lines.push(sixth*3 - containerWidth/16)
  this.lines.push(sixth*5 - containerWidth/7.5)

  // Create the player
  this.player = new Player(this.canvas, 3, 100);

  // Add keydown event listeners
  this.handleKeyDown = function(event) {
    if (event.key === "ArrowLeft") {
      console.log("LEFT");
      this.player.setDirection("left");
    } else if (event.key === "ArrowRight") {
      console.log("RIGHT");
      this.player.setDirection("right");
    }
  };

  // this = game instance
  window.addEventListener("keydown", this.handleKeyDown.bind(this));

  // Start the game initially
  this.startLoop();
};

Game.prototype.startLoop = function() {
  var loop = function() {
    // 1. UPDATE THE STATE (game, player, enemy)

    // 0. Player was created already

    // 1. Create enemies randomly

    this.score++;
    this.scoreElement.innerHTML = this.score;

    if (Math.random() > 0.98) {
      var randomNumber = Math.floor(Math.random()*this.lines.length);
      var randomLine = this.lines[randomNumber];
      // var randomX = this.canvas.width * Math.random();
      var newEnemy = new Enemy(this.canvas, randomLine, 5);

      this.enemies.push(newEnemy);
    }

    backgroundImage.move(this.canvas);

    // 2. Check if the player had collisions with enemies (check all of the enemies)
    this.checkCollisions();

    // 3. Update the player and check if he is colliding the screen
    this.player.handleScreenCollision();
    this.player.updatePosition();
    // 4. Update the existing enemies (move them)
    // 5. Check if the enemies our out of the screen
    // [x, x, x ,x ]

    this.enemies = this.enemies.filter(function(enemyObj) {
      enemyObj.updatePosition(); // 4
      return enemyObj.isInsideScreen(); // 5
    });

    // 2. CLEAR THE CANVAS
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // 3. UPDATE THE CANVAS (DRAW)
    backgroundImage.draw(this.canvas,this.ctx);
    // 1. Draw the player
    this.player.draw();

    // 2. Draw all of the enemies
    this.enemies.forEach(function(enemyObj) {
      enemyObj.draw();
    });

    // 4. TERMINATE THE LOOP IF THE GAME IS OVER
    if (!this.gameIsOver) {
      requestAnimationFrame(loop);
    }
  }.bind(this);

  // requestAnimationFrame(loop);
  loop();
};

Game.prototype.updateGameStats = function() {};

Game.prototype.gameOver = function() {
  this.gameIsOver = true;

  this.startOver(); // the callback function ( gameOver ) passed from main()
};

Game.prototype.removeGameScreen = function() {};

Game.prototype.checkCollisions = function() {
  this.enemies.forEach(function(enemy) {
    if (this.player.didCollide(enemy)) {
      this.player.removeLife();

      // move the enemy out of the screen
      enemy.y = 0 - enemy.size;

      if (this.player.lives === 0) {
        this.gameOver();
      }
    }
  }, this);
};

Game.prototype.passGameOverCallback = function(gameOverFunc) {
  this.startOver = gameOverFunc;
};