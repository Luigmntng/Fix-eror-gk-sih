let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
     m.reply('tunggu...')
  let res = `https://server-api-rey.herokuapp.com/api/wallpaper/shota?apikey=apirey`
  await conn.sendButtonImg(m.chat, res, 'Adik saya nih', 'By Lui', 'Next', `.shouta`, m, false)
}
handler.help = ['shouta']
handler.tags = ['anime']
handler.command = /^(shouta)$/i

module.exports = handler
