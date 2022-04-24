let moment = require('moment-timezone')
let d = new Date(new Date + 3600000)
let locale = 'id'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})

let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}global.owner = ['6282146092695'] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com', //hmm free gk sih gk pernah nyoba soalnya :v
    bx: 'https://bx-hunter.herokuapp.com',
  dhnjing: 'https://dhnjing.xyz', // mati kyk nya ygy 
  hardianto: 'https://hardianto.xyz', //free ygy
  jonaz: 'https://jonaz-api-v2.herokuapp.com', // shine kyk nya ygy
  neoxr: 'https://neoxr-api.herokuapp.com', // sama ini juga kyk nya
  nrtm: 'https://nurutomo.herokuapp.com', // mati kyk nya ygy
  xteam: 'https://api.xteam.xyz', //gk recommend soalnya pelit gk free gk a6 btw bayar buat premium sama unlimited limit ygy
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net', // udah mati kyl nya eror mlu soalnya
  fdci: 'https://api.fdci.se', // gk tau gk pernah coba
  rey: 'https://server-api-rey.herokuapp.com', //nih andalan gweh buat fitur gacha anime btw free ygy
  dzx: 'https://api.dhamzxploit.my.id', //udah mati kyk nya soalnya blum coba
  bsbt: 'https://bsbt-api-rest.herokuapp.com', //gk tau gk nyoba
  zahir: 'https://zahirr-web.herokuapp.com', //mantap zahir kmu ganteng btw free ygy
  zeks: 'https://api.zeks.xyz', //mantap zeka kamu ganteng btw free ygy
  zekais: 'http://zekais-api.herokuapp.com', //mantap zekais kamu ganteng btw free ygy
  hardianto: 'https://hardianto-chan.herokuapp.com', // mati kyknya ygy
  pencarikode: 'https://pencarikode.xyz', //mati kyk nya ygy
  erdwepe: 'https://erdwpe-api.herokuapp.com', // ini juga ygy 
  lolhuman: 'https://api.lolhuman.xyz', //gk recommend soalnya pelit gk free gk a6 btw bayar buat premium sama unlimited limit ygy
  LeysCoder: 'https://leyscoders-api.herokuapp.com' //mantap leyscoder kmu ganteng ya btw free ygy
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://melcanz.com': 'elaina', // pasti org nya ganteng
  'https://hardianto.xyz': 'hardianto', // pasti org nya ganteng
  'https://api.xteam.xyz': 'Dawnfrostkey',  // pasti org nya pelit
  'https://zahirr-web.herokuapp.com': 'zahirgans',  // pasti org nya ganteng
  'https://bsbt-api-rest.herokuapp.com': 'benniismael', //hmmm 
  'https://server-api-rey.herokuapp.com': 'apirey', // pasti org nya ganteng
  'https://api.zeks.xyz': 'apivinz', // pasti org nya ganteng
  'https://hardianto-chan.herokuapp.com': 'hardianto', // hmm
  'https://pencarikode.xyz': 'pais',  // pasti org nya ganteng
  'https://leyscoders-api.herokuapp.com': 'dappakntlll', // pasti org nya gntng
  'https://zekais-api.herokuapp.com': 'zekais', //pasti org nya gntng
  'https://api.lolhuman.xyz': 'pelitbetsihluwh', //pasti org nya pelit
}
//cari apikey sendiri ya gaes yak gw saranin free aja yak
//apikey lolhuman sama xteam pelit ygy gk free gk a6

// Sticker WM
global.stiker_wait = 'Stiker sedang dibuat'
global.packname = 'Lui'
global.author = 'gmntng'





ig: 'ahmdlui'
global.wm = 'SoikemMd'
global.watermark = 'wm'
global.botdate = '╭──────────═┅═─────────\n│◪ ${time}\n┊◪ ${week} ${date}\n╰──────────═┅═─────────'
global.media = 'https://telegra.ph/file/e001198ced5650ef53d47.jpg'
global.instagram = 'https://instagram.com/ahmdlui'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&doScale=true&scaleWidth=500&scaleHeight=500&fontsize=100&fillTextType=0&backgroundColor=%23401620&text='
global.wait = '_*tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'

global.multiplier = 69 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
