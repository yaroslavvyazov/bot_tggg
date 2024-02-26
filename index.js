const TelegramApi = require('node-telegram-bot-api')


const token = '7024734649:AAGfa4ekF_A4ATUnF6-k1CcQKwD4VOfDDcQ'

const bot = new TelegramApi(token, {polling: true})




const start = () => {

    
    bot.setMyCommands( [
        {command: '/start', description: `Начните пользоваться Ботом! `},
        {command: '/kod', description: 'Узнайте название Вашего фильма!'},

    ])
    
    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;

        let pass = await bot.getChatMember(`@TvoeKino`, chatId)

        if (pass.status === `left` || pass.status === `creator`) {
            await bot.sendMessage(chatId, `sub`);
        } else if (pass.status === `member`) {
            await bot.sendMessage(chatId, `good`)
        }
    
        if (text === '/start') {
            await bot.sendMessage(chatId, `Здравствуйте, ${msg.from.first_name}, введите ваш код по команде /kod!`);
            return bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/420/301/420301d9-363c-31ed-926a-23e4e05759d9/4.webp');
        }
        if (text === '/kod') {
            return bot.sendMessage(chatId, "Введите Ваш код!");
        }

        if (text === '1234') {
            await bot.sendMessage(chatId, "Ваш фильм называется: Остров проклятых(2010г)");
            return bot.sendPhoto(chatId, 'https://kinohod.ru/o/12/e9/12e9fad6-e618-11eb-a401-de9ad328d8a2.jpg');
        }

        return bot.sendMessage(chatId, 'Извините я вас не понял, пожалуйста введите верный код фильма.', )
    })

}
start()