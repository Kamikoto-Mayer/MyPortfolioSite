const express = require('express');
const axois = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = 2099;

const app = express();
app.use(cors())
app.use(express.json());

TELEGRAM_BOT_TOKEN = "7359250227:AAGU4m4ORXFtph_KkSaZiKD1Ag5W83p2H-g";
TEKEGRAM_CHAT_ID = "-4565200718";

app.post('/send-message', (req, res) => {
	const { name, email, message } = req.body;
	const text = `Заявка с сайта\nИмя: ${name}\nEmail: ${email}\nСообщение: ${message}`;
	try  {
		axois.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
			chat_id: TEKEGRAM_CHAT_ID,
			text: text
		})
	} catch (error) {
		console.error('Error sending message:', error);
	}
	res.status('200').json({ message: "Сервер работает!" })
})

app.get('/send-message', (req, res) => {
	res.status('200').json({ message: "Сервер работает!" })
})



app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`)
})