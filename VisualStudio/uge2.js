console.log(22)
const minAlder = 22
console.log(minAlder)
//Jeg printer min alder
console.log(`Min alder er ${minAlder}`)

function printAlder(alder) {
    return `Min alder er ${alder}`
}

console.log(printAlder(30))


function spanskehilsner(name = "Buenos Tardes") {
    console.log(`${name}`)
}

spanskehilsner()

function prisenForØl(kasser) {
    console.log(120 * kasser);
}
prisenForØl(5)

function planteHarBrugForVand(day) {
    console.log(day === "Wednesday" ? true : false)
}
planteHarBrugForVand("Torsdag")

const indkøbsliste = ["ris", "gulerødder", "mælk", "sukker", "kaffe", "toiletpapir"]

indkøbsliste.shift();
console.log(indkøbsliste);
//fjerner den forreste  

indkøbsliste.unshift("pasta");
console.log(indkøbsliste);
//Tilføjer forrest 

console.log(indkøbsliste.indexOf("mælk"))
console.log(indkøbsliste[2])
console.log(indkøbsliste)
indkøbsliste.splice(2, 1)
console.log(indkøbsliste)

let pung = {
    kort: {
        visa: {
            udbyder: visa,
            udløbsdato: 2021
        },
        mastercard: {
            udbyder: mastercard,
            udløbsdato: 2022
        }
    }
}

