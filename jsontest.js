const cat = {
    animalName: "Cat",
    animalSound: "Meow",
    animalAge: 20,
    animalColor: "Gray",
    animalName: "Penny"
}

let catJSON = JSON.stringify(cat);

console.log(catJSON);

let fs = require("fs");
fs.writeFile("catJSON.json",catJSON,() => {});