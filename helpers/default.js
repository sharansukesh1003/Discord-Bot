const { MessageEmbed  } = require('discord.js')

module.exports = {
    defaultMessage : function (message) {
        const embed = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle("Sorry no such command exists!")
        .setDescription("Try **~commands** for the list of commands.")
        message.channel.send({
            embeds : [embed]
        })
    }
}