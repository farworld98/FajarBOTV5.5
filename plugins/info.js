let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: Tersakiti Gans
╠➥ Script: @mhmdfjralfarizi_
║
╠➥ Github: PRIVATE BY OWNER
╠➥ Instagram: @mhmdfjralfarizi_
╠➥ YouTube: Tersakiti Gans
║
╠═〘 Thanks To 〙 ═
╠➥ FAJAR & DEBBY
╠➥ FALAH & LIA
╠➥ DENNIS
╠➥ Dan kawan yang lain :)
║
╠═〘 DONASI 〙 ═
╠➥ DANA: +62 813-3378-2061
╠➥ Tsel: +62 813-3378-2061
╠➥ GOPAY: +62 813-3378-2061
╠➥ OVO: +62 813-3378-2061
║
║>Request? Wa.me/+62813-3378-2061
║
╠═〘 𝙼𝚎𝚐𝚞𝚖𝚒𝚗 𝙱𝙾𝚃 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

