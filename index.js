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
    
        if (text === '/start') {
            await bot.sendMessage(chatId, `Здравствуйте, ${msg.from.first_name}, введите ваш код по команде /kod!`);
            return bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/420/301/420301d9-363c-31ed-926a-23e4e05759d9/4.webp');
        }

        if (text === '/kod') {
            return bot.sendMessage(chatId, "Введите Ваш код!");
        }

        if (text === '1234') {
            await bot.sendMessage(chatId, "Ваш фильм называется: вадим не отвечал мне ебаный час и за это время я нахуй бота сломал поэтому пишк его заново!!!");
            return bot.sendPhoto(chatId, 'https://sun9-20.userapi.com/impg/3-mCe99nQ7ALuoof5s0OKHZu5PV5pQyUqKJTNA/mseFFC-HkbM.jpg?size=1600x719&quality=95&sign=5ec6a50a8b4bb0f91aff0239bf6866a1&type=album');
        }

        return bot.sendMessage(chatId, 'Извините я вас не понял, пожалуйста введите верный код фильма.', )
    })

}
start()