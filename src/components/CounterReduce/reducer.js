const reducers = {
	reducerComplex: (state, action) => {
		switch (action.type) {
			case "increment":
				return { ...state, value: state.value + state.by };
			case "decrement":
				return { ...state, value: state.value - state.by };
			case "incrementRange":
				return { ...state, by: state.by + 5 };
			case "decrementRange":
				return { ...state, by: state.by - 5 };
			case "reset":
				return { ...state, value: 0, by: 1 };
			default:
				return state;
		}
	},

	reducerSimple: (state, action) => {
		switch (action) {
			case "increment":
				return state + 1;
			case "decrement":
				return state - 1;
			case "reset":
				return 0;
			default:
				return state;
		}
	},
};
export default reducers;
