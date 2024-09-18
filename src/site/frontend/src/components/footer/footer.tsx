import "./footer.css"

export default function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<div className="footer__navigation">
						<nav className="footer__nav">
							<ul className="footer__list">
								<li className="footer__item"><a href="#" className="hover">Проекты</a></li>
								<li className="footer__item"><a href="#" className="hover">Обо мне</a></li>
								<li className="footer__item"><a href="#" className="hover">Контакты</a></li>
							</ul>
						</nav>
					</div>
					<div className="footer__link">
						<ul className="footer__list_link">
							<li className="footer__item_link"><a href="mailto:danil.sapelnikov0@gmail.com" className="hover">danil.sapelnikov0@gmail.com</a></li>
							<li className="footer__item_link"><a href="tel:+7 (918) 982-06-01" className="hover">+7 (918) 982-06-01</a></li>
						</ul>
					</div>
					<div className="footer__logo">
						<img src="/LogoWhite.svg" alt="logo" />
					</div>
				</div>
			</div>
		</footer>
	)
}