export function GetTimeZoneList() {
    var timezones = require('timezones-list');
    return timezones["default"];
}

export function GetBusinessCategory() {
    return [
        { id: 1, category: 'Accounting' },
        { id: 2, category: 'Advertising' },
        { id: 3, category: 'Agriculture' },
        { id: 4, category: 'Automotive' },
        { id: 5, category: 'Beauty & Personal Care' },
        { id: 6, category: 'Construction' },
        { id: 7, category: 'Education' },
        { id: 8, category: 'Finance' },
        { id: 9, category: 'Food & Beverage' },
        { id: 10, category: 'Healthcare' },
      ];
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