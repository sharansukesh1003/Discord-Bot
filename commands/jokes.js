const Memer = require('random-jokes-api')
const { defaultMessage } = require('../helpers/default')

module.exports = {
    bored : function (query, message) {
        let boredObject = ''
        switch (query) {
            case 'joke':
                boredObject = Memer.joke()
                break
            case 'pun':
                boredObject = Memer.pun()
                break
            case 'roast':
                boredObject = Memer.roast()
                break
            case 'chuck':
                boredObject = Memer.chuckNorris()
                break
            default:
                return defaultMessage(message)
        }
        const embed = {
            color: '#FFCD01',
            title: query,
            description: boredObject,
        }
        query != 'roast' ? message.channel.send({
            embeds: [embed],
        }) : message.reply({
            embeds: [embed],
        })
    }
}