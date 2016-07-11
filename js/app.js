// Enemies our player must avoid
var Enemy = function(x,y) {
    this.x = x;
    this.y = y;
    this.speed = 200;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};
/*
  This function update the enemy's position.The parameter: dt,
  a time delta between ticks is multiplied by any movement
  which will ensure the game runs at the same speed for
  all computers. Also this function randomizes the enemies speed
  and spawn location. 
*/

Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if(this.x > 500 && this.speed > 400){
      this.x = Math.random() * -300;
      this.speed = 600 * dt;
    }

    else if(this.x > 500){
      this.x = Math.random() * -200;
      this.speed = this.speed + (100 * dt);
    }

    else{
      this.x = this.x + (this.speed * dt);
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};





var Player = function(x,y){
  Enemy.call(this,x,y);
  this.sprite = 'images/char-princess-girl.png';
};

Player.prototype = Object.create(Enemy.prototype);
Player.prototype.constructor = Player;


//Sets the x,y variable when player presses keys

Player.prototype.handleInput = function(key){

  if (key === 'up' && this.y > 0){
    this.y = this.y - 50;

  }
  else if (key === 'down' && this.y < 420){
    this.y = this.y + 50;
  }
  else if (key === 'right' && this.x < 400){
    this.x = this.x + 100;
  }
  else if (key === 'left' && this.x > 0){
    this.x = this.x - 100;
  }
  console.log(this.x,this.y);
 };


 Player.prototype.update = function() {
   this.x = this.x;
   this.y = this.y;
 };


// instantiating player.

var player = new Player(200,420);




// instantiating enemies.

var bugEnemy = new Enemy(-200,55);
var bugEnemy2 = new Enemy(-100,130);
var bugEnemy3 = new Enemy(-300,220);


var allEnemies = [bugEnemy,bugEnemy2,bugEnemy3];






// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
