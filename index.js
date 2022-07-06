const key = require('./secret/key.json');

var Discord = require("discord.js");
var Client = new Discord.Client({intents:[]});

Client.on("ready", () => {
    console.log("le bot marche");
});

Client.login(key.token_discord)