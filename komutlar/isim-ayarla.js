const Discord = require("discord.js");
const db = require("quick.db");
let config = require("../utils/errors.js");

exports.run = async (client, message, args) => {

let isim = args.slice(0).join(" ");
if (!isim)

return message.channel.send(
 "**RED-BOT-X**\n\n ・**Lütfen isim belirtin.** \n **Örnek:** **!isim-ayarla** `(İsim)` \n ・`**Tüm komutlara erişmek için -> !yardım**  \n\n**RED-BOT-X**"
    );
db.set(`RED-BOT-Xİsim_${message.author.id}`, isim)
return message.channel.send(
    "**RED-BOT-X**\n**------------------------------------**\n**• Profil isminiz başarıyla ayarlandı.** \n**• Belirtilen İsim ->** `" +
    isim +
    "` \n`• !yardım` **Yazarak tüm komutlara erişebilirsiniz.** \n **------------------------------------**\n**RED-BOT-X**"
    );

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "Profil"
};

exports.help = {
  name: "isim-ayarla",
  description: "isim-ayarla",
  usage: "isim-ayarla",
  kategori: "Profil"
};
