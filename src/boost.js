"use strict";

function Boost(canvas, x, speed) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");

  this.width= 100;
  this.height = 100;


  this.x = x;
  this.y = 0 - this.height;
  this.speed = speed;
  this.boostImage = new Image();
  this.boostImage.src = "imgs/boost.png";
}

Boost.prototype.draw = function() {
    // fillRect(x, y, width, height)
    this.ctx.drawImage(this.boostImage, this.x, this.y, this.width, this.height);
    console.log("DRAWING BOOST")
  };
  
Boost.prototype.updatePosition = function() {
    this.y = this.y + this.speed;
  };
  
Boost.prototype.isInsideScreen = function() {
    return this.y + this.height > 0;
  };