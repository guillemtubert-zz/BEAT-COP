"use strict";

function Boost(canvas, x, speed) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");

  this.width= 100;
  this.height = 100;


  this.x = x;
  this.y = 0 - this.height;
  this.speed = speed;
  this.speedImage = new Image();
  this.speedImage.src = "imgs/bonus.png";
}

Speed.prototype.draw = function() {
    // fillRect(x, y, width, height)
    this.ctx.drawImage(this.speedImage, this.x, this.y, this.width, this.height);
  };
  
Speed.prototype.updatePosition = function() {
    this.y = this.y + this.speed;
  };
  
Speed.prototype.isInsideScreen = function() {
    return this.y + this.height > 0;
  };