class countryStateCityData {
    constructor() {
        this.countries = require('./data/countries.json');
        this.states = require('./data/states.json');
        this.cities = require('./data/cities.json');
    }

    getCountryByCode(countryCode) {
        return this.countries.find(country => country.code === countryCode);
    }

    getStateByCode(stateCode) {
        return this.states.find(state => state.code === stateCode);
    }

    getCitiesByState(stateCode) {
        return this.cities.filter(city => city.state_code === stateCode);
    }

    getAllCountries() {
        return this.countries;
    }

    getAllStates() {
        return this.states;
    }

    getAllCities() {
        return this.cities;
    }
}

module.exports = countryStateCityData;
