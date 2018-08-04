const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    //8ball {question}
if(!args[2]) return message.reply("Ask a full question.");
let replies = ["Yes", "No", "I'm not certin", "What you dream is true", "Ask again later", "I don't think so", "Yes, Yes and Yes!"];

let result = Math.floor((Math.random() * replies.length));
let question = args.slice(1).join(" ");

let ballembed = new Discord.RichEmbed()
 .setAuthor(message.author.tag)
 .setColor("#22459")
 .addField("Question", question)
 .addField("Answer", replies[result]);

message.channel.send(ballembed);

}

module.exports.help = {
  name: "8ball"
}
