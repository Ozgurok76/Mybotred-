const Discord = require ("discord.js");
let config = require("../utils/errors.js");

exports.run = (client, message) => {

const REDBOTXEMBED = new Discord.MessageEmbed()

.setColor("GREEN")
.setTitle(" **RED-BOT-X**")
.setDescription(`

** Profil Sistemi | Komut Listesi**
**-------------------------------------------------**
**• --!bayrak-ayarla :**   Profil bayrağı belirtir.  --
**• --!cinsiyet-ayarla :** Profil cinsiyet belirtir. --
**• --!isim-ayarla :** Profil ismini belirtir.       --
**• --!soyisim-ayarla :**  Profil soy ismi belirtir. --
**• --!yaş-ayarla :** Profil yaşı belirtir.          --
**• --!profil :**  Kişinin profilini gösterir.       --  
**-------------------------------------------------**
`)

.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(RED-BOT-XEMBED)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'profilsistemi', 
    description: 'yardım',
    usage: 'yardım'
};