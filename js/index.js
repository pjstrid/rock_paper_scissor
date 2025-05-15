// Sätter poängräkning för båda spelarna till 0
let sumPlayerOne = 0;
let sumPlayerTwo = 0;

//Mitt val
function myChoice () {
return prompt ("Gör ditt val: sten, sax eller påse?");
}
// Datorns slumpmässiga val
function computerChoice () {
let random = Math.floor(Math.random() * 3);
let choices = ["sten", "sax", "påse"];
return choices[random];
}

// Jämför våra val och ser vem som vinner varje omgång
function compare(playerOne, playerTwo) {
console.log("Ditt val: " + playerOne);
console.log("Datorns val: " + playerTwo);

    if (playerOne == playerTwo) {
        console.log("Ni valde lika, ingen av er vinner omgången!");
    } else if (playerOne === "sten" && playerTwo === "sax") {
        console.log("Sten slår sax. Du vinner omgången!");
            scorePlayerOne();
    } else if (playerOne === "sax" && playerTwo === "påse") {
        console.log("Sax slår påse. Du vinner omgången!");
            scorePlayerOne();
    } else if (playerOne === "påse" && playerTwo === "sten") {
        console.log("Påse slår sten. Du vinner omgången!");
            scorePlayerOne();
    } else if (playerOne === "sten" && playerTwo === "påse") {
        console.log("Påse slår sten. Datorn vinner omgången!");
            scorePlayerTwo();
    } else if (playerOne === "sax" && playerTwo === "sten") {
        console.log("Sten slår sax. Datorn vinner omgången!");
            scorePlayerTwo();
    } else if (playerOne === "påse" && playerTwo === "sax") {
        console.log("Sax slår påse. Datorn vinnner omgången!");
            scorePlayerTwo();
    } else {
        console.log("Ogiltligt val. Försök igen!");
    }
}

// Adderar ett poäng till spelare om denne vinner omgången
function scorePlayerOne() {
    sumPlayerOne += 1;
}
// Adderar ett poäng till datorn om denne vinner omgången
function scorePlayerTwo() {
    sumPlayerTwo += 1;
}

// Loopar tills någon fått 3 poäng och vunnit spelet
while (sumPlayerOne < 3 && sumPlayerTwo < 3) {
  let playerOne = myChoice();
  let playerTwo = computerChoice();
  compare(playerOne, playerTwo);
  console.log("Din poäng:", sumPlayerOne);
  console.log("Datorns poäng:", sumPlayerTwo);
}

// Skriver ut vinnare efter spelets slut 
console.log("Spelet är slut!");
if (sumPlayerOne == 3) {
    console.log("Grattis! Du vann spelet!");
} else { 
    console.log("Tyvärr, datorn vann spelet!")
}
