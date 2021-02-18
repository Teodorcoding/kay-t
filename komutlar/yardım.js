const db = require("quick.db");
const Discord = require('discord.js');
const valak = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || valak.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Momentum Guard Yardım Menüsü`, client.user.avatarURL())
.setColor('#960b14')
.setDescription(`Momentum Guard`)  
.addField(`__Rol Koruma__`,` \`${prefix}rol-koruma\` Sunucuda Rol Silmeyi Kapatır.`,true)
.addField(`__Kanal Koruma__`,` \`${prefix}kanal-koruma\` Sunucuda Kanal Silmeyi Kapatır.`,true)
.addField(`__Ever Here Engel__`,` \`${prefix}eh-engel\` Sunucuda Ever Here Atmayı Kapatır.`,true)
.addField(`__Mod Log__`,` \`${prefix}mod-log\` ModLog Kanalı Ayarlar.`,true)
.addField(`__Sohbet Temizleme__`,` \`${prefix}temizle\` Sunucuda İstediğiniz Kanalda Mesajları Siler.`,true)
.addField(`__Ping__`,` \`${prefix}ping\` Botun Pingine Bakarsınız.`,true)
.addField(`__Reklam Engel__`,` \`${prefix}reklam-engel\` Sunucunuzu Reklamlardan Korur.`,true)
.addField(`__Küfür Engel__`,` \`${prefix}küfür-engel\` Sunucunuzu Küfürlerden Korur.`,true)
.addField(`__Sohbet Aç Kapat__`,` \`${prefix}sohbet-aç/kapat\` Yazdığınız Kanalı Açıp Kapatırsınız.`,true)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["help","koruma"], 
    permLevel: 0
  };
  exports.help = {
    name: 'yardım'
  }; 
  