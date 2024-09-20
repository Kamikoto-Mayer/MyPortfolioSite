import "./form.css"
import axios from "axios"
import { useState } from "react"



export default function Form() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	  });

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({
		  ...formData,
		  [name]: value
		});
	};

	const handleSubmit = async () => {
		try {
		  await axios.post('http://localhost:2099/send-message' , formData);
		  setFormData({ name: '', email: '', message: '' });
		} catch (error) {
		  console.error('Error sending message:', error);
		}
	};

	return (
		<section className="form">
			<div className="container">
				<div className="form__wrapper">
					<div className="form__title">
						<h2>Связаться со мной</h2>
					</div>
					<div className="form__form">
						<form action="#" onSubmit={handleSubmit} className="form__forms">
							<div className="form__input form__input-name">
								<label htmlFor="name" className="form__label">Имя</label>
								<input type="text" name="name" value={formData.name} onChange={handleChange} id="name" placeholder="Твое Имя" required  />
							</div>
							<div className="form__input form__input-email">
								<label htmlFor="email" className="form__label">Почта</label>
								<input type="email" name="email" value={formData.email} onChange={handleChange} id="email" placeholder="email@example.com" required />
							</div>
							<div className="form__input form__input-message">
								<label htmlFor="message" className="form__label">Сообщение</label>
								<textarea name="message" id="message" value={formData.message} onChange={handleChange} placeholder="Сообщение" rows={1} cols={1} required/>
							</div>
							<div className="form__button button">
								<button className="button-form button-item" type="submit">Отправить</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}