const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let helpembed = new Discord.RichEmbed()
.setDescription("`Help Menu`")
.setColor('RANDOM')
.addField("**~~--~~Basic Commands~~--~~**","`Help`**,** `Serverinfo`**,** `Botinfo`**,** `Invite`**,**`Userinfo`")
.addField("**~~--~~Moderation Commands~~--~~**", "`Report`**,** `Mute`**,** `Kick`**,** `Ban`**,** `Addrole`**,** `Removerole`**,** `Warn`**,** `Clean`")
.addField("**~~--~~Fun Commands!~~--~~**", "`Trump`**,** `Hello`**,** `Ping`**,** `Say`**,** `Embedsay`**,** `8Ball`**,** `Doggo`**,** `Kitty`");
message.channel.send(helpembed);

if(message.member.hasPermission("MANAGE_MESSAGES")){
let modembed = new Discord.RichEmbed()
.setDescription("`Mod Help Menu`")
.setColor('RANDOM')
.addField("**Prefix**", "<")
.addField("**Help**", "Helps You With Commands")
.addField("**Basic Commands**", "Hello, Ping, Trump")
.addField("**Serverinfo**", "Shows Some Infomation About The Server")
.addField("**Botinfo**", "Infomation About The Bot")
.addField("**Kick**", "Kicks someone, use this carefully!" )
.addField("**Ban**", "Bans them, they can't come back!" );

try{
  await message.author.send(modembed);
  message.react("👍");
}catch(e){
  message.reply("Your DM's are locked boi, i cannot send. :/");
 }
}


}

module.exports.help = {
name: "help"
}
