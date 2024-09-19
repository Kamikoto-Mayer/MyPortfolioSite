import "./text_comp.css"
import { isValidElement } from 'react';

interface TextCompProps {
	title: string,
	text: object | string,
	name_comp: string
}

export default function TextComp(props: TextCompProps) {
	return (
		<section className={`${props.name_comp}`}>
			<div className="container text_comp__container">
				<div className="text_comp__wrapper">
					<div className="text_comp__title">
						<h2>{props.title}</h2>
					</div>
					<div className="text_comp__text">
						{/* <p>{props.text}</p> */}
						{isValidElement(props.text) ? props.text : <p>{props.text.toString()}</p>}
					</div>
				</div>
			</div>
		</section>
	)
}