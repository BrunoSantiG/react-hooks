import React from "react";
import { useReducer } from "react";
import reducers from "../reducer";

function CounterReduceSimple() {
	const initialState = 0;
	const [count, dispatch] = useReducer(reducers.reducerSimple, initialState);
	return (
		<div>
			<h1>Count: {count}</h1>
			<button
				onClick={() => {
					dispatch("increment");
				}}
			>
				Increment
			</button>
			<button
				onClick={() => {
					dispatch("decrement");
				}}
			>
				Decrement
			</button>
			<br />
			<button
				onClick={() => {
					dispatch("reset");
				}}
			>
				Reset
			</button>
		</div>
	);
}

export default CounterReduceSimple;
