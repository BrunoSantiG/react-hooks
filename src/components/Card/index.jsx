import React from "react";

import "./styles.css";

function Card(props) {
	return (
		<div className="Card">
			<div className="Header">{props.title}</div>
			<div className="Content">{props.children}</div>
		</div>
	);
}

export default Card;
