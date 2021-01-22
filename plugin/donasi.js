let handler = async m => m.reply(`
╭─「 Donasi 」
│ • DANA : [0895-2466-4142]
│ • OVO : [0895-2466-4142]
│ • 3 : [0895-2466-4142]
│ 「 Chat OWNER 」
│ > Ingin donasi? Wa.me/6289524664142
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
