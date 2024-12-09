const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // для обслуживания статичных файлов

app.post('/submit-review', (req, res) => {
    const { name, email, review } = req.body;

    // Здесь можно сохранить отзыв в базу данных

    // Отправка email с благодарностью
    sendThankYouEmail(email);

    return res.json({ message: 'Спасибо за ваш отзыв!' });
});

// Функция для отправки благодарственного письма
function sendThankYouEmail(email) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your_email@gmail.com', // ваш email
            pass: 'your_password' // ваш пароль или пароль приложения
        }
    });

    const mailOptions = {
        from: 'your_email@gmail.com',
        to: email,
        subject: 'Спасибо за ваш отзыв!',
        text: 'Мы благодарим вас за то, что вы оставили отзыв.'
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Email sent: ' + info.response);
    });
}

app.listen(PORT, () => {
    console.log(`Сервер работает на http://localhost:${PORT}`);
});
