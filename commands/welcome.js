const { MessageEmbed } = require('discord.js')

module.exports = {
    welcome: function (member) {
        console.log(member)
        const channelId = '828663344763633696'
        const user = member.id
        const userColor = member.user.accentColor
        const defaultUrl = 'https://variety.com/wp-content/uploads/2018/05/discord-logo.jpg'
        const userImage = member.user.avatar
        const channel = member.guild.channels.cache.get(channelId)
        const embed = new MessageEmbed()
        .setTitle('Welcome 🥳')
        .setDescription(`Hey! <@${user}> good to see you around here.`)
        .setColor(userColor == undefined ? '#341D5C' : userColor)
        .setImage(userImage == null ? defaultUrl : `https://cdn.discordapp.com/avatars/${user}/${userImage}.png?size=256`)
        channel.send({
            embeds: [embed]
        })
    }
}