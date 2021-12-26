const { Client, Intents } = require('discord.js')
const news = require('./commands/news');
const { commandDecider } = require('./helpers/decider');
const { defaultMessage } = require('./helpers/default');
require('dotenv').config()

const bot = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
const token = process.env.TOKEN
const prefix = '~'

bot.on('ready', () => {
    console.log("Bot's Live")
})

bot.on('messageCreate', (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return
    const userCommand = message.content.slice(prefix.length).split(' ')
    if (userCommand[0] == '') return message.channel.send(`please specify command example { ~'command' 'something' } `)
    if (userCommand[0] != 'news' && userCommand[0] != 'weather' && userCommand[0] != 'bored' && userCommand[0] && 'crypto') return defaultMessage(message)
    if (userCommand.length < 2) return message.channel.send(`please specify command example { ~${userCommand[0]} 'something' } `)
    const command = userCommand[0].toLowerCase()
    const query = userCommand[1].toLowerCase()
    commandDecider(command, query, message)
})

bot.login(token)