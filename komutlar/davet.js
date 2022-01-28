const REDBOTXDiscord = require('discord.js');
const REDBOTXClient = new REDBOTXDiscord.Client();
exports.run = (client, message) => {
  const REDBOTXEmbed = new REDBOTXDiscord.MessageEmbed();
  REDBOTXEmbed.setColor(0x36393F)
  REDBOTXEmbed.setDescription(` RED-BOT-X!`)
  message.channel.send(REDBOTXrEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};