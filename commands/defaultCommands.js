const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: function (message) {
        const embed = new MessageEmbed()
            .setTitle('List Of Commands')
            .setDescription('**Below are the list of commands the bot currently supports**')
            .setColor('#BF1FFF')
            .addFields({
                name: '**~news** `Provides news related to the topic provided`',
                value: '**example** : `~news bitcoin` \nWill give you the recent headline regarding the topic *bitcoin*.'
            },
            {
                name: '**~bored** `Bored? I can try to entertain you!`',
                value: '**example** : `~bored pun` will return a random pun. \nAvailable aruments **joke**, **pun**, **chuk** *for Chuck Norris 🌚*, **roast** *will roast you 😈*.'
            },
            {
                name: '**~weather** `Returns weather of the mention city`',
                value: '**example** : `~weather London` \nWill give you the current weather in London.'
            },
            {
                name: '**~crypto** `Provides a brief data about the cryptocurrency specified.`',
                value: '**example** : `~crypto dogecoin` \nWill give you the currentprice of *dogecoin* and some other details.'
            })
            message.channel.send({
                embeds: [embed]
            })
    },
    emptyCommand: function (message) {
        const embed = new MessageEmbed()
            .setTitle("Please Enter a Command")
            .setDescription("Try **~commands** for the list of commands.")
            .setColor('#FF0000')
        message.channel.send({
            embeds: [embed]
        });
    },
    emptyArgument: function (message, command) {
        let example = ''
        switch (command) {
            case 'news':
                example = 'Bollwyood'
                break
            case 'weather':
                example = 'Mumbai'
                break
            case 'bored':
                example = 'joke'
                break
            case 'crypto':
                example = 'Dogecoin'
                break
            default:
                example = 'argument'
        }
        const embed = new MessageEmbed()
            .setTitle("Please Enter an argument")
            .setDescription(`please specify argument example **~${command}** *'${example}'* `)
            .setColor('#FF0000')
        message.channel.send({
            embeds: [embed]
        });
    }
}