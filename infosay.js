const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(message.member.hasPermission("BAN_MEMBERS")){
    let sicon = message.guild.iconURL;
    let sayembed = new Discord.RichEmbed()
    .setDescription(args.join(" "))
    .setColor("#fb47ff")
    .setThumbnail(sicon)
    message.channel.send(sayembed);
    message.delete(1);
  }
}

module.exports.help = {
  name: "infosay"
}
