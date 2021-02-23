<<<<<<< HEAD
=======
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// function to set name
var getPlayerName = function() {
  var name = "";

  while (name === "" || name === null) {
    name = prompt("What is your robot's name?");
    /* GAME INFORMATION / VARIABLES */
var playerInfo = {
  name: getPlayerName(),
  }

  console.log("" Your robot's name is "" + name);
  return name;
};
>>>>>>> bug/player-name

// Function to Start a New Game
var startGame = function() {
  // reset player stats
  playerInfo.reset();

  // other logic remains the same... 
  for (var i = 0; i < enemyInfo.length; i++) 
       //play again
startGame();

// if we're not at the last enemy in the array
if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
  // ask if player wants to use the store before next round
  var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
  //if yes take them to the store() function
  if (storeConfirm) {
  shop()

  // use switch to carry out action
switch (shopOptionPrompt) {
    case "REFILL": //new case
    case "refill":
    if (playerInfo.money >= 7) {
    window.alert("Refilling player's health by 20 for 7 dollars.");
    // increase health and decrease money
    playerInfo.health = playerInfo.health+ 20;
    playerInfo.money = playerInfo.money - 7;
    }
    // do nothing, so function will end
    break;
  default:
    window.alert("You did not pick a valid option. Try again.");

    // call shop() again to force player to pick a valid option
    shop();
    break;
}
  }
}


// function to end entire game
var endGame = function() {
  // if player still alive, player wins!
  if (playerInfo.health > 0) {
    window.alert("Great Job, You've survived the game! You now have a score of" + playerInfo.money + ".");
  }
  else {
    window.alert("You have lost your robot in battle.");
  };
  window.alert("The game has now ended. Lets see how you did!");
  // after lopp ends, player is either out of health or enemies to fight, so run the endGame function
  endGame();
}

var shop = function() {
  //ask the player what they'd like to do
  var shopOptionPrompt = window.prompt (
    "Would you like to REFILL your health, Upgrade your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );

  switch (shopOptionPrompt) {
    case "REFILL":
      case "refill":
        playerInfo.refillHealth();
        break;
      case "UPGRADE":
      case "upgrade":
        playerInfo.upgradeAttack();
        break;
    case 'leave':
    case 'LEAVE':
      window.alert('Leaving the store.');
      break;
    default:
      window.alert('You did not pick a valid option. Try again.');
      shop();
      break;
  
};
};

// ask player if they'd like to play again
var playAgainConfirm = window.confirm("Would you like to play again?")

if (playAgainConfirm) {
  // restart the game
  startGame();
}
else {
  window.alert("Thank you for playin Robot Gladiators! Come back soon!");
};
    // You can also log multiple values at once like this
console.log(playerInfo.name, playerInfo.attack, playerInfo.health);
if (playerInfo.health > 0) {
    // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
  

    // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyObj = enemyInfo[i];

    // reset enemy.health before starting new fight
    pickedEnemyObj.health = randomNumber(40, 60);

    // use debugger to pause script from running and check what's going on at that moment in the code
    // debugger;

    // pass the picked Eenemy.name variable's value into the fight function, where it will assume the value of the enemy.name parameter
    fight(pickedEnemyObj);
  }
  else {
    window.alert("You have lsot your robot in battle! Game Over!");
  }
};


for(var i = 0; i < enemyInfo.length; i++) if (playerInfo.health > 0) {
  window.alert("Welcome to Robot Gladiators!" + ( i + 1 )) ;
} {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemy.name[i] + " is at " + i + " index");
  }

var fight = function(enemy) {
   
  // repeat and execute as long as the enemy-robot is alive 
  // if the enemy-robot's health is zero or less, exit from the fight loop.
  while(enemy.health > 0 && playerInfo.health > 0 ) {
    // place fight function code block here . . .
    for (var i = 0; i < enemyInfo.length; i++) {
      var pickedEnemyObj = enemyInfo[i];
      enemy.health = 50;
      fight(pickedEnemyObj);
    }
    
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
  // if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {

  var fight = function(enemy) {
    
    while (playerInfo.health > 0 && enemy.health > 0) {

      // ask player if they'd liked to fight or run
      var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
      // if player picks "skip" confirm and then stop the loop
      if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
          // subtract money from playerInfo.money for skipping
          playerInfo.money = Math.max(0,playerInfo.money - 10);
          console.log("playerInfo.money", playerInfo.money)
          break;
        }
      }
      
  
      // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
      // generate random damage value based on player's attack power
var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

enemy.health = Math.max(0, enemy.health - damage);
playerInfo.name+ ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
      
  
      // check enemy's health
      if (enemy.health <= 0) {
        window.alert(enemy.name + ' has died!');
  
        // award player money for winning
        playerInfo.money = playerInfo.money + 20;

// leave while () loop if player is dead
break;
  } else{ 
    window.alert (enemy.name + ' still has ' + enemy.health + ' health left.');
  }

    // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
    var damage = randomNumber(enemy.attack - 3, enemy.attack);

    playerInfo.health = Math.max(0, playerInfo.health - damage);
    enemy.name + " attacked " + playerInfo.name+ " " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
    
  
    // check enemy's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + " has died!");
      break;
    } else {
      window.alert(playerInfo.name + " still has " + enemy.health + " health left.");
    }
  }
};

  
    // remove player's health by subtracting the amount set in the enemy.attack variable
    playerInfo.health = Math.max(0, playerInfo.health - enemy.attack);
    console.log(
      enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
    );
  
    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + " has died!");
    } else {
      window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
    }
    // if player choses to skip
   if (promptFight === "skip" || promptFight === "SKIP") {
    window.alert(playerInfo.name + " has chosen to skip the fight!");
  } else {
    window.alert("You need to choose a valid option. Try again!");
  }
   // Subtract the value of `enemy.attack` from the value of `playerInfo.health` and use that result to update the value in the `playerInfo.health` variable
   playerInfo.health = playerInfo.health - enemy.attack;

// Log a resulting message to the console so we know that it worked.
console.log(
  enemy.name + " attacked " + playerInfo.name+ ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
);

// check enemy's health
if (enemy.health <= 0) {
    window.alert(enemy.name + " has died!");
  } 
  else {
    window.alert(enemy.name + " still has " + enemy.health + " health left.");
  }

  // put new code under this
console.log(enemy.name + " attacked " + playerInfo.name+ ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");

// check player's health
if (playerInfo.health <= 0) {
  window.alert(playerInfo.name+ " has died!");
} 
else {
  window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
}
}
  };
  
  // Subtract the value of `enemy.attack` from the value of `playerInfo.health` and use that result to update the value in the `playerInfo.health` variable.

  // Log a resulting message to the console so we know that it worked.


};

// Game States
// "LOSE" - Player robot's health is zero or less
if (playerInfo.health <= 0) {
  window.alert(playerInfo.name + " has died!");

}

var playerName = window.prompt("What is your robot's name?");
var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  }, // comma!
  refillHealth: function() {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    } 
    else {
      window.alert("You don't have enough money!");
    }
  }, // comma!
  upgradeAttack: function() {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    } 
    else {
      window.alert("You don't have enough money!");
    }
  }
};


var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber (10,14)
  },
  {
    name: "Amy Android",
    attack: randomNumber (10,14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber (10,14)
  }
];


//fight(); 

// start the game when the page loads
startGame();

// function to generate a random numeric value
var randomNumber = function() {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};