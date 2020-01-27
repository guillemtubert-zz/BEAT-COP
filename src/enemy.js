"use strict";

function Enemy(canvas, x, speed) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");

  this.size = 100;

  this.x = x;
  this.y = 0 - this.size;
  this.speed = speed;
  this.enemyImage = new Image();
  this.enemyImage.src = "./police.png";
}

Enemy.prototype.draw = function() {
  this.ctx.fillStyle = "#FF6F27";

  // fillRect(x, y, width, height)
  this.ctx.fillRect(this.x, this.y, this.size, this.size);
};

Enemy.prototype.updatePosition = function() {
  this.y = this.y + this.speed;
};

Enemy.prototype.isInsideScreen = function() {
  return this.y + this.size > 0;
};


Enemy.prototype.draw = function() {
  this.ctx.fillStyle = “#FF6F27";
  // fillRect(x, y, width, height)
  this.ctx.drawImage(this.enemyImage, this.x, this.y, this.width, this.height);
};