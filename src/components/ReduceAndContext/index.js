import React, { useReducer, createContext } from "react";

import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";
import { countReducer } from "./Reducer/counter";

export const CountContext = createContext();

function ReduceAndContext() {
	const initialState = 0;
	const [count, dispatch] = useReducer(countReducer, initialState);
	return (
		<CountContext.Provider value={{ count, dispatch }}>
			<h1>Count: {count}</h1>
			<ComponentA />
			<ComponentB />
			<ComponentC />
		</CountContext.Provider>
	);
}

export default ReduceAndContext;
