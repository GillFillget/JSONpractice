const fs = require('fs');

fs.readFile('./lizardJSON.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("Error reading file from disk:", err);
        return;
    }
    try {
        const animal = JSON.parse(jsonString)
        console.log("The name of the lizard is " + animal.animalName);
        console.log("The sound of the lizard is " + animal.animalSound);
        console.log("The age of the lizard is " + animal.animalAge);
} catch(err) {
        console.log('Error parsing JSON string:', err);
    }
})