const key = require("./secret/key.json")
const id = require("./secret/id.json")
const Discord = require("discord.js")
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    const messages = [" https://tenor.com/view/cs-go-lets-goo-ignuxaz-gif-25390531", "https://tenor.com/view/diego-eric-csgo-csgo-players-counter-strike-gif-22766889", "https://tenor.com/view/csgo-lmao-lmfao-wtf-creepy-gif-4690411", "https://tenor.com/view/csgo-dance-cs-go-dance-gif-24119623"]
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    if(message.content == "/search") {
        message.reply(`<@${message.author.id}> cherche un joueur <@&994042052994138182> ! ${randomMessage}`) 
    }
    if(message.content == "c'est bien tu es obéissant") {
        message.reply("c'est un honneur maître")
    }
    if(message.content == "appelle moi grand maître à partie de maintenant") {
        message.reply("oui grand maître")
    }
})


client.login(key.token_discord);