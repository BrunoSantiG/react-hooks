import React from "react";
import { useReducer } from "react";
import reducers from "../reducer";

function CounterReduceComplex() {
	const initialState = { value: 0, by: 1 };
	const [count, dispatch] = useReducer(reducers.reducerComplex, initialState);
	return (
		<div>
			<h1>Count: {count.value}</h1>
			<h6>Range: {count.by}</h6>
			<button
				onClick={() => {
					dispatch({ type: "increment" });
				}}
			>
				Increment
			</button>
			<button
				onClick={() => {
					dispatch({ type: "decrement" });
				}}
			>
				Decrement
			</button>
			<br />
			<button
				onClick={() => {
					dispatch({ type: "incrementRange" });
				}}
			>
				range +5
			</button>

			<button
				onClick={() => {
					dispatch({ type: "decrementRange" });
				}}
			>
				range -5
			</button>
			<br />
			<button
				onClick={() => {
					dispatch({ type: "reset" });
				}}
			>
				Reset
			</button>
		</div>
	);
}

export default CounterReduceComplex;
