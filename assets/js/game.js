var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// Function to Start a New Game
var startGame = function () {
  // reset player stats 
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;
  // other logic remains the same... 
  for (var i = 0; i < enemyNames.length; i++) 
       //play again
startGame();

// use switch case to carry out action
shopOptionPrompt = parseInt(shopOptionPrompt);

switch (shopOptionPrompt) {
  case 1:
    playerInfo.refillHealth();
    break;
  case 2:
    playerInfo.upgradeAttack();
    break;
  case 3:
    window.alert("Leaving the store.");
    break;
  default:
    window.alert("You did not pick a valid option. Try again.");
    shop();
    break;
}

// function to end entire game
var endGame = function() {
  // if player still alive, player wins!
  if (playerHealth > 0) {
    window.alert("Great Job, You've survived the game! You now have a score of" + playerMoney + ".");
  }
  else {
    window.alert("You have lost your robot in battle.");
  }
  window.alert("The game has now ended. Lets see how you did!");
  // after lopp ends, player is either out of health or enemies to fight, so run the endGame function
  endGame();
}

// function to set name
var getPlayerName = function() {
  var name = "";
  /* GAME INFORMATION / VARIABLES */
var playerInfo = {
  name: getPlayerName(),
  ... // other playerInfo properties and methods

  while (name === "" || name === null) {
    name = prompt("What is your robot's name?");
  }

  console.log(""Your robot's name is "" + name);
  return name;
};
// ask player if they'd like to play again
var playAgainConfirm = window.confirm("Would you like to play again?")

if (playAgainConfirm) {
  // restart the game
  startGame();
}
else {
  window.alert("Thank you for playin Robot Gladiators! Come back soon!");
}
    // You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);
if (playerHealth > 0) {
    // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

    // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];

    // reset enemyHealth before starting new fight
    enemyHealth = 50;

    // use debugger to pause script from running and check what's going on at that moment in the code
    // debugger;

    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);
  }
  else {
    window.alert("You have lsot your robot in battle! Game Over!");
    break;
  }
};



var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyName = enemyNames[0]
console.log(enemyNames.length);

for(var i = 0; i < enemyNames.length; i++) if (playerHealth > 0) {
  window.alert("Welcome to Robot Gladiators!" + ( i + 1 )) ;
} {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyName[i] + " is at " + i + " index");
  }
var enemyHealth = 50;
var enemyAttack = 12;

var fightOrSkip = function() {
  // ask player if they'd like to fight or skip using fightOrSkip function
  var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

  // Enter the conditional recursive function call here!
  // Conditional Recursive Function Call

if (promptFight === "" || promptFight === null) {
  window.alert("You need to provide a valid answer! Please try again.");
  return fightOrSkip();
}
promptFight = promptFight.toLowerCase();

if (promptFight === "skip") {
   // rest of the conditional code block

  // if player picks "skip" confirm and then stop the loop
  if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerInfo.playerMoney = playerInfo.money - 10;
      shop();
      
      var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE."
      );
    }
  }
}

var fight = function(enemyName) {
  // repeat and execute as long as the enemy-robot is alive 
  // if the enemy-robot's health is zero or less, exit from the fight loop.
  while(enemyHealth > 0 && playerHealth > 0 ) {
    // place fight function code block here . . .
    for (var i = 0; i < enemyNames.length; i++) {
      var pickedEnemyName = enemyNames[i];
      enemyHealth = 50;
      fight(pickedEnemyName);
    }

  var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
  
      // if player picks "skip" confirm and then stop the loop
      if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerName + ' has decided to skip this fight. Goodbye!');
          // subtract money from playerMoney for skipping
          playerMoney = playerMoney - 10;
          console.log("playerMoney", playerMoney)
          break;
        }
      }
      
  
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
      );
  
      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + ' has died!');
  
        // award player money for winning
        playerMoney = playerMoney + 20;

// leave while () loop if player is dead
break;
  } else{ 
    window.alert (enemyName + ' still has ' + enemyHealth + ' health left.');
  }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + " " + playerName + " now has " + playerHealth + " health remaining."
    );
  
    // check enemy's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      break;
    } else {
      window.alert(playerName + " still has " + enemyHealth + " health left.");
    }
  }
};

  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
  
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
   if (promptFight === "skip" || promptFight === "SKIP") {
    window.alert(playerName + " has chosen to skip the fight!");
  } else {
    window.alert("You need to choose a valid option. Try again!");
  }
   // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable
playerHealth = playerHealth - enemyAttack;

// Log a resulting message to the console so we know that it worked.
console.log(
  enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);

// check enemy's health
if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  } 
  else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }

  // put new code under this
console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

// check player's health
if (playerHealth <= 0) {
  window.alert(playerName + " has died!");
} 
else {
  window.alert(playerName + " still has " + playerHealth + " health left.");
}
}
  };
  
  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.

  // Log a resulting message to the console so we know that it worked.


};



// Game States
// "LOSE" - Player robot's health is zero or less
if (playerHealth <= 0) {
  window.alert(playerName + " has died!");

}

//fight(); 

// start the game when the page loads
startGame();