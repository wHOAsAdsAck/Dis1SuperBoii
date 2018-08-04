const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let sayembed = new Discord.RichEmbed()
.setDescription(args.join(" "))
.setColor("#ff001d");
message.channel.send(sayembed);
message.delete(5);
}

module.exports.help = {
  name: "embedsay"
}
