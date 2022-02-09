/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Eowyn and
    Witch King of Angmar.
*/ 

let eowynAttack = 50;
let witchKingAttack = 45;

if (eowynAttack > witchKingAttack) {
    console.log("Eowyn is stronger.");
} else if (witchKingAttack > eowynAttack){
    console.log("Witch King is stronger");
} else if (eowynAttack === witchKingAttack) {
    console.log("They are the same strength");
};

let eowynHealth = 100;
let eowynDefense = 0;

if (eowynHealth + eowynDefense <= witchKingAttack) {
    console.log("She dead");
} else {
//    eowynHealth -= witchKingAttack;
    console.log("She alive")
    console.log(`She is down to ${eowynHealth} health points.`);
};

let coinLandsHeads = false;

if (coinLandsHeads === true) {
    console.log("Witch King gets to run away")
} else {
    console.log("Witch King got stabbed in the face")
};

for(let i = 0; i < 5; i++) {
    if(eowynHealth > 0) {
        eowynHealth = eowynHealth - witchKingAttack;
        console.log(`Eowyn has ${eowynHealth} left.`);
    } else {
    console.log("she dead.");
    };
};