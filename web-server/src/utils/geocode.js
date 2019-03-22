const request = require('request')

const geocode = (address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiamVuaW5pZGkiLCJhIjoiY2p0OHBkb3UyMGFocTQzbHAyazlraG1mZSJ9.Wxy32WbcOAGEA-3OSMvhIQ'

    request({
        url: url,
        json: true
    }, (error, response) => {
        if (error) {
            callback('Unable to connect to location service, check your internet connection!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Address not found, check your coordinates!', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longtitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode