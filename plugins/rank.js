let levelling = require('../lib/levelling')
let fetch = require('node-fetch')
let fs = require('fs')

let handler  = async (m, { conn, text }) => {

let { exp, limit, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
let nama = conn.getName(m.sender)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
try {
  } catch (e) {

  } finally {
await m.reply(global.wait)
let res = global.API('https://hardianto.xyz', '/api/rankcard', {
    profile: await conn.getProfilePictureUrl(who, 'image').catch(_ => ''),
    name: nama,
    bg: 'https://telegra.ph/file/217711c225d83722a85af.jpg',
    needxp: max,
    curxp: exp,
    level: level,
    logorank: await conn.getProfilePictureUrl(who, 'image').catch(_ => '')
  })
await conn.sendButtonImg(m.chat, res, `
*👾 Your Profile:*
*👤 Name:* ${nama}
*⚜️ Rank:* ${role}
*🔰 Level:* ${level}
*🔗 Exp :* ${exp} --> ${max}
`.trim(), 'Hanya recode sj', 'Back', `.menu`, m)
} 
    
    }

handler.command = /^(profile|profile)$/i
//Semoga di acc >\\<
handler.register = true
handler.fail = null

module.exports = handler




await conn.sendButtonLoc(m.chat, await (await fetch(json.thumb)).buffer(), `
_*${json.judul}*_
_${json.desc}_
`.trim(), watermark, 'Ceritahororr', `.ceritahorror`)
}