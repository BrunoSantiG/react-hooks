import React from "react";

// import { Container } from './styles';

function Count({ text, count }) {
	console.log(`render Count: ${text}`);
	return (
		<h3>
			{text}: {count}
		</h3>
	);
}

export default React.memo(Count);
