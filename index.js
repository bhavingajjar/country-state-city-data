class countryStateCityData {
    constructor() {
        this.countries = require('./data/countries.json');
        this.states = require('./data/states.json');
        this.cities = require('./data/cities.json');
    }

    getCountryById(countryId) {
        return this.countries.find(country => country.id === countryId);
    }

    getStateByCountryId(countryId) {
        return this.states.filter(state => state.country_id === countryId);
    }

    getCitiesByStateId(stateId) {
        return this.cities.filter(city => city.state_id === stateId);
    }

    getAllCountries() {
        return this.countries;
    }
}

module.exports = countryStateCityData;
