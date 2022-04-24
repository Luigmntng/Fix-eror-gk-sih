const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;Lui gmntng;;;'
                    + 'FN:Lui gmntng\n' // full name
                    + 'ORG:kalo mau masukin bot ini ke gc lu chat;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6282146092695:+62 821-4609-2695\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Lui gmntng', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
