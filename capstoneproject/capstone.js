const readlineSync = require("readline-sync")

const name = readlineSync.question("Please enter your name: ")

readlineSync.question(`Hello ${name} , Welcome to the Matrix! Will you be able to survive? press Enter to start your Journey! `)

const enemies = ["Agent Smith", "The Twins","Sentinels,","Agents","Bane"]
const pills = ["Red Pill","Blue Pill"]
var prize = []
let userHealth = 50
const options = ["Walk", "Exit","Print","Use Red Pill","Use Blue pill"]

let  pickUp = pills[Math.floor(Math.random()*pills.length)]


function game (){
    const attackPower = Math.floor(Math.random()* 7 + 5 + 6)
    const enemy = enemies[Math.floor(Math.random() * enemies.length)]
    let enemyHealth = 50
    const enemyPower = Math.floor(Math.random()* 7 + 5 +6 -1)

    const index = readlineSync.keyInSelect(options, "What would you like to do?")

 

    if (options[index] == "Exit") {
        return userHealth = 0
    } else if (options[index] == "Print") {
        console.log(`Your name is: ${name}\n
                   Your Health is: ${userHealth}\n
                   Your inventory is: ${pickUp} `)     
                   
    } else if (options[index] == "Use Red Pill") {
        if (pickUp == "Red Pill") {
            console.log("Your health has increased")
            userHealth = userHealth + 30
            pickUp = ""
        } else {console.log("You need a Red pill")}
    } else if (options[index] == "Use Blue Pill") {
        if (pickUp == "Blue Pill") {
            console.log("You have exited the Matrix. You have died!")
            userHealth = 0
            
        } else { console.log("You have Died") }
    } 
     else if (options[index] == "Walk") {
        let key = Math.random()
        if (key <= .3) {
            console.log("Walking")
        }else if (key >= .3) {
            console.log(`${enemy} Attacks you`)

            while(enemyHealth > 0 && userHealth > 0) {
                const user = readlineSync.question("Press r to run or Press a to attack: ")

                switch(user){
                    case 'r':
                        const run = Math.random()
                        if(run < .5) {
                            console.log(`${enemy} attacked with: ${enemyPower} and stoped your escape`)
                        } else {
                            console.log("you ran away")
                            enemyHealth = 0;
                            break;
                        } 
                    case 'a':
                        
                        enemyHealth -= attackPower
                        console.log(`You attacked ${enemy} for ${attackPower} damage`)

                        userHealth -= enemyPower
                        console.log(`${enemy} attacked you for ${enemyPower} damage`)
                        
                        if (enemyHealth <= 0) {
                            console.log(`You defeated ${enemy} and the ${enemy} has droped a ${pickUp}`)
                            let pills = Math.random()
                            if (pills <= .9) {
                                prize.push(pickUp)
                            } 
                            }   else if (userHealth <= 0) {
                                console.log("You have Died")
                            } 
                        
                        }
                }
            }
        }
    
}
    while(userHealth > 0) {
        userAlive = function(){
            userActive = true
        }
        userAlive()
        game()
    }