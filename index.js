/*Created by Apolojize*/
/*https://discord.gg/apolojize*/

const Discord = require("discord.js-self");
var setTitle = require('console-title');
const {token} = require("./config.json");
var color = require("chalk");
require('colors');
const client = new Discord.Client();
var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log(`
   █████╗ ██╗   ██╗████████╗ ██████╗       ██████╗ ██╗   ██╗███╗   ███╗██████╗ 
   ██╔══██╗██║   ██║╚══██╔══╝██╔═══██╗      ██╔══██╗██║   ██║████╗ ████║██╔══██╗
   ███████║██║   ██║   ██║   ██║   ██║█████╗██████╔╝██║   ██║██╔████╔██║██████╔╝
   ██╔══██║██║   ██║   ██║   ██║   ██║╚════╝██╔══██╗██║   ██║██║╚██╔╝██║██╔═══╝ 
   ██║  ██║╚██████╔╝   ██║   ╚██████╔╝      ██████╔╝╚██████╔╝██║ ╚═╝ ██║██║
                               BY APOLOJIZE                                                                                                                               
`)
setTitle("Auto-bump by Apolojize");
if(!token) {console.log('   Token invalid (config.json)'.red)}
console.log("   [!] Connecting ...".cyan)
client.on('ready', async() => {
  console.log(`   [!] Logged in ${client.user.tag} (${client.user.id})`.cyan)
  let channelids =  await question('   [?] What\'s is the channel id ? '.cyan);
  const channel = client.channels.cache.get(channelids);
  if(!channel) {console.log('   Channel invalid.'.red)}
  channel.send("!d bump")
  setInterval(async () => {
    channel.send("!d bump")
  }, 7200000)
})
    client.login(token);

    function question(string) {
      return new Promise((res) => {
          rl.question(string, (answer) => res(answer))
      })
  }
