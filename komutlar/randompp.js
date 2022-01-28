const REDBOTXDiscord = require('discord.js');
exports.run = (client, message) => {
  const AREDBOTXEmbed = new REDBOTXDiscord.MessageEmbed()
  .setColor("BLUE")
  .setTimestamp()
  .setImage(client.users.cache.random().displayAvatarURL({ display: true, dynamic: true }))
  message.channel.send(REDBOTXEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["random-pp"],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'randompp',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};