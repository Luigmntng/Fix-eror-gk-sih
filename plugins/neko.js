let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
m.reply(wait)
 let res = await fetch('https://api.waifu.pics/sfw/neko')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  await conn.sendButtonImg(m.chat, json.url, 'Kucing gw nih', 'Recode by Lui sj', 'Next', `.neko`, m)

}
handler.help = ['neko']
handler.tags = ['anime']
handler.command = /^(neko)$/i

module.exports = handler

let koncol = global.wm