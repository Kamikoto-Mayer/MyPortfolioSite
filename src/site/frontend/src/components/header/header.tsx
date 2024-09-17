import { useState } from "react";
import Menu from "../menu/menu";
import "./header.css";

interface HeaderProps {
	title_name: string;
	text: string;
}

const disableScroll = () => {
	document.body.style.overflow = 'hidden';
};
  
const enableScroll = () => {
	document.body.style.overflow = '';
};
  
export default function Header(props: HeaderProps) {
	const [isOpen, setIsOpen] = useState(false);
	const handleMenuClick = () => {
		setIsOpen(!isOpen);
		if (!isOpen) {
			disableScroll();
		  } else {
			enableScroll();
		  }
	  };
	return (
		<header className="header">
			<div className="container">
				<div className="header__top-bar">
					<div className="header__logo">
						<img src="/LogoWhite.svg" alt="logo" />
					</div>
					<div className={`burger-menu ${isOpen ? 'burger-menu__active' : ''}`} onClick={handleMenuClick} >
						<div className="burger-menu__lines">
							<div className="burger-menu__line"></div>
							<div className="burger-menu__line"></div>
							<div className="burger-menu__line"></div>
						</div>
					</div>
					<Menu isOpen={isOpen} />
				</div>
				<div className="header__main">
					<div className="header__title">
						<h1>{props.title_name}</h1>
					</div>
					<div className="header__text">
						<p>{props.text}</p>
					</div>
				</div>
			</div>
		</header>
	)
}