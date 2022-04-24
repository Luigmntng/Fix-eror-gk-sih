let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
m.reply(wait)
 let res = await fetch('http://zekais-api.herokuapp.com/randomhusbu')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.result) throw 'Error!'
  await conn.sendButtonImg(m.chat, json.result, 'mas saya nih', 'Lui gmntng', 'Next', `.husbu`, m)

}
handler.help = ['husbu']
handler.tags = ['anime']
handler.command = /^(husbu)$/i

module.exports = handler

let koncol = global.wm