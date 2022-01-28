const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

module.exports = client => {
 setInterval(function() {
}, 8000);
  var msgArray = [
"RED-BOT-X:",
"SİZE DAHA İYİ YARDIMCI OLMAK İÇİN BURDA",
""
 ];

 setInterval(() => {
  var rastgeleOyun = Math.floor(Math.random() * msgArray.length);
  client.user.setActivity(`${msgArray[rastgeleOyun]}`, { type: 'STREAMING' ,  url: 'https://discord.gg/Kmn6xJkM8X' })
}, 5000);
    console.log(`Bot Hazır | RED-BOT-X`);
}