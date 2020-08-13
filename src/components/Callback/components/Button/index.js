import React from "react";

// import { Container } from './styles';

function Button({ children, handleClick }) {
	console.log(`render Button: ${children}`);
	return <button onClick={handleClick}>{children}</button>;
}

export default React.memo(Button);
