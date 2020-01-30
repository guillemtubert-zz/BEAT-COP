# BEAT COP

## Description

BEAT COP is a game where the driver is trying to scape from a bank and see how many seconds can he or she be without being caught.
The game is over when a plice car touches the vehicle of the driver and has been caught.

## MVP 
Basic funcionalities:

Player movility: right and left.

Police cars going from the top to the bottom.

Game Over: When the player car and the police car collides.

Include a background in loop.

Button to start the game

Button to re-start the game once you got caught...



## Backlog

Adding a scoreboard

Adding a name in the beggining and during the game window

Add extra elements that you can interact with such as gas which can give you more points or other advantatges.

Add sounds and background music

Add more speed while the game is advancing.

Add a hall of fame


## Data structure

#main.js

``` 
buildSplashScreen(){
}

buildGameScreen(){
}

buildGameOverScreen(){
} 
```

#game.js
```
Game(){
  this.canvas;
}

 player, e
 
 nemies, 
 
 gameIsOver
 
 ameScreen  
 
 additional 
 
 methods: 
 
 start(), c
 
 reateObstacles() 

Game.prototype.startLoop(){
}

Game.prototype.checkCollisions{
}

Game.prototype.clearCanvas = function(){
}

Game.prototype.updateCanvas = function(){
}

Game.prototype.drawCanvas = function(){ 
}

Game.prototype.setGameOver = function(){
}
```

#Player.js
```
function Player (canvas, x, size){
canvas
ctx 
size
x
y
direction
speed
draw()
, move(), 
collidedWithEnemies(), 
handleScreenLimits()
}
```

#Enemy.js
```
function Enemy (canvas, y, speed){
canvas
ctx
size
x
y
speed
delete enemy when is out of canvas.
draw
move


```



## States y States Transitions

#- splashScreen ()
  ```
  
  - Build splash screen
  - AddEventListener (Start new game)
  
  ```
  
 #- StartGame  ()
  ```
  
  - Build game screen
  - gameStart ()
  
  ```
  
  #- gameOverScreen ()
  ```
  
  - Build game over screen ()
  - Add event listener (Re-start)  
  ```
  
## Task

```
Main - build splashscreen
Main - buildAddEventListener
Main - buildGameScreen
Main - buildGameOverScreen

Game - buildCanvas
Game - startLoop
Game . checkCollisions
Game . clearCanvas
Game - updateCanvas
Game - drawCanvas
Game - setGameOver

Player - buildCanvas
Player - ctx
Player - Size
Player - x and y
Player - direction
Player - speed

Enemy - buildCanvas
Enemy - ctx
Enemy - Size
Enemy - x and y
Enemy - direction
Enemy - speed
Enemy - deleteEnemyIfOutOfCanvas
```

## Links


### Trello
[Link url](https://trello.com/b/vezEIR6z/project-1-ironhack)


### Git
URls for the project repo and deploy
[Link Repo](https://github.com/guillemtubert/project1-race)
[Link Deploy](http://github.com) TBD


### Slides
URls for the project presentation (slides)
[Link Slides.com](https://slides.com/guillemtubert/race-to-freedom)
