let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    const ftrol = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: `ERR NOT FOUND`, 
    orderTitle: `▮Menu ▸`,
    thumbnail: await (await fetch('https://cdn.anisearch.com/images/character/cover/full/83/83046.webp')).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }

   conn.sendBut(m.chat, `Selamat menunaikan ibadah puasa`, `Bot aktip selama ${time}`, 'INFO', '.ping', ftrol)
}
handler.help = ['runtime']
handler.tags = ['info']
handler.command = /^(uptime|runtime)$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
