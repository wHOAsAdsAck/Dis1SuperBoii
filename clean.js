const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  //(prefix)clean 15

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You shall not pass!");
  if(!args[0]) return message.channel.send("oof");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Cleared ${args[0]} messages 👋`).then(msg => msg.delete(5000))
});

}

module.exports.help = {
  name: "clean"
}
