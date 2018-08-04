const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!kUser) return message.channel.send("**Can't Find This Boi!**");
let kReason = args.join(" ").slice(22);
if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("**You shell not pass!**");
if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("**No kick'n tasting cherros for you m8.**");

let kickEmbed = new Discord.RichEmbed()
 .setDescription("*~~KICK~~*")
 .setColor("#022459")
 .addField("Kicked User", `${kUser}`)
 .addField("Reason", kReason);

message.guild.member(kUser).kick(kReason)
message.channel.send(kickEmbed);



}

module.exports.help = {
name: "kick"
}
