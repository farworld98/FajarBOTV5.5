let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Tutorial Buat Bot WA:
Credit: *~Drawl Nag*

Ketik di *[TERMUX]*
1) $pkg install git
2) $pkg install ffmpeg
3) $pkg install imagemagick
4) $pkg install nodejs

Untuk Githubnya..
5) $git clone https://github.com/Tersakiti404-cyber/FajarBOTV5.5
6) $ls
7) $cd FajarBOTV5.5
8) $sh install.sh

yang *terakhirr*..
Penginstalannya cuy :)
9) node index.js

_Bisa kalian liat tutorialnya di_
*Youtube kami:*
https://www.youtube.com/c/DrawlNag
`.trim(), m)
}
handler.help = ['tutorial']
handler.tags = ['info']
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

