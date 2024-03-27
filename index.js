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

    /**
     * This function searches for a country in the countries JSON array,
     * where the country_code property of each country matches the
     * lowercased countryCode argument
     *
     * @param {string} countryCode - country code to search for
     * @returns {object|undefined} country object if found, undefined otherwise
     */
    getCountryByCode(countryCode) {
        // convert countryCode to lowercase
        countryCode = countryCode.toLowerCase();
        // search for a country in the countries array where the country_code property matches the lowercased countryCode
        return this.countries.find(country => country.country_code.toLowerCase() === countryCode);
    }

    /**
     * This function searches for a country in the countries JSON array,
     * where the phone_code property of each country matches the
     * phoneCode argument. It will check if the phoneCode argument matches
     * the phone_code of the country, or if it matches the phone_code without
     * the '+' sign.
     *
     * @param {string} phoneCode - phone code to search for
     * @returns {object|undefined} country object if found, undefined otherwise
     */
    getCountryByPhoneCode(phoneCode) {
        // remove the '+' sign from the phoneCode argument and convert to lowercase
        const strippedPhoneCode = phoneCode.replace('+', '').toLowerCase();
        // search for a country in the countries array where the phone_code property matches the strippedPhoneCode
        return this.countries.find(country => country.phone_code.toLowerCase() === strippedPhoneCode || country.phone_code === phoneCode);
    }
    /**
     * This function returns an array of countries from the countries JSON
     * array where the phone_code property of each country matches the
     * phoneCode argument. It will check if the phoneCode argument matches
     * the phone_code of the country, or if it matches the phone_code without
     * the '+' sign.
     *
     * @param {string} phoneCode - phone code to search for
     * @returns {array} array of country objects if found, empty array otherwise
     */
    getCountriesByPhoneCode(phoneCode) {
        // remove the '+' sign from the phoneCode argument and convert to lowercase
        const strippedPhoneCode = phoneCode.replace('+', '').toLowerCase();
        // filter countries array where the phone_code property of each country matches
        // the phoneCode argument, or matches the phone_code without the '+' sign
        return this.countries.filter(country => (country.phone_code === phoneCode) || (country.phone_code.replace('+', '') === strippedPhoneCode));
    }
}

module.exports = countryStateCityData;
