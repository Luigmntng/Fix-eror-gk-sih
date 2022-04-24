let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
    let res = await fetch(global.API('rey', '/api/downloader/xnxx', { query: text}, 'apikey'))
    if (!res.ok) throw await res.text()
    let json = await res.json()
    let keqing = json.result.map((v, i) => `#${i + 1}. \n*Title:* ${v.title}\n*Info:* ${v.info}\n*Link:* ${v.link}}\n==============\n`).join('\n') 
    if (json.status) m.reply(keqing)
    else throw json
}
handler.help = ['xnxxsearch <query>']
handler.tags = ['bokep']
handler.command = /^(xnxxsearch)$/i

handler.private = true
handler.limit = 8

module.exports = handler




