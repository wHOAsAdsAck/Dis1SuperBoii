const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {



message.author.send("Here's the invite to get the bot! https://discordapp.com/oauth2/authorize?client_id=461084413653024768&permissions=2146958583&scope=bot. Make sure to join the creator's discord server https://discord.gg/v4fsHJ9, and subscribe to their channel! https://www.youtube.com/channel/UCSB2Ndl1ZtmPT_ee_pMKYhw.");

var testingR = bot.guilds.get("437423842244165633").members.get(message.member.id);

try{
  await message.author.send();
  
}catch(e){
  message.reply("Your DM's are locked boi, i cannot send. :/");
 }
 await message.author.send();
}


module.exports.help ={
name: "invite"
}
