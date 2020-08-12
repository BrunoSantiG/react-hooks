import React, { useContext } from "react";
import { CountContext } from "../../..";

function ComponentF() {
	const countContext = useContext(CountContext);
	return (
		<div>
			<h5>Component F</h5>
			<button
				onClick={() => {
					countContext.dispatch("increment");
				}}
			>
				Increment
			</button>
			<button
				onClick={() => {
					countContext.dispatch("decrement");
				}}
			>
				Decrement
			</button>
			<br />
			<button
				onClick={() => {
					countContext.dispatch("reset");
				}}
			>
				Reset
			</button>
		</div>
	);
}

export default ComponentF;
