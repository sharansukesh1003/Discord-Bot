const generateRandomColor = require('generate-random-color')
const { defaultMessage } = require('../helpers/default')
const weather = require('weather-api-data')

module.exports = {
    climate: function (query, message) {
        weather.loction(query).then(data => {
            message.channel.send(data)
        })
    }
}