const request = require('request');

const forecast = (lattitude, longitude, callback) => {
   const url = 'https://api.darksky.net/forecast/8517f9b8cef7144974a5ef9fef325e56/' + longitude + ',' + lattitude + '?units=si'
   request({ url, json: true }, (error, { body } = {}) => {
      if (error) {
         callback('Unable to connect to the weather service!', undefined)
      } else if (body.error) {
         callback('Unable to find location!', undefined)
      } else {
         callback(undefined, body.daily.data[0].summary + 'It is currently ' + body.currently.temperature + 'degree celsius. There is ' + body.currently.precipProbability + ' % chance of rain.The maximum temperature today is ' + body.daily.data[0].temperatureHigh + ' degree celsius and the minimum temperature is ' + body.daily.data[0].temperatureLow + ' degree celsius.')
      }
   })
}

module.exports = forecast