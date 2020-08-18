import React, { createContext } from "react";

import Context from "./components/Context/Main";
import { userData, techData } from "./service/data";
import CounterReduceSimple from "./components/CounterReduce/Simple";
import Card from "./components/Card";

import "./App.css";
import CounterReduceComplex from "./components/CounterReduce/Complex";
import ReduceAndContext from "./components/ReduceAndContext";
import DataFetchReducer from "./components/DataFetchReducer";
import Callback from "./components/Callback";
import Memo from "./components/Memo";
import Ref from "./components/Ref";

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

				<Card title={"useCallback"}>
					<Callback />
				</Card>

				<Card title={"useMemo"}>
					<Memo />
				</Card>

				<Card title={"useRef"}>
					<Ref />
				</Card>
			</div>
		</div>
	);
}

export default App;
