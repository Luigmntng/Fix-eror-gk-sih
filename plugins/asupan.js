//created by Lui
let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
  try {
     let res = await fetch('http://hadi-api.herokuapp.com/api/randomImage/cecan')
     let img = await res.buffer()
     let caption = `
follow ig @ahmdlui >///<
`.trim()
    conn.sendFile(m.chat, img, 'asupan.jpg', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Erro!*_'
    }
}

handler.help = ['asupan']
handler.tags = ['asupan']
handler.command = /^asupan$/i

handler.fail = null

module.exports = handler
