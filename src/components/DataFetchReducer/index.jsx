import React, { useEffect } from "react";
import { useReducer } from "react";
import { reducerPosts } from "./reducer";
import axios from "axios";

const initialState = {
	loading: true,
	error: "",
	posts: {},
};

function DataFetchReducer() {
	const [state, dispatch] = useReducer(reducerPosts, initialState);
	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/posts/1")
			.then((response) => {
				dispatch({ type: "FETCH_SUCCESS", payload: response.data });
			})
			.catch(() => {
				dispatch({ type: "FETCH_ERROR" });
			});
	}, []);

	const { loading, posts, error } = state;

	return (
		<div>
			{loading ? "Loading" : posts.title}
			{error && error}
		</div>
	);
}

export default DataFetchReducer;
