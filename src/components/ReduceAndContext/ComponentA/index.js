import React, { useContext } from "react";
import { CountContext } from "..";

function ComponentA() {
	const countContext = useContext(CountContext);
	return (
		<div>
			<h5>Component A</h5>
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

export default ComponentA;
