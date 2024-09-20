import "./menu.css";
import { NavLink } from "react-router-dom";

interface MenuProps {
	isOpen: boolean;
}

const enableScroll = () => {
	document.body.style.overflow = '';
};

export default function Menu(props: MenuProps) {
	return (
		<nav className={`header__menu  ${props.isOpen ? "active" : ""}`}>
			<div className="menu__wrapper container">
				<div className="menu__columns menu__columns--menu">
					<p className="text__for__menu"><span>Меню</span></p>
					<ul className="menu__list">
						<li className="menu__item"><NavLink to="/" className="hover__black" onClick={() => {window.scrollTo(0, 0) ; enableScroll()}}>Главная</NavLink></li>
						<li className="menu__item"><NavLink to="/projects" className="hover__black" onClick={() => {window.scrollTo(0, 0) ; enableScroll()}}>Проекты</NavLink></li>
						<li className="menu__item"><NavLink to="/about" className="hover__black" onClick={() => {window.scrollTo(0, 0) ; enableScroll()}}>Обо мне</NavLink></li>
						<li className="menu__item"><NavLink to="/contacts" className="hover__black" onClick={() => {window.scrollTo(0, 0) ; enableScroll()}}>Контакты</NavLink></li>
					</ul>
				</div>
				<div className="menu__columns menu__columns--link">
					<ul className="menu__list_link">
						<li className="menu__item_link"><a href="mailto:danil.sapelnikov0@gmail.com" className="hover__black">danil.sapelnikov0@gmail.com</a></li>
						<li className="menu__item_link"><a href="tel:+7 (918) 982-06-01" className="hover__black">+7 (918) 982-06-01</a></li>
					</ul>
					<ul className="menu__list_link-soc">
						<li className="menu__item_link-soc"><a href="https://hh.ru/applicant/resumes/view?resume=1c7a8f7cff0da9e15b0039ed1f426c5a717848" target="_blank" className=""><img src="/img/menu_photo/hh.svg" className='hh'/></a></li>
						<li className="menu__item_link-soc"><a href="https://t.me/Danil_N2" target="_blank" className=""><img src="/img/menu_photo/tg.svg" className='tg'/></a></li>
						<li className="menu__item_link-soc"><a href="https://github.com/Kamikoto-Mayer" target="_blank" className=""><img src="/img/menu_photo/github.svg" className='github'/></a></li>
					</ul>
				</div>
			</div>
		</nav>	
	);
}