export default class Weather {
  //Constructor
  constructor(
    temperature,
    country,
    humidity,
    cloud,
    uvIndex,
    wind,
    feelsLike,
    condition,
    icon,
    name
  ) {
    this.temperature = temperature;
    this.country = country;
    this.humidity = humidity;
    this.cloud = cloud;
    this.uvIndex = uvIndex;
    this.wind = wind;
    this.feelsLike = feelsLike;
    this.condition = condition;
    this.icon = icon;
    this.name = name;
  }

  // Getters
  getTemperature() {
    return this.temperature;
  }
  getCountry() {
    return this.country;
  }
  getHumidity() {
    return this.humidity;
  }
  getCloud() {
    return this.cloud;
  }
  getUvIndex() {
    return this.uvIndex;
  }
  getWind() {
    return this.wind;
  }
  getFeelsLike() {
    return this.feelsLike;
  }
  getCondition() {
    return this.condition;
  }
  getIcon() {
    return this.icon;
  }
  getName() {
    return this.name;
  }

  // Setters
  setTemperature(temperature) {
    this.temperature = temperature;
  }
  setCountry(country) {
    this.country = country;
  }
  setHumidity(humidity) {
    this.humidity = humidity;
  }
  setCloud(cloud) {
    this.cloud = cloud;
  }
  setUvIndex(uvIndex) {
    this.uvIndex = uvIndex;
  }
  setWind(wind) {
    this.wind = wind;
  }
  setFeelsLike(feelsLike) {
    this.feelsLike = feelsLike;
  }
  setCondition(condition) {
    this.condition = condition;
  }
  setIcon(icon) {
    this.icon = icon;
  }
  setName(name) {
    this.name = name;
  }
}
