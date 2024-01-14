export function GetTimeZoneList() {
    var timezones = require('timezones-list');
    return timezones["default"];
}

export function GetCurrencyList() {
    var currencyList = require('country-currency-list');
    return currencyList();
}
export function GetCountryList() {
    var list = require('country-currency-list');
    return list();
}