const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(message.member.hasPermission("ADMINISTRATOR")){
    let bicon = bot.user.displayAvatarURL;
    let sayembed = new Discord.RichEmbed()
    .setDescription(args.join(" "))
    .setColor("#fb47ff")
    .setThumbnail(bicon)
    message.channel.send(sayembed);
    message.delete(1);
  }
}

module.exports.help = {
  name: "botsay"
}
