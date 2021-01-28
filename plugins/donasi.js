let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • OVO [+62 813-3378-2061]
│ • Telkom [+62 813-3378-2061]
│ • Dana [+62 813-3378-2061]
│ • GOPAY [+62 813-3378-2061]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
