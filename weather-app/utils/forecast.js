const request = require('request')

const forecast = (latitude,longitude, callback) => {

    const url = 'https://api.darksky.net/forecast/329b6851c2f5171de86bee0c67e997e3/' + longitude + ','+ latitude + '?units=si&lang=bg'

    request({
        url: url,
        json: true
    }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service, check your internet connection!', undefined)
        } else if (response.body.error) {
            callback('Location not found, check your coordinates!', undefined)
        } else {
            callback(undefined, response.body.daily.data[0].summary +
                ' It is currently ' +
                response.body.currently.temperature +
                ' degrees and the chance of rain is ' +
                response.body.currently.precipProbability + '%'
            )
        }
    })
}

module.exports = forecast