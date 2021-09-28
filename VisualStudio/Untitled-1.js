console.log("hello");
const power = function(han, hun){
    return han * hun
}
console.log(power(10,5))

const min = function(x,y){
    return Math.min(x,y)
}
console.log(min(5,6))

function test(base, exponent) {
    if (exponent == 0) {
      return 1;
    } else {
      return base * test(base, exponent - 1);
    }
 }
  console.log(test(5, 5));

 
  let sequence = [1, 2, 3];
  sequence.push("hej");
  sequence.push(5)
  sequence.pop();
  console.log(sequence);

  
function greeting (name = "stranger"){
    console.log(`Hello, ${name}!`)
}
greeting("Lucas")
greeting()

let hej = ["hej","med","dig"];

hej[hej.length-1]="jer"

console.log(hej[2])

hej = ["mad"];

console.log(hej);

hej.push("Hej")
console.log(hej);

hej.pop();


console.log(hej);

const sidste = hej.pop();

console.log(sidste);

const flowers = ["blomst", "rose"]

function addFlowers(arr) {
    arr.push("lilje");
}
addFlowers(flowers);
console.log(flowers);

let mobiltelefon = {
    producent : "Apple",
    name : "iPhone"
}

console.log(mobiltelefon.producent)

mobiltelefon.producent = "Google"
mobiltelefon.kapacitet = 128

delete mobiltelefon[name]
console.log(mobiltelefon.name)
console.log(mobiltelefon.producent)
console.log(mobiltelefon.kapacitet)
/*
let pung = {
    kort:
        [{
            udbyder: "Visa",
            udløbsdato: 2023
        },
        {
            udbyder: "Mastercard",
            udløbsdato: 2024
        },
        {
            udbyder: "Mobilepay",
            udløbsdato: 2025
        }]
    }
    kontanter:
        [{
            værdi: 50,
            antal: 3
        },
        {
            værdi: 100,
            antal: 4
        },
        {
            værdi: 200,
            antal: 5
        }]
};
console.log(pung)
*/