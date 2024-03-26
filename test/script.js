// test/script.js
const countryStateCityData = require('@bhavingajjar/country-state-city-data');
const countryStateCity = new countryStateCityData();

console.log(countryStateCity.getAllCountries());
console.log(countryStateCity.getCountryById(101));
console.log(countryStateCity.getStateByCountryId(101));
console.log(countryStateCity.getCitiesByStateId(12));
