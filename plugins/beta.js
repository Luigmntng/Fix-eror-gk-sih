let fetch = require('node-fetch')
async function handler(m, {command}) {
m.reply('_Loading..._')
	conn.sendFile(m.chat, await ( await fetch(`https://server-api-rey.herokuapp.com/api/wallpaper/${command}?apikey=APIKEY`)).buffer(), '', 'Udah kak Jgn Lupa Follow ig @ahmdlui', m)

}

handler.help = ['montor', 'mobil', 'boneka-chucky', 'kucing', 'anjing', 'kpop', 'kartun', 'ryujin', 'justina']
handler.tags = ['random']
handler.command = /^(montor|mobil|boneka-chucky|kucing|anjing|kpop|kartun|ryujin|justina)$/i
handler.register = true

handler.limit = true

module.exports = handler
