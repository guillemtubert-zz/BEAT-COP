"use stric";

function Game() {
    this.canvas=null;
    this.ctx = null;

    this.enemies = []; // posem els enemics en random
    this.player = null;

    this.gameIsOver = false;
    this.gameScreen = null;
}

//INICIEM EL JOC I OBRIM CANVAS

Game.prototype.start = function () {
this.canvasContainer = document. querySelector(".canvas-container");
this.canvas = this.canvasContainer.querySelector("canvas");
this.ctx = this.canvas.getContext("2d");

var containerWidth = this.canvasContainer.offsetWidth;
var containerHeight = this.canvasContainer.offsetHeight;

this.canvas.setAttribute("width", containerWidth);
this.canvas.setAttribute("height", containerHeight);

//AQUÍ VOLEM CREAR AL PERSONATGE
this.player  = new Player (this.canvas, 3, 100)

// afegim les direccions
this.handleKeyDown = function(event){
    if (event.key === "ArrowLeft") {
        this.player.setDirection("left");
    } else if (event.key === "ArrowRight"){
        this.player.setDirection("rigth");
    }
}

// This = Game instance
window.addEventListener("keydown", this.handleKeyDown.bind(this));

// COMENCEM EL LOOP DEL JOC
this.startLoop();
}