let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('Proses...')
  let res = `http://docs-jojo.herokuapp.com/api/meme-gen?top=${response[0]}&bottom=${response[1]}&img=https://static.wikia.nocookie.net/dogelore/images/9/97/Doge.jpg/revision/latest/top-crop/width/360/height/450?cb=20190205113053`
  conn.sendFile(m.chat, res, 'neko.jpg', `Sudah Jadi`, m, false)
}
handler.help = ['doggymeme'].map(v => v + ' <text|text>')
handler.tags = ['maker']
handler.command = /^(doggy|doggymeme)$/i

module.exports = handler
