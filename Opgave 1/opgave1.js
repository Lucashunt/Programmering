//Del 1: Anton skal til piratfest på reffen og vil gerne invitere alle sine homies med.
//For at politiet ikke skal opdage at Anton inviterer til fest,
//sender han derfor en hemmelig besked til sine venner,
//med instrukser til at dekode beskeden, som kun folk der kan kode i javascript kan
//følge (hvilket politiet selvfølgelig ikke kan!).
//let hemmeligBesked = ["hej","klaus","vil","du","med","til","fodbold",",","i","klubben","i","aften","?","kurt"];
//console.log(hemmeligBesked.pop);
let hemmeligBesked = [
  "hej",
  "klaus",
  "vil",
  "du",
  "med",
  "til",,,,,
  "fodbold",
  "i",
  "klubben",
  "i",
  "aften",
  "?",
  "kurt",
];
console.log(hemmeligBesked.pop());

hemmeligBesked.push("adressen", "er", "piratvej", "100");
console.log(hemmeligBesked);

console.log(hemmeligBesked.indexOf("klaus"));
hemmeligBesked.splice(1, 1, "bro!");
console.log(hemmeligBesked);

hemmeligBesked.splice(0, 1);
console.log(hemmeligBesked);

hemmeligBesked.unshift("yo");
console.log(hemmeligBesked);

console.log(hemmeligBesked.indexOf("fodbold"));
hemmeligBesked.splice(6, 3, "piratfest");
console.log(hemmeligBesked);

let faktiskeBesked = hemmeligBesked.join(" ");
console.log(faktiskeBesked);

function gørBeskedPersonlig(navn = "bro") {
  let faktiskeBesked = `yo, ${navn} vil du med til piratfest på reffen i aften? Adressen er Piratvej 100.” `;
  console.log(faktiskeBesked);
}
gørBeskedPersonlig("Sigurd");

function loopPersonligBesked(){
let personligBesked = {
  venner: {
    ven1: {
      navn: "sigurd",
      sang: "Hit me baby one more time",
    },
    ven2: {
        navn: "Tessa",
        sang: "Ben"
    },
    ven3: {
        navn: "Mia",
        sang: "Love will tear us apart"
    }
  },
};
for (let person in personligBesked.venner){
    console.log(`Yo ${personligBesked.venner[person].navn} vil du med til piratfest på reffen i aften? Adressen er piratvej 100`)
}
for (let musik in personligBesked.venner){
    console.log(personligBesked.venner[musik].sang)
}
}
loopPersonligBesked()

