# country-state-city-data
Comprehensive JSON dataset containing information about countries, states/provinces, and cities worldwide. This dataset includes details such as country codes, state/province codes, city names, and their respective codes.

## Installation

Ensure you have Node.js installed. Then, install the package using npm:

```bash
npm install @bhavingajjar/country-state-city-data

const countryStateCityData = require('@bhavingajjar/country-state-city-data');
const countryStateCity = new countryStateCityData();

console.log(countryStateCity.getAllCountries());
console.log(countryStateCity.getCountryById(101));
console.log(countryStateCity.getStateByCountryId(101));
console.log(countryStateCity.getCitiesByStateId(12));
console.log('Country with code in: ',countryStateCity.getCountryByCode('in'));
console.log('Country with phone code 91: ',countryStateCity.getCountryByPhoneCode('91'));
console.log('Countries with phone code 1: ',countryStateCity.getCountriesByPhoneCode('1'));