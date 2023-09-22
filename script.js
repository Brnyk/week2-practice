console.log("loaded");

let rootElement = document.querySelector("#root");

/* console.log(rootElement) */

// let htmlContent = "<h2>Hello world </h2>";

/* let counter = 0;

while (counter < 10){
    rootElement.insertAdjacentHTML('beforeend', htmlContent)
    counter++;
} */

/* a for az egyszerűbb */
//              0       1       2       3       4       5        6
/* let array = ["alma", "körte", "szilva", "eper", "birs", "vegyes", "törköly"]


//                               7
for (let index = 0; index < array.length; index++) {
    rootElement.insertAdjacentHTML('beforeend', `<h2> ${array[index]} </h2>`);
} */

// fetchnek mindig kettő then kell

fetch("https://restcountries.com/v3.1/all")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data); // itt tudunk a kapott adattal dolgozni

    for (let index = 0; index < data.length; index++) {
      let countryName = data[index].name.common;
      let countryPop = data[index].population;
      let countryArea = data[index].area;

      rootElement.insertAdjacentHTML(
        "beforeend",
        `
        <div class = "country">
            <h2> ${countryName} </h2>
            <p> population: ${countryPop} </p>
            <p> area: ${countryArea}km2 </p>
        </div>
        `
      );
    }
  });
