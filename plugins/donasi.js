let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • DANA [+62 813-3378-2061]
│ • Telkomsel [+62 813-3378-2061]
│ • Gopay [+62 813-3378-2061]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/+62813-3378-2061
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
