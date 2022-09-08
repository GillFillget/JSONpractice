const cat = {
    animalName: "Cat",
    animalSound: "Meow",
    animalName: 11
}

let catJSON = JSON.stringify(cat);

console.log(catJSON);

let fs = require("fs");
fs.writeFile("catJSON.json",catJSON,() => {});