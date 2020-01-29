"use strict";

function Bonus(canvas, x, speed) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");

  this.width= 100;
  this.height = 100;


  this.x = x;
  this.y = 0 - this.height;
  this.speed = speed;
  this.bonusImage = new Image();
  this.bonusImage.src = "./bonus.png";
}

Bonus.prototype.draw = function() {
    // fillRect(x, y, width, height)
    this.ctx.drawImage(this.bonusImage, this.x, this.y, this.width, this.height);
  };
  
Bonus.prototype.updatePosition = function() {
    this.y = this.y + this.speed;
  };
  
Bonus.prototype.isInsideScreen = function() {
    return this.y + this.height > 0;
  };