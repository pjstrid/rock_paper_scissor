let sumPlayerOne = 0;
let sumPlayerTwo = 0;

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
            scorePlayerOne();
    } else if (playerOne === "sax" && playerTwo === "påse") {
        console.log("Sax slår påse. Du vinner!");
            scorePlayerOne();
    } else if (playerOne === "påse" && playerTwo === "sten") {
        console.log("Påse slår sten. Du vinner!");
            scorePlayerOne();
    } else if (playerOne === "sten" && playerTwo === "påse") {
        console.log("Påse slår sten. Datorn vinner!");
            scorePlayerTwo();
    } else if (playerOne === "sax" && playerTwo === "sten") {
        console.log("Sten slår sax. Datorn vinner!");
            scorePlayerTwo();
    } else if (playerOne === "påse" && playerTwo === "sax") {
        console.log("Sax slår påse. Datorn vinnner!");
            scorePlayerTwo();
    } else {
        console.log("Ogiltligt val. Försök igen!");
    }
}


function scorePlayerOne() {
    sumPlayerOne += 1;
}

function scorePlayerTwo() {
    sumPlayerTwo += 1;
}

while (sumPlayerOne < 3 && sumPlayerTwo < 3) {
  let playerOne = myChoice();
  let playerTwo = computerChoice();
  compare(playerOne, playerTwo);
  console.log("Din poäng:", sumPlayerOne);
  console.log("Datorns poäng:", sumPlayerTwo);
}

console.log("Spelet är slut!");
if (sumPlayerOne == 3) {
    console.log("Grattis! Du vann spelet!");
} else { 
    console.log("Tyvärr, datorn vann spelet!")
}
