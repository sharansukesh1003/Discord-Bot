const { MessageEmbed } = require('discord.js')
const { defaultMessage } = require('../helpers/default')
const axios = require('axios')
require('dotenv').config()

const weatherApi = process.env.WEATHERAPI

module.exports = {
    climate: function (query, message) {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${weatherApi}`)
            .then( res => {
                console.log(res.data)
                const name = res.data.name
                const weatherDescription = res.data.weather[0].description
                const icon = `https://openweathermap.org/img/wn/${res.data.weather[0].icon}.png`
                const humidity = String(res.data.main.humidity)
                const temperature = String(res.data.main.temp - 273.15).slice(0,5)
                const temperatureHighest = String(res.data.main.temp_max - 273.15).slice(0,5)
                const temperatureLowest = String(res.data.main.temp_min - 273.15).slice(0,5)
                const embed = new MessageEmbed()
                    .setTitle(name)
                    .setDescription(weatherDescription)
                    .setThumbnail(icon)
                    .setColor('#A4DE02')
                    .addFields({
                        name: 'Temperature',
                        value: `**${temperature}**°C`,
                        inline: true
                    }, {
                        name: 'Highest',
                        value: `**${temperatureHighest}**°C`,
                        inline: true
                    }, {
                        name: 'Lowest',
                        value: `**${temperatureLowest}**°C`,
                        inline: true
                    },
                    {
                        name: 'Humidity',
                        value: `**${humidity}**%`,
                        inline: true
                    }
                    )
                    message.channel.send({
                        embeds : [embed]
                    })
            }).catch(err => {
                console.log(err)
                defaultMessage(message)
            })
    }
}