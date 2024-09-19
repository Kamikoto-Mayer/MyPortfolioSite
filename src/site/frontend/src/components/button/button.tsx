import "./button.css"
import { NavLink } from "react-router-dom";

interface ButtonProps {
	title: string
}

export default function Button(props: ButtonProps) {
	return (
		<div className={`${props.title}__button button`}>
			<NavLink to="/contacts" className={`${props.title}__button-item button-item`} onClick={() => window.scrollTo(0, 0)}>Связаться</NavLink>
		</div>
		
	)
}