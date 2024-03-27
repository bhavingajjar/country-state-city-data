class countryStateCityData {
    constructor() {
        this.countries = require('./data/countries.json');
        this.states = require('./data/states.json');
        this.cities = require('./data/cities.json');
    }

    /**
     * This function returns a country object from the countries JSON array,
     * where the id property of the country matches the countryId argument.
     * If no country is found, undefined is returned.
     *
     * @param {number} countryId - id of the country to search for
     * @returns {object|undefined} country object if found, undefined otherwise
     */
    getCountryById(countryId) {
        return this.countries.find(country => country.id === countryId);
    }

    /**
     * This function returns an array of states from the states JSON array,
     * where the country_id property of each state matches the countryId argument.
     * If no states are found, an empty array is returned.
     *
     * @param {number} countryId - id of the country to search for
     * @returns {array} array of state objects if found, empty array otherwise
     */
    getStateByCountryId(countryId) {
        return this.states.filter(state => state.country_id === countryId);
    }

    /**
     * This function returns an array of cities from the cities JSON array,
     * where the state_id property of each city matches the stateId argument.
     * If no cities are found, an empty array is returned.
     *
     * @param {number} stateId - id of the state to search for
     * @returns {array} array of city objects if found, empty array otherwise
     */
    getCitiesByStateId(stateId) {
        return this.cities.filter(city => city.state_id === stateId);
    }

    /**
     * This function returns all countries from the countries JSON array.
     *
     * @returns {array} array of all country objects
     */
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
