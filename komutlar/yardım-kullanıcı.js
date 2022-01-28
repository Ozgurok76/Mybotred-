const REDBOTXDiscord = require('discord.js');
const REDBOTXClient = new REDBOTXDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = (client, message) => {
 const REDBOTXEmbed = new REDBOTXDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Kullanıcı Yardım Menüsü`)
 .setDescription(`
 **davet** \n-> Botu davet edersiniz.
 **shardbilgi** \n-> Botun shard bilgilerini gösterir.
 **pp** \n-> Etiketlediğiniz kişinin avatarını gösterir.
 **randompp** \n-> Botun ekli olduğu sunuculardaki her hangi birinin avatarını atar.
 **öneri** \n-> Bota öneri belirtirsiniz.
 **istatistik** \n-> Botun istatistiğini gösterir.
 **sonmesaj** \n-> Yazdığınız son mesajı gösterir.
`)
 .setTimestamp()
 message.channel.send(REDBOTXEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};