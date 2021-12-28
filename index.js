const { Client, Intents } = require('discord.js');
const { emptyCommand, emptyArgument, commands } = require('./commands/defaultCommands');
const { welcome } = require('./commands/welcome');
const { commandDecider } = require('./helpers/decider');
const { defaultMessage } = require('./helpers/default');
require('dotenv').config()

const bot = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, 'GUILD_MEMBERS']
});
const token = process.env.TOKEN
const prefix = '~'

bot.on('ready', () => {
    console.log("Bot's Live")
})

bot.on('guildMemberAdd', (member) => {
    welcome(member)
})

bot.on('messageCreate', (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return
    const userCommand = message.content.slice(prefix.length).split(' ')
    if (userCommand[0] == '') return emptyCommand(message)
    if (userCommand[0] == 'commands') return commands(message)
    if (userCommand[0] != 'news' && userCommand[0] != 'weather' && userCommand[0] != 'bored' && userCommand[0] != 'crypto') return defaultMessage(message)
    if (userCommand.length < 2) return emptyArgument(message, userCommand[0])
    const command = userCommand[0].toLowerCase()
    const query = userCommand[1].toLowerCase()
    commandDecider(command, query, message)
})

bot.login(token)