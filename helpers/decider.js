const { bored } = require("../commands/jokes")
const news = require("../commands/news")
const { climate } = require("../commands/weather")
const { defaultMessage } = require("./default")

module.exports = {
    commandDecider: function (command, query, message) {
        switch (command) {
            case 'news':
                news.news(query, message)
                break
            case 'weather':
                climate(query, message)
                break
            case 'bored':
                bored(query, message)
                break
            case 'crypto':

                break
            default:
                defaultMessage(message)
        }
    }
}