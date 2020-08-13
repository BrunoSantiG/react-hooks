import React, { createContext } from "react";

import Context from "./components/Context/Main";
import { userData, techData } from "./service/data";
import CounterReduceSimple from "./components/CounterReduce/Simple";
import Card from "./components/Card";

import "./App.css";
import CounterReduceComplex from "./components/CounterReduce/Complex";
import ReduceAndContext from "./components/ReduceAndContext";
import DataFetchReducer from "./components/DataFetchReducer";

export const UserContext = createContext();
export const TechContext = createContext();

function App() {
	return (
		<div className="App">
			<div className="Cards">
				<Card title={"useContext"}>
					<UserContext.Provider value={userData}>
						<TechContext.Provider value={techData}>
							<Context />
						</TechContext.Provider>
					</UserContext.Provider>
				</Card>
				<Card title={"useReduce(Variable)"}>
					<CounterReduceSimple />
				</Card>
				<Card title={"useReduce(Object)"}>
					<CounterReduceComplex />
				</Card>

				<Card title={"useReduce And useContext"}>
					<ReduceAndContext />
				</Card>

				<Card title={"API Request with useReduce"}>
					<DataFetchReducer />
				</Card>
			</div>
		</div>
	);
}

export default App;
