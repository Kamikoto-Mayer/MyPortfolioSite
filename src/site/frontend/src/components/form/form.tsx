import "./form.css"

export default function Form() {
	return (
		<section className="form">
			<div className="container">
				<div className="form__wrapper">
					<div className="form__title">
						<h2>Связаться со мной</h2>
					</div>
					<div className="form__form">
						<form action="#" className="form__forms">
							<div className="form__input form__input-name">
								<label htmlFor="name" className="form__label">Имя</label>
								<input type="text" name="name" id="name" placeholder="Твое Имя" required autoComplete="on" />
							</div>
							<div className="form__input form__input-email">
								<label htmlFor="email" className="form__label">Почта</label>
								<input type="text" name="email" id="email" placeholder="email@example.com" required autoComplete="on" />
							</div>
							<div className="form__input form__input-message">
								<label htmlFor="message" className="form__label">Сообщение</label>
								<textarea name="message" id="message" placeholder="Сообщение" rows={1} cols={1} required/>
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