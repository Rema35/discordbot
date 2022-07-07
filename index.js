const key = require("./secret/key.json")
const id_csgo_role = require("./secret/id.json")

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
    if(message.content == "/search") {
        message.reply(`<@${message.author.id}> cherche un joueur <@&994042052994138182> !`)
    }
    if(message.content == "c'est bien tu es obéissant") {
        message.reply("c'est un honneur maître")
    }
    if(message.content == "appelle moi grand maître à partie de maintenant") {
        message.reply("oui grand maître")
    }
})
client.login(key.token_discord);