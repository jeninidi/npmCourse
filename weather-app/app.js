// console.log('Starting...')

// setTimeout(() => {
//     console.log('2 seconds timer')
// }, 2000);


// setTimeout(() => {
//     console.log('0 seconds')
// }, 0);
// console.log('Stopping...')

const request = require('request')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const url = 'https://api.darksky.net/forecast/329b6851c2f5171de86bee0c67e997e3/55.7040,12.55296?units=si&lang=bg'

request({
    url: url,
    json: true
}, (error, response) => {
    // const data = JSON.parse(response.body)
    // console.log(data.currently)
    //console.log(response.body.currently)

    if (error) {
        console.log('Unable to connect to weather service, check your internet connection!')
    } else if (response.body.error) {
        console.log('Unable to find location,check your coordinates!')
    } else {
        console.log(response.body.daily.data[0].summary +
            ' It is currently ' +
            response.body.currently.temperature +
            ' degrees and the chance of rain is ' +
            response.body.currently.precipProbability + '%')
    }

})

const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Copenhagen.json?access_token=pk.eyJ1IjoiamVuaW5pZGkiLCJhIjoiY2p0OHBkb3UyMGFocTQzbHAyazlraG1mZSJ9.Wxy32WbcOAGEA-3OSMvhIQ'

request({
    url: url2,
    json: true
}, (error, response) => {

    if (error) {
        console.log('Unable to connect to location service, check your internet connection!')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find geolocatoin, check your coordinates!')
    } else {
        console.log('Your latitude is ' +
            response.body.features[0].center[0] +
            ' and your langtitude is ' +
            response.body.features[0].center[1])
    }
})

geocode('New York', (error, data) => {
    if (error) {
         return console.log(error)
    }

    forecast(data.latitude, data.longtitude, (error, data) => {
        if (error) {
            return console.log(error)
        }
        console.log(data.location)
        console.log(forecastData)
    })
})

forecast(-75.7008, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Error', data)
}) 