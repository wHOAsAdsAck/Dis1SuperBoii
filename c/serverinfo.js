const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


const embed = new Discord.RichEmbed()
embed.setDescription(`${message.guild.name} Infomation:`, true)
embed.addField("Sever Name", message.guild.name, true)
embed.addField("Total Users", message.guild.memberCount, true)
embed.addField("Region", message.guild.region, true)
embed.addField("Owner", message.guild.owner, true)
embed.addField("ID", message.guild.id, true)
embed.setColor("#022459")
embed.setFooter(`${message.author.username}`)
embed.setThumbnail(message.guild.iconURL);

message.channel.send(embed);
}

module.exports.help = {
name: "serverinfo",
description: "Server info."
}
