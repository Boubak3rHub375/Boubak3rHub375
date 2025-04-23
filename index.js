const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { headless: true }
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('✅ البوت خدام!');
});

client.on('message', message => {
    if (message.body.toLowerCase() === 'apk') {
        message.reply(`📱 [APK TOOLS]

1. Hack App Data ➤ https://example.com/hackapp
2. DroidJack ➤ https://example.com/droidjack
3. NetHunter Store ➤ https://example.com/nethunter
4. Termux Mod ➤ https://example.com/termuxmod

⚠️ استعملهم فقط للتعلم.`);
    }
});

client.initialize();
