
console.log("This is a best of 5 rock, paper & scissors game!")

// scores for player
let playerScore1 = 0;
let playerScore2 = 0;

const arr = ["rock", "paper", "scissor"];

const players = ["player1", "player2"]

// starting from round 1
let rounds = 1;

// game should start from 0 and end on
// however many turns it takes to reach 5
while (playerScore1 <= 5 || playerScore2 <= 5) {

    for (let i = 0; i < arr.length - 1; i++) {
        let randomizer = Math.floor(Math.random() * 3);
        // giving both player randomized values based on players
        players[i] = arr[randomizer];
    }
    
    // To tell the round has started
    console.log(`round ${rounds} begin!`);
    console.log("player 1 choose: " + players[0] +
        " \nplayer 2 choose: " + players[1]);

    // player 1 odds
    if (players[0] === "rock" && players[1] === "scissor" ||
        players[0] === "scissor" && players[1] === "paper" ||
        players[0] === "paper" && players[1] === "rock") {

        console.log("player 1 has score: " + playerScore1);

        if (playerScore1 == 5) {
            console.log("player1 won");
            break;
        }
        playerScore1++;
    } 
    // player 2 odds 
    else if (players[1] === "rock" && players[0] === "scissor" ||
        players[1] === "scissor" && players[0] === "paper" ||
        players[1] === "paper" && players[0] === "rock") {
        console.log("player 2 has score: " + playerScore2);

        if (playerScore2 == 5) {
            console.log("player 2 won");
            break;
        }
        playerScore2++;
    }
    // Its a tie and tie don't give us a point so while loop repeats
    else {
        console.log("Its a tie!");
    }
    rounds++;
}
