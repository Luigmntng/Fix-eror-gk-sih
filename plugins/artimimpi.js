let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  if (!text) return m.reply('Mimpi apa? ')
  let res = await fetch(global.API('rey',  '/api/primbon/artimimpi', { text: text }, 'apikey'))
  let json = await res.json()
  if (json.result) throw 'eror!'
  m.reply(json.result)
}
handler.help = ['artimimpi'].map(v => v + ' [mimpi]')
handler.tags = ['kerang']
handler.command = /^(artimimpi)$/i

module.exports = handler




