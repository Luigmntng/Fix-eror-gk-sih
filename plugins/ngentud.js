let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, command }) => {
    let __timers = (new Date - global.db.data.users[m.sender].lastngocok)
    let _timers = (500000 - __timers)
    let timers = clockString(_timers) 
    let order = global.db.data.users[m.sender].korbanngocok
let name = m.fromMe ? conn.user : conn.contacts[m.sender]
    let user = global.db.data.users[m.sender]
    let buttons = [
{
    if (new Date - global.db.data.users[m.sender].lastngocok > 500000) {
let randomaku1 = `${Math.floor(Math.random() * 10)}`
let randomaku2 = `${Math.floor(Math.random() * 10)}`
let randomaku4 = `${Math.floor(Math.random() * 5)}`
let randomaku3 = `${Math.floor(Math.random() * 10)}`
let randomaku5 = `${Math.floor(Math.random() * 10)}`

.trim()

let rbrb1 = (randomaku1 * 2)
let rbrb2 = (randomaku2 * 1) 
let rbrb3 = (randomaku3 * 1)
let rbrb4 = (randomaku4 * 1000000)
let rbrb5 = (randomaku5 * 145)


zero1 = `${rbrb1}`
zero2 = `${rbrb2}`
zero3 = `${rbrb3}`
zero4 = `${rbrb4}`
zero5 = `${rbrb5}`

dimasganteng = `✔️ Mendapatkan pelanggan....
`

dimasganteng2 = `Mulai mengngocok...
`

dimasganteng3 = `Ahhh, , > / / / <
*Crott.. *crott.. 💦🥵
`

dimasgantengganteng5 = `Ahhhh,,  > / / / < 🥵💦`

dimasgantengganteng4 = `✔️ Menerima gaji....
`
hsl = `*—[ Hasil Dari ${command} ${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])} ]—*

👤 *Pelanggan:* ${pickRandom(['Sagiri', 'Elaina', 'Kakaknya Kanna','loli', 'mba mba', 'kaka mu', 'adek mu', 'mama mu', 'tante tante', 'Anak SD', 'Kanna'])}
 ➕ 💹 *Uang:* 100000
 ➕ ✨ *Exp:* ${zero5}
 ➕ 🔥 *Dosa:* 10

➕  📥 *Pelanggan sebelumnya:*  ${order}

`

global.db.data.users[m.sender].warn += 10
global.db.data.users[m.sender].money += 100000
global.db.data.users[m.sender].exp += rbrb5
global.db.data.users[m.sender].ojekk += 1

setTimeout(() => {
                     conn.sendBut(m.chat, `${hsl}`, ,'Tante tante anaknya maen fitur bokep tante ciduk tante ciduk', 'Dompet', `.dompet`, m)
                     }, 35000) 
               
                     setTimeout(() => {
                     conn.sendBut(m.chat, `${dimasganteng4}`, 'Tante tante anaknya maen fitur bokep tante ciduk tante ciduk', 'Sudah tidak perawan 😅', `.owner`, m)
                      }, 25000)
                
                     setTimeout(() => {
                     conn.sendBut(m.chat, `${dimasganteng3}`, 'Tante tante anaknya maen fitur bokep tante ciduk tante ciduk', 'Yamete Onichan 😳', `.owner`, m)
                     }, 20000) 
                        
                     setTimeout(() => {
                     m.reply(`${dimasganteng2}`)
                     }, 15000) 
                    
                     setTimeout(() => {
                     m.reply(`${dimasganteng}`)
                     }, 10000) 
                     
                     setTimeout(() => {
                     m.reply('🔎 mencari pelanggan')
                     }, 0) 
  user.lastngocok = new Date * 1
    } else conn.sendBut(m.chat, `Sepertinya Anda Sudah Kecapekan Silahkan Istirahat Dulu sekitar\n*🕔 ${timers}*`, `Recode by Lui`, 'Inventory', `.inv`, m)
}
handler.help = ['ewe', 'kocok', 'openbo']
handler.tags = ['rpg']
handler.command = /^(ewe|kocok|crot|openbo)$/i
handler.register = true
handler.limit = 10

module.exports = handler
let wm = global.wm

function pickRandom(list) {
   return list[Math.floor(Math.random() * list.length)]
}

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
