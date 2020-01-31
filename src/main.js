"use strict";

// Creates a HTML elements out of the string that looks like html
function buildDom(htmlString) {
  var div = document.createElement("div");

  div.innerHTML = htmlString;

  return div.children[0];
}

// Run on initial start and call other functions that manage the game
function main() {
  var game;
  var splashScreen;
  var gameOverScreen;
  var name;

  // SPLASH SCREEN
  function createSplashScreen() { // NAME ENTRY. PROB DELETE
  
    splashScreen = buildDom(`
    <main>
      <h1></h1>
      <div class="firstback">
      <div id="register-name">
                    <form>
                        <label>Please, insert your gangsta name:</label>
                        <input id="username" type="text" placeholder="      My gangsta name" value="">
                    </form>
                </div>
                </div>
      <button>RUN</button>
    </main>`);

    document.body.appendChild(splashScreen);

    var startButton = splashScreen.querySelector("button");

    startButton.addEventListener("click", function() {
      name = splashScreen.querySelector('#username').value;
            if(name === '') {
                name = 'LASAGNA'
            }
      startGame(name);
    });
  }

// PROVA
  function removeSplashScreen() {
    splashScreen.remove(); // remove() is an HTML method that removes the element entirely
  }

  //
  // GAME SCREEN
  function createGameScreen() {
    var gameScreen = buildDom(`
    <main class="game container">
    <header>
      <div class="lives">
        <span class="label">You Only Live Once</span>
        <span class="value"></span>
      </div>
      <div class="score">
        <span class="label">Score:</span>
        <span class="value"></span>
      </div>
    </header>
    <div class="canvas-container">
      <canvas></canvas>
    </div>
  </main>
    `);

    document.body.appendChild(gameScreen);

    return gameScreen;
  }

  function removeGameScreen() {
    game.gameScreen.remove(); // We will implement it in the game object
  }

  //
  // GAME OVER SCREEN
  function createGameOverScreen(score, name) {
    gameOverScreen = buildDom(`
    <main id="gameoverfinal">
      <h1>Game over</h1>
      <p>YOU HAVE BEEN CAUGHT! YOU GOT <span>${score}</span> POINTS!</p>
      <table id="scoretable">
      <thead>
          <tr>
              <th>Name</th>
              <th>Score</th>
          </tr>
      </thead>
      <tbody>
          <tr><td id='name1'></td><td id='score1'></td></tr>
          <tr><td id='name2'></td><td id='score2'></td></tr>
          <tr><td id='name3'></td><td id='score3'></td></tr>
          <tr><td id='name4'></td><td id='score4'></td></tr>
          <tr><td id='name5'></td><td id='score5'></td></tr>
         
      </tbody>
  </table>
      <button>Restart</button>
    </main>
    `);

    document.body.appendChild(gameOverScreen);

    var button = gameOverScreen.querySelector("button");

    button.addEventListener("click", function() {
      startGame(name);
  });
   // get previous score
    let previousScore = JSON.parse(localStorage.getItem("score"));
    if (!previousScore) {
      previousScore = [];
    }

    // UPDATE THE SCORE
    const newScore = { name, score };
    previousScore.push(newScore);

    // SET THE SCORE BACK TO LOCAL STORAGE
    const updatedScoreStr = JSON.stringify(previousScore);
    localStorage.setItem("score", updatedScoreStr);

   // ordena per score
        previousScore.sort(function(a,b){
            return b.score - a.score;
        });
        console.log("scoreboard", previousScore);

        //prints into html the scores to the screen
        for(var i = 0; i < 10; i++) {
          var playersName = gameOverScreen.querySelector("#name" + (i+1));
          var playersScore = gameOverScreen.querySelector("#score" + (i+1));
          if(previousScore[i]) {
              playersName.innerHTML = previousScore[i].name;
              playersScore.innerHTML = previousScore[i].score + ' points';
          } else {
              playersName.innerHTML = '';
              playersScore.innerHTML = '';
          }            
      }

  }

  function removeGameOverScreen() {
    if (gameOverScreen !== undefined) {
      // if it exists saved in a variable
      gameOverScreen.remove();
    }
  }

  //


  // SETTING GAME STATE
  function startGame(name) {
    removeSplashScreen();
    removeGameOverScreen();

    game = new Game();
    game.gameScreen = createGameScreen();

    // Start the game
    game.start();
    game.passGameOverCallback(function (){
      gameOver(game.score)});

    // End the game
  }

  function gameOver(score) {
    removeGameScreen();
    createGameOverScreen(score,name); // <--

    console.log("GAME OVER IN MAIN");
  }

  // Initialize the start screen
  createSplashScreen();
}

// Ensures that all files are loaded before it runs the set function
window.addEventListener("load", main);