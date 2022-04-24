let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
     m.reply('tunggu...')
  let res = `https://server-api-rey.herokuapp.com/api/wallpaper/loli?apikey=apirey`
  await conn.sendButtonImg(m.chat, res, 'Adik saya nih', 'By Lui', 'Next', `.loli`, m, false)
}
handler.help = ['shouta', 'sota', 'shota', 'souta']
handler.tags = ['anime']
handler.command = /^(shota|souta|sota|shota)$/i

module.exports = handler



