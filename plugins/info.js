let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: NINGA OFFICIAL
║
╠➥ Github: https://github.com/KetutDarsa
╠➥ Instagram: @jayasantika_26
║
╠═〘 Thanks To 〙 ═
╠➥ Mr.T3R54K1T1_404
╠➥ FAJAR ALFARIZI
╠➥ FALAH & LIA
╠➥ Dan kawan yang lain :)
║
╠═〘 DONASI 〙 ═
╠➥ DANA : +62 813-3378-2061
╠➥ OVO : +62 813-3378-2061
╠➥ Telkomsel : +62 813-3378-2061
║
║>Request? Wa.me/6281333782061
║
╠═〘 FAJAR ALFARIZI 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['about']
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

