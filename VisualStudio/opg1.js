const Lucas = (Math.floor(Math.random() *3));
const Emil = (Math.floor(Math.random() *3));

if (Lucas == 1){
    console.log("Lucas har sten")
} else if (Lucas == 0){
    console.log("Lucas har saks")
} else{ 
    console.log("Lucas har papir") 
}

if (Emil == 1){
    console.log("Emil har sten")
} else if (Emil == 0){
    console.log("Emil har saks")
} else{ 
    console.log("Emil har papir") 
}

//papir 2 sten 1 saks 0 jeg er saks

if (Lucas == 2 && Emil == 1){
    console.log("Lucas vinder med papir Emil taber med sten")
}
    else if (Lucas == 2 && Emil == 0){
    console.log("Lucas taber med papir til Emil som vinder med saks")
    }
    else if (Lucas == 2 && Emil == 2){
        console.log("uafgjort med papir")
}
else if (Lucas == 1 && Emil == 2){
    console.log("Lucas vinder med sten til Emil som taber med papir")
}
else if (Lucas == 1 && Emil == 1){
    console.log("uafgjort med sten")
} 
else if (Lucas == 1 && Emil == 0){
    console.log("Lucas taber med sten til Emil som vinder med papir")
} 
else if (Lucas == 0 && Emil == 2){
    console.log("Lucas vinder med saks til Emil som taber med papir")
} 
else if (Lucas == 0 && Emil == 1){
    console.log("Lucas taber med saks til Emil som vinder med sten")
}
else if (Lucas == 0 && Emil == 0){
    console.log("uafgjort med saks")
}


for (let number = 2; number <= 20; number = number + 5) {
    console.log(number);
}


