/* let stringVariable = "text"
let numberVariable = 15;
let booleanVariable = true;

function myFunc (param1, param2){
    return param1 + param2;
}

console.log(stringVariable, numberVariable, booleanVariable) */

/* let array = ["alma", 12, false, undefined, null]

console.log(array) */

/* let stringArray = ["Imola Ács", "Pali Herrer", "Nagy Zsombor", "Bokor Ágota"] 

console.log(stringArray[0]) */

/* let myObj = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    key4: 15,
    key5: 600,
    key6: true,
    key7: ["Imola Ács", "Pali Herrer", "Nagy Zsombor", "Bokor Ágota"]
}

console.log(myObj.key3) */

/* let myFacebook = {
  name: "Hornyák Bence",
  age: "25",
  location: "Miskolc",
  friends: ["Gipsz Jakab", "John Doe", "Példa Péter"],
  favoriteMovies: [
    {
      title: "Superbad",
      year: 2008,
      characters: ["McLovin", "Micheal Cera", "Jonah Hill"],
    },
    {
      title: "Ananász Expressz",
      year: 2012,
      characters: ["Csoki", "Gaben", "Sanyi"],
    },
    {},
  ],
};

console.log(myFacebook.favoriteMovies[0].characters[1]); */   /* Házi -> Tömböt gyártani, minél kombináltabbat, komolyabbat, peacesebbet -> Ital kiválasztó? Minőségileg tömbösíteni?*/


/* Objektum: {} Összefüggnek,összetartoznak , Tömb []*/

function logger(text){
    console.log(text)
}

function negativeOrPositive(number){
    if (number < 0) {
        return "negative"
    } else if (number > 0) {
        return "positive"
    } else {
        return "zero"
    }
}
// logger(negativeOrPositive())

function decideIfBeerIsGood(beer){
    if(beer.price < 340 && beer.abv > 4.7) {
    return beer.name + ": jó sör mert olcsó és üt"
    } else if (beer.price < 340) {
        return beer.name + ": jó mert olcsó"
    } else if (beer.abv > 4.7) {
        return beer.name + ": jó sör mert üt"
    } else {
        return beer.name + ": nem jó"
    }
}

let dreher = { name:"Dreher", price: 349, abv: 5}
let soproni = { name:"Soproni", price: 329, abv: 4.5}
let borsodi = {name:"Borsodi", price: 339, abv: 4.8}
let pecsi = { name:"Pécsi", price: 400, abv: 3.5}



logger(decideIfBeerIsGood(dreher))
logger(decideIfBeerIsGood(soproni))
logger(decideIfBeerIsGood(borsodi))
logger(decideIfBeerIsGood(pecsi))