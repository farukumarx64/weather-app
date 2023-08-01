import { fetchApi } from "./modules/api-functions";
import updateUI from "./modules/update-ui";

fetchApi("Kano").then((data) => {
  updateUI(data);
});
let locationInputBtn = document.querySelector(".location-input");
let searchBtn = document.querySelector(".search-btn");
let suggestions = document.querySelectorAll(".suggestions p");
console.log(suggestions);

locationInputBtn.addEventListener("keypress", handleLocationInput);
searchBtn.addEventListener("click", handleLocationInputByBtn);
suggestions.forEach((suggestion) => {
  suggestion.addEventListener("click", () => {
    handleLSuggestions(suggestion.textContent);
  });
});

function handleLocationInput(e) {
  console.log(e.key, locationInputBtn.value);
  const location = locationInputBtn.value
    .toLowerCase()
    .replace(/(\s+$|^\s+)/g, "") // remove whitespace from beginning and end of string
    .replace(/(,\s+)/g, ",") // remove any white space that follows a comma
    .replace(/(\s+,)/g, ",") // remove any white space that precedes a comma
    .replace(/\s+/g, "+");
  if (e.key === "Enter") {
    const weather = fetchApi(location);
    weather.then((data) => {
      console.log(data);
      updateUI(data);
    });
    locationInputBtn.value = "";
    return;
  }
}

function handleLocationInputByBtn(e) {
  console.log(e.key, locationInputBtn.value);
  const location = locationInputBtn.value
    .toLowerCase()
    .replace(/(\s+$|^\s+)/g, "") // remove whitespace from beginning and end of string
    .replace(/(,\s+)/g, ",") // remove any white space that follows a comma
    .replace(/(\s+,)/g, ",") // remove any white space that precedes a comma
    .replace(/\s+/g, "+");
  const weather = fetchApi(location);
  weather.then((data) => {
    console.log(data);
    updateUI(data);
  });
  locationInputBtn.value = "";
}

function handleLSuggestions(location) {
  const weather = fetchApi(location);
  weather.then((data) => {
    console.log(data);
    updateUI(data);
  });
  locationInputBtn.value = "";
}
