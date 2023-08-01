/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_api_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/api-functions */ \"./src/modules/api-functions\");\n/* harmony import */ var _modules_update_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/update-ui */ \"./src/modules/update-ui.js\");\n\n\n\n(0,_modules_api_functions__WEBPACK_IMPORTED_MODULE_0__.fetchApi)('Kano').then((data) => {\n  (0,_modules_update_ui__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\n});\nlet locationInputBtn = document.querySelector('.location-input');\nlet searchBtn = document.querySelector('.search-btn');\nlet suggestions = document.querySelectorAll('.suggestions p');\nconsole.log(suggestions);\n\nlocationInputBtn.addEventListener('keypress', handleLocationInput);\nsearchBtn.addEventListener('click', handleLocationInputByBtn);\nsuggestions.forEach((suggestion) => {\n  suggestion.addEventListener('click', () => {\n    handleLSuggestions(suggestion.textContent);\n  });\n});\n\n\nfunction handleLocationInput(e) {\n  console.log(e.key, locationInputBtn.value);\n  const location = locationInputBtn.value.toLowerCase().replace(/(\\s+$|^\\s+)/g, '') // remove whitespace from beginning and end of string\n    .replace(/(,\\s+)/g, ',') // remove any white space that follows a comma\n    .replace(/(\\s+,)/g, ',') // remove any white space that precedes a comma\n    .replace(/\\s+/g, '+');\n  if (e.key === 'Enter') {\n    const weather = (0,_modules_api_functions__WEBPACK_IMPORTED_MODULE_0__.fetchApi)(location);\n    weather.then(\n      (data) => {\n        console.log(data);\n        (0,_modules_update_ui__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\n      }\n    );\n    locationInputBtn.value = '';\n    return;\n  }\n}\n\nfunction handleLocationInputByBtn(e) {\n  console.log(e.key, locationInputBtn.value);\n  const location = locationInputBtn.value.toLowerCase().replace(/(\\s+$|^\\s+)/g, '') // remove whitespace from beginning and end of string\n    .replace(/(,\\s+)/g, ',') // remove any white space that follows a comma\n    .replace(/(\\s+,)/g, ',') // remove any white space that precedes a comma\n    .replace(/\\s+/g, '+');\n    const weather = (0,_modules_api_functions__WEBPACK_IMPORTED_MODULE_0__.fetchApi)(location);\n    weather.then(\n      (data) => {\n        console.log(data);\n        (0,_modules_update_ui__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\n      }\n    );\n    locationInputBtn.value = '';\n}\n\nfunction handleLSuggestions(location) {\n    const weather = (0,_modules_api_functions__WEBPACK_IMPORTED_MODULE_0__.fetchApi)(location);\n    weather.then(\n      (data) => {\n        console.log(data);\n        (0,_modules_update_ui__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\n      }\n    );\n    locationInputBtn.value = '';\n}\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/api-functions":
/*!***********************************!*\
  !*** ./src/modules/api-functions ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchApi: () => (/* binding */ fetchApi)\n/* harmony export */ });\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/modules/weather.js\");\n\n\nasync function fetchApi(location) {\n  try {\n    const key = 'c3c1648ec121461fb51172621232707';\n    const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`;\n    const response = await fetch(url);\n    const data = await response.json();\n    console.log(data);\n    return setWeatherDetails(data);\n  } catch (error) {\n    console.log(error);\n    alert(error);\n  }\n\n}\n\nfunction setWeatherDetails(data) {\n  const weather = new _weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  weather.setTemperature(data.current.temp_c);\n  weather.setCountry(data.location.country);\n  weather.setHumidity(data.current.humidity);\n  weather.setCloud(data.current.cloud);\n  weather.setUvIndex(data.current.uv);\n  weather.setWind(data.current.wind_kph);\n  weather.setFeelsLike(data.current.feelslike_c);\n  weather.setCondition(data.current.condition.text);\n  weather.setIcon(data.current.condition.icon);\n  weather.setName(data.location.name);\n\n  return weather;\n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/modules/api-functions?");

/***/ }),

/***/ "./src/modules/update-ui.js":
/*!**********************************!*\
  !*** ./src/modules/update-ui.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ updateUI)\n/* harmony export */ });\nfunction updateUI(weather) {\n\n  const date = new Date();\n  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];\n  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];\n  let random = Math.floor(Math.random() * 4) + 1;\n\n\n  // Declare Variables\n  let temperature = document.querySelector('.temperature');\n  let city = document.querySelector('.city');\n  let conditionIcon = document.querySelector('.cond-icon');\n  let condition = document.querySelector('.condition-text');\n  let feelsLike = document.querySelector('.feels-like');\n  let humidity = document.querySelector('.humidity');\n  let wind = document.querySelector('.wind');\n  let uvIndex = document.querySelector('.uv-index');\n  let cloud = document.querySelector('.cloud');\n  let country = document.querySelector('.country');\n  let time = document.querySelector('.time');\n  let weatherBackground = document.querySelector('.weather-background');\n  let searchBtn = document.querySelector('.icon');\n  let searchIcon = document.querySelector('.icon i');\n\n\n  // Details\n  temperature.textContent = `${weather.getTemperature()}°`;\n  city.textContent = `${weather.getName()}`;\n  time.textContent = `${date.getHours()}:${parseInt(date.getMinutes()).toString().padStart(2, 0)} - ${dayNames[date.getDay()]}, ${date.getDate()} ${monthNames[date.getMonth()]} '${parseInt(date.getFullYear()).toString().slice(2)}`;\n  condition.textContent = `${weather.getCondition()}`;\n  conditionIcon.setAttribute('src', `${weather.getIcon()}`);\n\n  // Weather Details \n  country.textContent = `${weather.getCountry()}`;\n  cloud.textContent = `${weather.getCloud()}%`;\n  humidity.textContent = `${weather.getHumidity()}%`;\n\n  // Extra Info\n  feelsLike.textContent = `${weather.getFeelsLike()}°C`;\n  console.log(typeof weather.getUvIndex());\n  if (weather.getUvIndex() >= 1 && weather.getUvIndex() <= 2) {\n    uvIndex.textContent = `${weather.getUvIndex()} | Low`;\n  } else if (weather.getUvIndex() >= 3 && weather.getUvIndex() <= 5) {\n    uvIndex.textContent = `${weather.getUvIndex()} | Moderate`;\n  } else if (weather.getUvIndex() >= 6 && weather.getUvIndex() <= 7) {\n    uvIndex.textContent = `${weather.getUvIndex()} | High`;\n  } else if (weather.getUvIndex() >= 8 && weather.getUvIndex() <= 10) {\n    uvIndex.textContent = `${weather.getUvIndex()} | Very High`;\n  } else if (weather.getUvIndex() >= 11) {\n    uvIndex.textContent = `${weather.getUvIndex()} | Extreme`;\n  } else {\n    uvIndex.textContent = `${weather.getUvIndex()} | Unknown`;\n  }\n  wind.textContent = `${weather.getWind()}km/h`;\n\n  // Change Background\n  if (weather.getCondition().toString().toLowerCase().includes('sunny')) {\n    weatherBackground.setAttribute('src', `media/sunny_${random}.mp4`);\n    searchBtn.style.backgroundColor = '#f3ebe1';\n    searchIcon.style.color = 'black';\n  } else if (weather.getCondition().toString().toLowerCase().includes('cloud') || weather.getCondition().toString().toLowerCase().includes('overcast') || weather.getCondition().toString().toLowerCase().includes('mist') || weather.getCondition().toString().toLowerCase().includes('fog')) {\n    weatherBackground.setAttribute('src', `media/cloudy_${random}.mp4`);\n    searchBtn.style.backgroundColor = '#acafbc';\n    searchIcon.style.color = 'black';\n  } else if (weather.getCondition().toString().toLowerCase().includes('rain') || weather.getCondition().toString().toLowerCase().includes('sleet') || weather.getCondition().toString().toLowerCase().includes('drizzle') || weather.getCondition().toString().toLowerCase().includes('thundery') || weather.getCondition().toString().toLowerCase().includes('shower')) {\n    weatherBackground.setAttribute('src', `media/rainy_${random}.mp4`);\n    searchBtn.style.backgroundColor = '#63839d';\n    searchIcon.style.color = 'black';\n  } else if (weather.getCondition().toString().toLowerCase().includes('snow') || weather.getCondition().toString().toLowerCase().includes('blizzard') || weather.getCondition().toString().toLowerCase().includes('ice')) {\n    weatherBackground.setAttribute('src', `media/snowy_${random}.mp4`);\n    searchBtn.style.backgroundColor = 'whitesmoke';\n    searchIcon.style.color = 'black';\n  } else if (weather.getCondition().toString().toLowerCase().includes('clear')) {\n    weatherBackground.setAttribute('src', `media/clear_${random}.mp4`);\n    searchBtn.style.backgroundColor = 'transparent';\n    searchIcon.style.color = '#989faa';\n  }\n}\n\n//# sourceURL=webpack://weather-app/./src/modules/update-ui.js?");

/***/ }),

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Weather)\n/* harmony export */ });\nclass Weather {\n\n  //Constructor\n  constructor(temperature, country, humidity, cloud, uvIndex, wind, feelsLike, condition, icon, name) {\n    this.temperature = temperature;\n    this.country = country;\n    this.humidity = humidity;\n    this.cloud = cloud;\n    this.uvIndex = uvIndex;\n    this.wind = wind;\n    this.feelsLike = feelsLike;\n    this.condition = condition;\n    this.icon = icon;\n    this.name = name;\n  }\n\n  // Getters\n  getTemperature() {\n    return this.temperature;\n  }\n  getCountry() {\n    return this.country;\n  }\n  getHumidity() {\n    return this.humidity;\n  }\n  getCloud() {\n    return this.cloud;\n  }\n  getUvIndex() {\n    return this.uvIndex;\n  }\n  getWind() {\n    return this.wind;\n  }\n  getFeelsLike() {\n    return this.feelsLike;\n  }\n  getCondition() {\n    return this.condition;\n  }\n  getIcon() {\n    return this.icon;\n  }\n  getName() {\n    return this.name;\n  }\n\n  // Setters\n  setTemperature(temperature) {\n    this.temperature = temperature;\n  }\n  setCountry(country) {\n    this.country = country;\n  }\n  setHumidity(humidity) {\n    this.humidity = humidity;\n  }\n  setCloud(cloud) {\n    this.cloud = cloud;\n  }\n  setUvIndex(uvIndex) {\n    this.uvIndex = uvIndex;\n  }\n  setWind(wind) {\n    this.wind = wind;\n  }\n  setFeelsLike(feelsLike) {\n    this.feelsLike = feelsLike;\n  }\n  setCondition(condition) {\n    this.condition = condition;\n  }\n  setIcon(icon) {\n    this.icon = icon;\n  }\n  setName(name) {\n    this.name = name;\n  }\n}\n\n//# sourceURL=webpack://weather-app/./src/modules/weather.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;