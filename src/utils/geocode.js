const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibWFsYXlhZGFzIiwiYSI6ImNrb2R5eGZjNzA2NXgyd3Bsc3N2azl1ZjgifQ.OQROelSNfuPYwl4nwfA1kw&limit=1'
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect mapbox service.', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to search the location try with new search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                place_name: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode