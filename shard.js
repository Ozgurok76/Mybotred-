const Discord = require('discord.js');
const REDBOTX = require('./ayarlar.json');
const bot = new Discord.Client()
const westra = new Discord.ShardingManager('./REDBOTX.js', {
    totalShards: 1,
    token: REDBOTX.token
});

westra.spawn(); 

westra.on('launch', shard => {
  console.log(`**${shard.id}** ID'li shard başlatıldı.`)
});

setTimeout(() => {
    westra.broadcastEval("process.exit()");
}, 21600000);