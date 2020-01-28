"use strict";

function Player(canvas, lives, width, height) {
  this.canvas = canvas;
  this.ctx = canvas.getContext("2d");

  this.lives = lives;
  this.width = width;
  this.height = height;

  this.x = canvas.width / 2 -25;
  this.y = 650;

  this.direction = 0;
  this.speed = 10;

  this.playerImage = new Image();
  this.playerImage.src = "./racer.png";
}

Player.prototype.setDirection = function(direction) {
  // +1 right  -1 left
  if (direction === "left") this.direction = -1;
  else if (direction === "right") this.direction = 1;
  else if (direction === "stop") this.direction = 0;
};

Player.prototype.didCollide = function(enemy) {
  var playerLeft = this.x;
  var playerRight = this.x + this.width;
  var playerTop = this.y;
  var playerBottom = this.y + this.height;

  var enemyLeft = enemy.x + enemy.width;
  var enemyRight = enemy.x + enemy.width;
  var enemyTop = enemy.y*3;
  var enemyBottom = enemy.y + enemy.height;

  var crossRight = enemyLeft <= playerRight && enemyRight >= playerLeft;

  var crossLeft = enemyRight >= playerLeft && enemyLeft <= playerRight;

  var crossTop = enemyBottom >= playerTop && enemyTop <= playerBottom;

  var crossBottom = enemyBottom <= playerBottom && enemyBottom >= playerTop;

  if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
    return true;
  }

  return false;
};

Player.prototype.updatePosition = function() {
  this.x = this.x + this.direction * this.speed; //  + 5   - 5
};

Player.prototype.handleScreenCollision = function() {
  //this.updatePosition();

  var screenTop = 0;
  var screenLeft = 0;
  var screenRight = this.canvas.width;
  var screenBottom = this.canvas.height;

  if (this.x < screenLeft + this.canvas.width/11) this.direction = 1;
  else if (this.x + this.width  >= screenRight+ 27)this.direction = -1;
};

Player.prototype.removeLife = function() {
  this.lives -= 1;
};

Player.prototype.draw = function() {
  this.ctx.fillStyle = "FF6F27";

  // fillRect(x, y, width, height)
  this.ctx.drawImage(this.playerImage,this.x, this.y, 60, 100);
};
