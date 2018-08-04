const Discord = require("discord.js");
const client = new Discord.Client

module.exports.run = async (bot, message, args) => {
const owner = '<@!456033077018492939>';

let bicon = bot.user.displayAvatarURL;
let botembed = new Discord.RichEmbed()
.setDescription("`Bot Infomation`")
.setColor("#022459")
.setThumbnail(bicon)
.addField("Bot Name", `${bot.user}`)
.addField("Created On", message.guild.createdAt)
.addField("Created By", `${owner}`)
.addField("Server's", bot.guilds.size)
.setTimestamp();

return message.channel.send(botembed);
}

module.exports.help = {
name: "botinfo"
}
