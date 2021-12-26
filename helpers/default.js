const { MessageEmbed  } = require('discord.js')
const generateRandomColor = require('generate-random-color');

module.exports = {
    defaultMessage : function (message) {
        const embed = new MessageEmbed()
        .setColor(generateRandomColor.hex())
        .setTitle("Sorry no such command exists!")
        .setDescription("Try { ~commands } for the list of commands.")
        message.channel.send({
            embeds : [embed]
        })
    }
}