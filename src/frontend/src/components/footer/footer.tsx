import "./footer.css"
import { NavLink } from "react-router-dom";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<div className="footer__navigation">
						<nav className="footer__nav">
							<ul className="footer__list">
								<li className="footer__item"><NavLink to="/projects" className="hover" onClick={() => window.scrollTo(0, 0)}>Проекты</NavLink></li>
								<li className="footer__item"><NavLink to="/about" className="hover" onClick={() => window.scrollTo(0, 0)}>Обо мне</NavLink></li>
								<li className="footer__item"><NavLink to="/contacts" className="hover" onClick={() => window.scrollTo(0, 0)}>Контакты</NavLink></li>
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
						{window.innerWidth < 768 ? <NavLink to="/"><img src="/LogoWhiteSmall.svg" alt="logo" /></NavLink> : <NavLink to="/"><img src="/LogoWhite.svg" alt="logo" /></NavLink>}
					</div>
				</div>
			</div>
		</footer>
	)
}