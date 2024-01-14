export function GetCountryList() {
    const countryCodes = require('country-codes-list')
    const myCountryCodesObject = countryCodes.customList('countryCode', '{countryNameEn}')
    return Object.keys(myCountryCodesObject).map(key => ({
    ["value"]: myCountryCodesObject[key],
    ['key']: myCountryCodesObject[key]
    }))
}