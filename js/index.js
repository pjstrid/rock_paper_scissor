function myChoice () {
   return prompt ("Gör ditt val: sten, sax eller påse?");
}

function computerChoice () {
let random = Math.floor(Math.random() * 3);
let choices = ["sten", "sax", "påse"];
return choices[random];
}

function compare(playerOne, playerTwo) {
console.log("Ditt val: " + playerOne);
console.log("Datorns val: " + playerTwo);

    if (playerOne == playerTwo) {
        console.log("Ni valde lika, ingen av er vinner!");
    } else if (playerOne === "sten" && playerTwo === "sax") {
            console.log("Sten slår sax. Du vinner!");
    } else if (playerOne === "sax" && playerTwo === "påse") {
            console.log("Sax slår påse. Du vinner!");
    } else if (playerOne === "påse" && playerTwo === "sten") {
        console.log("Påse slår sten. Du vinner!");
    } else if (playerOne === "sten" && playerTwo === "påse") {
            console.log("Påse slår sten. Datorn vinner!");
    } else if (playerOne === "sax" && playerTwo === "sten") {
            console.log("Sten slår sax. Datorn vinner!");
    } else if (playerOne === "påse" && playerTwo === "sax") {
        console.log("Sax slår påse. Datorn vinnner!");
    } else {
        console.log("Ogiltligt val. Försök igen!");
    }
}

var playerOne = myChoice();
var playerTwo = computerChoice();
compare(playerOne, playerTwo);