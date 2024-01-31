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

export function GetDurationCategory() {
  return [
    { id: 1, category: "Days" },
    { id: 2, category: "Months" },
    { id: 3, category: "Years" },
  ];
}

export function GetEntries() {
  return [
    { id: 1, category: 25 },
    { id: 2, category: 50 },
    { id: 3, category: 100 },
    { id: 4, category: 200 },
    { id: 5, category: 500 },
    { id: 6, category: "All" },
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