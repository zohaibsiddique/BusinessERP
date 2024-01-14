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
export function GetStockAccountMethodList() {
    return [
        {label: "FIFO (First In First Out"},
        {label: "LIFO (Last In First Out"}
    ]
}

export function GetYearList() {
    const monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 
    const monthsObject = monthsArray.map(month => ({ label: month }));
    return monthsObject.reverse();
}