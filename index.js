var Discord = require("discord.js");
var Client = new Discord.Client({intents:[]});

Client.on("ready", () => {
    console.log("le bot marche");
});

Client.login("ODEzNzQ5NjY0Mzc2Njg0NTc0.GpDmQs.unrAbIXVd6iMJJ9sNPR3KvirSX-RXxgfRVFzKM")