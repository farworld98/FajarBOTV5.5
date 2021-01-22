let handler = async m => m.reply(`
╭─「 Donasi 」
│ • DANA : [+62 813-3378-2061]
│ • OVO : [+62 813-3378-2061]
│ • PULSA : [+62 813-3378-2061]
│ 「 Chat OWNER 」
│ > Ingin donasi? Wa.me/+62813-3378-2061
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
