let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  m.reply('Sedang Diproses...')
  let res = await fetch(`http://hadi-api.herokuapp.com/api/darkjokes`)
  let json = await res.json()
  conn.sendFile(m.chat, json.url, 'husbu.jpg', json.name, m, false)
}
handler.help = ['darkmeme'].map(v => v + ' ')
handler.tags = ['internet']

handler.command = /^(darkmeme)$/i
handler.register = true

module.exports = handler
