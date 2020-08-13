import React from "react";

// import { Container } from './styles';

function Title() {
	console.log("render title");
	return <h2>Counter</h2>;
}

export default React.memo(Title);
