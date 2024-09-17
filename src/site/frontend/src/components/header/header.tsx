import React from "react";
import "./header.css";

interface HeaderProps {
	title_name: string;
	text: string;
}
  
export default function Header(props: HeaderProps) {
	return (
		<div className="header">
			<div className="container">
				<p>{props.title_name}</p><p>{props.text}</p>
			</div>
		</div>
	)
}