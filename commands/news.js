const { MessageEmbed  } = require('discord.js')
const generateRandomColor = require('generate-random-color')
const NewsAPI = require('newsapi')
require('dotenv').config()

const apikey = process.env.NEWSAPI
const newsapi = new NewsAPI(apikey);

module.exports = {
    news: function (query, message) {
        const defaultTitle = "No Title"
        const defaultDescription = "No description found"
        const defaultImage = "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
        newsapi.v2.topHeadlines({
                q: query,
            }).then(res => {
                const title = res.articles[0].title == null || res.articles[0].title == '' ? defaultTitle : res.articles[0].title
                const description = res.articles[0].description == null || res.articles[0].description == '' ? defaultDescription : res.articles[0].description
                const imageUrl = res.articles[0].urlToImage == null || res.articles[0].urlToImage == '' ? defaultImage : res.articles[0].urlToImage
                const url = res.articles[0].url
                const embed = {
                    color: generateRandomColor.hex(),
                    title: title,
                    description: description,
                    image: {
                        url: imageUrl,
                    },
                    url: url
                }
                message.channel.send({
                    embeds: [embed],
                })
            })
            .catch((err) => {
                const embed = new MessageEmbed()
                    .setColor(generateRandomColor.hex())
                    .setTitle(`No results found for ${query}`)
                message.channel.send({
                    embeds: [embed]
                });
            })
    }
}