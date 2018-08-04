const Discord = require("discord.js");
const fs = require("fs");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("**You shall not pass!**");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!wUser) return message.reply("**Can't Find This Boi!**");
  if(wUser.hasPermission("KICK_MEMBERS")) return message.reply("**No warn'n tasting cherros for you m8.**");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

   message.channel.send(` <@${wUser.id}> 𝓱𝓪𝓼 𝓫𝓮𝓮𝓷 𝔀𝓪𝓻𝓷𝓮𝓭. 𝓐𝓷𝓭 𝓸𝓷, ${warns[wUser.id].warns} 𝔀𝓪𝓻𝓷𝓲𝓷𝓰. <a:wesmart:464688988180054017>`);

if(warns[wUser.id].warns == 3){
 message.guild.member(wUser).kick(reason);
 message.channel.send(`<@${wUser.id}> **has been kick at 3 warnings.**`);
}

if(warns[wUser.id].warns == 6){
 message.guild.member(wUser).ban(reason);
 message.channel.send(`<@${wUser.id}> **has been ban at 6 warnings,** ${reason}`);
}

}

module.exports.help = {
  name: "warn"
}
