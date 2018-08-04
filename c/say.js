const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let st = args.join(" ");
message.channel.send(st);
message.delete(5);

}

module.exports.help = {
name: "say"
}
