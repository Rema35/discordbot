const roleidcsgo = require("./secret/roleidcsgo.json")
const roleidminecraft = require("./secret/roleidminecraft.json")
const roleidlol = require("./secret/roleidlol.json")
const roleidtft = require("./secret/roleidtft.json")
const key = require("./secret/key.json")

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
    const gifcsgo = [" https://tenor.com/view/cs-go-lets-goo-ignuxaz-gif-25390531", "https://tenor.com/view/diego-eric-csgo-csgo-players-counter-strike-gif-22766889", "https://tenor.com/view/csgo-lmao-lmfao-wtf-creepy-gif-4690411", "https://tenor.com/view/csgo-dance-cs-go-dance-gif-24119623","https://tenor.com/view/csgo-dance-gif-22778488","https://tenor.com/view/cs-go-counter-strike-gaming-valve-steam-gif-24195543","https://tenor.com/view/one-tap-headshot-csgo-counter-strike-global-offensive-plays-tv-gif-10473395","https://tenor.com/view/csgo-gif-24626052","https://tenor.com/view/dance-joy-cs-csgo-moves-gif-16638170","https://tenor.com/view/counter-strike-cs-css-source-shotgun-gif-24266845","https://tenor.com/view/csgo-c4-csgoc4-bomb-counter-strike-gif-15745242"]
    const randomMessageCsgo = gifcsgo[Math.floor(Math.random() * gifcsgo.length)];
    const gifminecraft = ["https://tenor.com/view/minecraft-boxer-boxing-minecraft-boxer-gif-18025297","https://tenor.com/view/minecraft-gif-23265126","https://tenor.com/view/minecraft-zombie-savage-gif-14485644","https://tenor.com/view/minecraft-minecraft-online-survival-game-play-games-gif-17110310","https://tenor.com/view/oof-why-hit-target-gif-13073085","https://tenor.com/view/minecraft-ghast-gif-20191186","https://tenor.com/view/minecraft-creeper-whipping-hair-video-games-gangnam-style-gif-18649087","https://tenor.com/view/telly-bridge-skywars-bedwars-hypixel-minecraft-gif-20373498"]
    const randomMessageMinecraft = gifminecraft[Math.floor(Math.random() * gifminecraft.length)];
    const giflol = ["https://tenor.com/view/league-of-legends-gif-24451872","https://tenor.com/view/league-of-legends-lol-esports-teemo-game-gif-20424336","https://tenor.com/view/ding-ding-ding-alistar-league-of-legends-cow-bell-gif-13335517","https://tenor.com/view/teemo-lo-l-league-league-of-legends-heart-gif-18981219","https://tenor.com/view/league-of-legends-lol-league-of-legends-nerd-league-of-legends-sucks-ahri-gif-20332268","https://tenor.com/view/cait-caitlyn-league-of-legends-lol-lol-cait-gif-23740609","https://tenor.com/view/jinx-arcane-league-of-legends-arcane-jinx-jinx-arcane-gif-23869766","https://tenor.com/view/walking-in-jinx-get-jinxed-song-riot-games-music-outside-the-shadow-gif-25791890","https://tenor.com/view/support-league-of-legends-lol-glhf-memories-glhf-gif-19017574","https://tenor.com/view/yone-lol-league-of-legends-gif-24399973"]
    const randomMessagelol = giflol[Math.floor(Math.random() * giflol.length)];
    const giftft = ["https://tenor.com/view/come-at-me-pengu-teamfight-tactics-come-here-lets-go-gif-23653591","https://tenor.com/view/enraged-chibi-vi-teamfight-tactics-angry-mad-gif-23809119","https://tenor.com/view/wink-jinx-choncc-teamfight-tactics-signaling-gif-23653584","https://tenor.com/view/lets-build-pengu-teamfight-tactics-time-to-build-time-to-fix-gif-23653603","https://tenor.com/view/pengu-league-of-legends-eat-eating-tft-gif-21350491","https://tenor.com/view/building-pengu-ekko-teamfight-tactics-crafting-gif-23653607","https://tenor.com/view/throwing-a-tantrum-choncc-teamfight-tactics-throwing-a-fit-upset-gif-23653605","https://tenor.com/view/singing-gloop-teamfight-tactics-lets-dance-move-your-body-gif-23809124","https://tenor.com/view/lol-tft-league-of-legends-teamfight-tactics-pengu-gif-21350760","https://tenor.com/view/tft-penguin-omg-team-fight-tactics-white-eyes-gif-21337754"]
    const randomMessagetft = giftft[Math.floor(Math.random() * giftft.length)];
    if(message.content == "/rcsgo") {
        message.reply(`<@${message.author.id}> cherche un joueur <@&${roleidcsgo.id_csgo_role}> ! ${randomMessageCsgo}`) 
    }
    if(message.content == "/rminecraft") {
        message.reply(`<@${message.author.id}> cherche un joueur <@&${roleidminecraft.id_minecraft_role}> ! ${randomMessageMinecraft} `) 
    }
    if(message.content == "/rlol") {
        message.reply(`<@${message.author.id}> cherche un joueur <@&${roleidlol.id_lol_role}> ! ${randomMessagelol} `) 
    }
    if(message.content == "/rtft") {
        message.reply(`<@${message.author.id}> cherche un joueur <@&${roleidtft.id_tft_role}> ! ${randomMessagetft} `) 
    }
})


client.login(key.token_discord);