let moment = require('moment-timezone')
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, {text}) => {
if (!text) return conn.reply(m.chat, 'Harap masukkan link\n\nContoh: .tiktok https://tiktok.com/xxxxxx', m)

    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
    let more = String.fromCharCode(8206)
    let readMore = more.repeat(4001)
let anu = `*── 「 TIKTOK 」 ──*
note : jika bot tidak mengirim/eror video/gambar yg anda di inginkan
anda juga bisa mengetik .ttnowm *link anda* untuk tanpa watermark 
dan .ttdl *link anda* untuk dgn watermark 

SILAHKAN PILIH`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: anu,
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./media/lui.jpg')}, 
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: '📍instagram',
               url: instagram
               }
               
             },
             {
             quickReplyButton: {
               displayText: 'Tanpa Watermark',
               id: `.ttdl ${text}`,
             }
           },
           {
             quickReplyButton: {
               displayText: 'dengan watermark',
               id: `.ttnowm ${text}`,
             }
           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok)$/i

module.exports = handler
