const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d8dd5245a72d739da1c600daa56b6e9d&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude)

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('unable to connect weather service.')
        } else if (body.error) {
            callback('unable to find location.' , body.error)
        } else {
            const {temperature, feelslike, precip, humidity} = body.current
            callback(undefined, 'Current temp:' + temperature + ' Feels Like:' + feelslike + ' Possibility of rain is:' + precip + '%' + ' Humidity is:' + humidity + '%.')
        }

    })

}

module.exports = forecast