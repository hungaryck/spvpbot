const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
 // client.user.setActivity(`Serving ${client.guilds.size} servers`);
    client.user.setStatus('idle', '');
    client.user.setActivity("say !help", {
     type: "WATCHING",
     url: "https://www.twitch.tv/chlkrisz"
    });
});

client.on("message", async message => {

  if(message.author.bot) return;

  if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

if(command === "generate") {
  message.channel.send("**Szám generálása 0 és 1000 között...**");
  message.author.send("An SSL error has occurred and a secure connection to the server cannot be made.");
 }

if(command === "tre") {
    message.channel.send({embed: {
     color: 3447003,
     description: "A very simple Embed!"
    }});
  
}
  
if(command === "help") {
   message.channel.send("**HIBA!** *0*");
 }
});
  client.login(config.token);
