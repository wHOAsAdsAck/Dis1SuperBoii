const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rUser) return message.channel.send("I do not recognise dis dud.");
  let reason = args.join(" ").slice(22);

  let reportEmbed = new Discord.RichEmbed()
  .setDescription("Reports")
  .setColor("#022459")
  .addField("Reported User", `${rUser} with ID ${rUser.id}`)
  .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
  .addField("Channel", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", reason);


  message.delete().catch(O_o=>{});
  message.channel.send(reportEmbed);

}


module.exports.help = {
  name: "report"
}
