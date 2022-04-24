//created by Scooppt
let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
  try {
     let res = await fetch('https://server-api-rey.herokuapp.com/api/random/cosplay?apikey=APIKEY')
     let img = await res.buffer()
     let caption = `
Jgn Lupa Follow ig @ahmdlui
`.trim()
    conn.sendFile(m.chat, img, 'waifu.jpg', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Erro!*_'
    }
}

handler.help = ['cosplay']
handler.tags = ['anime']
handler.command = /^cosplay$/i

handler.fail = null

module.exports = handler
