const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client
const bot = new Discord.Client({disableEveryone: true});
const afk = {}
bot.commands = new Discord.Collection();



fs.readdir("./c/", (err, files) => {
  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Can't Find Commands");
    return;
  }

jsfile.forEach((f, i) =>{
  let props = require(`./c/${f}`);
  console.log(`${f} Has Loaded Boi!`);
  bot.commands.set(props.help.name, props);

  });

});



bot.on("ready", async () => {
  console.log(`${bot.user.username} Has Just Rolled Into Your DM's!`);
  bot.user.setActivity("MangoSalad!", {type: "WATCHING"});
  bot.user.setStatus("online");
});

bot.on(`guildCreate`, guild => {
  let defultChannel = member.guild.channels.find('name', `general`);
  defultChannel.sendMessage(`I have joined ${guild.name}`);
});

bot.on(`guildMemberAdd`, (member) => {
  var joinrole = member.guild.roles.find('name', `sAdS`);
  member.addRole(joinrole);
console.log(`${user.id} Joined!`);
  //const joinchannel = member.guild.channels.find('name', `welcome`);
  //joinchannel.send(`${member} Joined!`);
});

bot.on(`guildMemberRemove`, async member => {

console.log(`${member.id} left the server.`);

  let welcomechannel = member.guild.channels.find('name', `welcome`);
  welcomechannel.send(`${member} Has left the party, farewell!`);

});


bot.on("message", async message => {

  if(!message.content.startsWith(botconfig.prefix)) return;
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;


  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }


  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
});


bot.login(botconfig.token);
