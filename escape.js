var readlineSync = require('readline-sync');
var player= readlineSync.question('What is your name? ');
var Message = `Welcome, ${player}, welcome to the escape room!`;
console.log(Message);

var Alive = true;
var hasKey = false;
while(Alive == true)
{
    const listId = readlineSync.keyIn(`Press 1 to Put hand in hole \n Press 2 to Find the Key \n Press 3 to Open the door`, {limit:`$<1-3>`});
    if (listId == 1){
        
        console.log(`${player} you Died. Game  over`);
        Alive = false;
    }
    else if (listId == 2 && hasKey == false){
      
        console.log(`${player}, you have found the key.  Proceed to the next menu option`);
        hasKey = true;
    }
    else if (listId == 2 && hasKey == true){
        
        console.log(`${player}, you already have the key,  Find the Door!`);
    }
    else if (listId == 3 && hasKey == false){
        
        console.log(`${player}, you need to locate the key first.  Please find the key first and then proceed to this menu option!`);
    }
    else if (listId == 3 && hasKey == true){
        
        console.log(`${player}, you opened the door successfully! Game over......`);
        Alive = false;
    }
}