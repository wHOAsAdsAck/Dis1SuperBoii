const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!bUser) return message.channel.send("**Can't Find This Boi!**");
let bReason = args.join(" ").slice(22);
if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**You shall not pass!**");
if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("**No ban'n tasting cherros for you m8.**");

let banEmbed = new Discord.RichEmbed()
 .setDescription("*~~BANNED~~*")
 .setColor("#022459")
 .addField("Banned User", `${bUser}`)
 .addField("Reason", bReason);

message.guild.member(bUser).ban(bReason)
message.channel.send(banEmbed);

}

module.exports.help = {
name: "ban"
}
