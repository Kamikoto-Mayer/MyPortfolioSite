import "./menu.css";

interface MenuProps {
	isOpen: boolean;
}

export default function Menu(props: MenuProps) {
	return (
		<nav className={`header__menu  ${props.isOpen ? "active" : ""}`}>
			<div className="menu__wrapper container">
				<div className="menu__columns menu__columns--menu">
					<p className="text__for__menu"><span>Меню</span></p>
					<ul className="menu__list">
						<li className="menu__item"><a href="#" className="hover__black">Главная</a></li>
						<li className="menu__item"><a href="#" className="hover__black">Проекты</a></li>
						<li className="menu__item"><a href="#" className="hover__black">Обо мне</a></li>
						<li className="menu__item"><a href="#" className="hover__black">Контакты</a></li>
					</ul>
				</div>
				<div className="menu__columns menu__columns--link">
					<ul className="menu__list_link">
						<li className="menu__item_link"><a href="mailto:danil.sapelnikov0@gmail.com" className="hover__black">danil.sapelnikov0@gmail.com</a></li>
						<li className="menu__item_link"><a href="tel:+7 (918) 982-06-01" className="hover__black">+7 (918) 982-06-01</a></li>
					</ul>
				</div>
			</div>
		</nav>	
	);
}