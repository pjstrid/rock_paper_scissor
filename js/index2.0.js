

const userChoice = prompt ("Välj sten, sax eller påse");
console.log ("Ditt val: " + userChoice);

function computerRandom () {
   let random =  Math.floor(Math.random() * 3);
   let choices = ["sten", "sax", "påse"];
   return choices [random];
}

let computerChoice = computerRandom();

console.log ("Datorns val: " + computerChoice);

if (userChoice == "sten" && computerChoice == "sten") {
    console.log("Oavgjort")
} else if (userChoice == "sten" && computerChoice == "sax") {
    console.log ("Du vinner")
} else if (userChoice == "sten" && computerChoice == "påse") {
    console.log("Datorn vinner")
}

if (userChoice == "sax" && computerChoice == "sax") {
    console.log("Oavgjort")
} else if (userChoice == "sax" && computerChoice == "påse") {
    console.log ("Du vinner")
} else if (userChoice == "sax" && computerChoice == "sten"){
    console.log("Datorn vinner")
}

if (userChoice == "påse" && computerChoice == "påse") {
    console.log("Oavgjort")
} else if (userChoice == "påse" && computerChoice == "sten") {
    console.log ("Du vinner")
} else if (userChoice == "påse" && computerChoice == "sax") { 
    console.log("Datorn vinner")
}
