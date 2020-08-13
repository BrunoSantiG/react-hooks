export const reducerPosts = (state, action) => {
	switch (action.type) {
		case "FETCH_SUCCESS":
			return { loading: false, error: "", posts: action.payload };
		case "FETCH_ERROR":
			return {
				loading: false,
				error: "Something went wrong!",
				posts: {},
			};
		default:
			return { loading: true, error: "", posts: {} };
	}
};
