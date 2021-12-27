const { bored } = require("../commands/jokes")
const news = require("../commands/news")
const { climate } = require("../commands/weather")
const { crypto } = require("../commands/crypto")
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
                crypto(query, message)
                break
            default:
                defaultMessage(message)
        }
    }
}