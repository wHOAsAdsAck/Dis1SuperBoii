const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    //>addrole @username {role}

  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("You shall not pass!");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Can't find that boi.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Please specify a role?");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("I can't find that role.");

  if(rMember.roles.has(gRole.id)) return message.reply("They already have that role.");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`You have been given ${gRole.name}`)
  }catch(e){
    message.channel.send(`<@${rMember.id}>, has been given ${gRole.name}.`)
}
}

module.exports.help = {
  name: "addrole"
}
