let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Tutorial Buat Bot WA:
Credit: *~Tersakiti Gans*

Ketik di *[TERMUX]*
1) $pkg install git
2) $pkg install ffmpeg
3) $pkg install imagemagick
4) $pkg install nodejs

Untuk Githubnya..
5) $git clone https://github.com/Tersakiti404-cyber/FajarBOTV5.5
6) $ls
7) $cd FajarBOTV5.5

yang *terakhirr*..
Penginstalannya cuy :)
8) npm i
9) node index.js

Bot By Tersakiti_404
`.trim(), m)
}
handler.help = ['tutorial']
handler.tags = ['about']
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

