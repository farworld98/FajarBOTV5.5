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
╠➥ Nurotomo
╠➥ MfarelS
╠➥ ST4RZ
╠➥ Dan kawan yang lain :)
║
╠═〘 DONASI 〙 ═
╠➥ DANA : 0895-2466-4142
╠➥ OVO : 0895-2466-4142
╠➥ 3 : 0895-2466-4142
║
║>Request? Wa.me/6289524664142
║
╠═〘 NINGA ZHUMAKE 〙 ═
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

