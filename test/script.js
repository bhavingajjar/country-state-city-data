// test/script.js
const countryStateCityData = require('@bhavingajjar/country-state-city-data');
const countryStateCity = new countryStateCityData();

console.log(countryStateCity.getAllCountries());
console.log(countryStateCity.getCountryById(101));
console.log(countryStateCity.getStateByCountryId(101));
console.log(countryStateCity.getCitiesByStateId(12));
console.log('Country with code in: ',countryStateCity.getCountryByCode('in'));
console.log('Country with phone code 91: ',countryStateCity.getCountryByPhoneCode('91'));
console.log('Countries with phone code 1: ', countryStateCity.getCountriesByPhoneCode('1'));
