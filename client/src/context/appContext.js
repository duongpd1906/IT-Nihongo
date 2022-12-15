import React, { useReducer, useContext } from "react";
import reducer from "./reducers";
import axios from "axios";

import {
	CLEAR_ALERT,
	DISPLAY_ALERT,
	REGISTER_USER_BEGIN,
	REGISTER_USER_SUCCESS,
	REGISTER_USER_ERROR,
	LOGOUT_USER,
	LOGIN_USER_BEGIN,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_ERROR,
	ADD_TOPIC_BEGIN,
	ADD_TOPIC_ERROR,
	ADD_TOPIC_SUCCESS,
	GET_TOPICS_BEGIN,
	GET_TOPICS_SUCCESS,
	GET_TOPICS_ERROR,
	HANDLE_CHANGE,
	CREATE_OR_UPDATE_VOTE_SUCCESS,
	CREATE_OR_UPDATE_VOTE_ERROR,
	CLEAR_VALUES,
	CREATE_OR_UPDATE_VOTE_BEGIN,
	GET_MY_VOTES_BEGIN,
	GET_MY_VOTES_ERROR,
	GET_MY_VOTES_SUCCESS,
	HANDLE_TOPIC_CHANGE,
	GET_MY_TOPICS_BEGIN,
	GET_MY_TOPICS_SUCCESS,
	GET_MY_TOPICS_ERROR,
	GET_MY_COMMENTS_BEGIN,
	GET_MY_COMMENTS_SUCCESS,
	GET_MY_COMMENTS_ERROR,
	GET_ALL_COMMENTS_BEGIN,
	GET_ALL_COMMENTS_SUCCESS,
	GET_ALL_COMMENTS_ERROR,
	ADD_COMMENT_BEGIN,
	ADD_COMMENT_SUCCESS,
	ADD_COMMENT_ERROR,
	UPDATE_COMMENT_BEGIN,
	UPDATE_COMMENT_SUCCESS,
	UPDATE_COMMENT_ERROR,
	DELETE_COMMENT_BEGIN,
	DELETE_COMMENT_SUCCESS,
	DELETE_COMMENT_ERROR,
} from "./actions";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");
const initialState = {
	isLoading: false,
	showAlert: false,
	alertText: "",
	alertType: "",
	user: user ? JSON.parse(user) : null,
	token: token,
	listTopics: [],
	allComments: [],
	totalTopics: 0,
	numOfPages: 1,
	page: 1,
	vote: false,
	topicId: "",
	design: "",
	amount: "",
	position: "",
	description: "",
	myComments: [],
	myVotes: [],
	myTopics: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const authFetch = axios.create({
		baseURL: "/api",
	});

	authFetch.interceptors.request.use(
		(config) => {
			config.headers["Authorization"] = `Bearer ${state.token}`;
			return config;
		},
		(error) => {
			return Promise.reject(error);
		}
	);
	// response interceptor
	authFetch.interceptors.response.use(
		(response) => {
			return response;
		},
		(error) => {
			console.log(error.response);
			if (error.response.status === 401) {
				console.log("AUTH ERROR");
			}
			return Promise.reject(error);
		}
	);

	const displayAlert = () => {
		dispatch({ type: DISPLAY_ALERT });
		clearAlert();
	};

	const clearAlert = () => {
		setTimeout(() => {
			dispatch({ type: CLEAR_ALERT });
		}, 3000);
	};

	const addUserToLocalStorage = ({ user, token }) => {
		localStorage.setItem("user", JSON.stringify(user));
		localStorage.setItem("token", token);
	};

	const removeUserFromLocalStorage = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("user");
	};

	const registerUser = async ({ currentUser }) => {
		dispatch({ type: REGISTER_USER_BEGIN });
		try {
			const response = await axios.post(
				"http://localhost:5000/api/auth/register",
				currentUser
			);
			const { user, token } = response.data;
			dispatch({
				type: REGISTER_USER_SUCCESS,
				payload: {
					user,
					token,
				},
			});
			addUserToLocalStorage({ user, token });
		} catch (error) {
			dispatch({
				type: REGISTER_USER_ERROR,
				payload: { msg: error.response.data.msg },
			});
		}
		clearAlert();
	};

	const loginUser = async ({ currentUser }) => {
		dispatch({ type: LOGIN_USER_BEGIN });
		try {
			const { data } = await axios.post("/api/auth/login", currentUser);
			const { user, token } = data;

			dispatch({
				type: LOGIN_USER_SUCCESS,
				payload: { user, token },
			});

			addUserToLocalStorage({ user, token });
		} catch (error) {
			dispatch({
				type: LOGIN_USER_ERROR,
				payload: { msg: error.response.data.msg },
			});
		}
		clearAlert();
	};

	const logoutUser = () => {
		dispatch({ type: LOGOUT_USER });
		removeUserFromLocalStorage();
	};

	const addTopic = async (formData) => {
		dispatch({ type: ADD_TOPIC_BEGIN });
		try {
			await authFetch.post(`/topic`, formData);
			dispatch({
				type: ADD_TOPIC_SUCCESS,
			});
		} catch (error) {
			console.log(error);
			dispatch({
				type: ADD_TOPIC_ERROR,
				payload: { msg: error.response.data.msg },
			});
		}
		clearAlert();
	};

	const getAllTopics = async () => {
		dispatch({ type: GET_TOPICS_BEGIN });
		try {
			const { data } = await axios.get(`/api/topic`);
			const { listTopics } = data;
			dispatch({
				type: GET_TOPICS_SUCCESS,
				payload: { listTopics },
			});
		} catch (error) {
			console.log(error);
			dispatch({
				type: GET_TOPICS_ERROR,
				payload: { msg: error.response.data.msg },
			});
		}
		clearAlert();
	};

	const handleChange = ({ name, value }) => {
		dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
	};

	const handleTopicChange = ({ topicId }) => {
		dispatch({ type: HANDLE_TOPIC_CHANGE, payload: { topicId } });
	};

	const createOrUpadateVote = async () => {
		dispatch({ type: CREATE_OR_UPDATE_VOTE_BEGIN });
		try {
			const { vote, design, position, amount, description, topicId } =
				state;
			await authFetch.post("/vote", {
				topicId,
				vote,
				design,
				position,
				amount,
				description,
			});
			dispatch({ type: CREATE_OR_UPDATE_VOTE_SUCCESS });
			dispatch({ type: CLEAR_VALUES });
		} catch (error) {
			if (error.response.status === 401) return;
			dispatch({
				type: CREATE_OR_UPDATE_VOTE_ERROR,
				payload: { msg: error.response.data.msg },
			});
		}
		clearAlert();
	};

	const getMyTopics = async () => {
		dispatch({ type: GET_MY_TOPICS_BEGIN });
		try {
			const { data } = await authFetch.get(`/topic/me`);
			const { myTopics } = data;
			dispatch({ type: GET_MY_TOPICS_SUCCESS, payload: { myTopics } });
		} catch (error) {
			if (error.response.status === 401) return;
			dispatch({
				type: GET_MY_TOPICS_ERROR,
				payload: { msg: error.response.data.msg },
			});
		}
		clearAlert();
	};

	const getAllComments = async () => {
		dispatch({ type: GET_ALL_COMMENTS_BEGIN });
		try {
			const { data } = await axios.get(`/api/comment`);
			const { allComments } = data;
			dispatch({
				type: GET_ALL_COMMENTS_SUCCESS,
				payload: { allComments },
			});
		} catch (error) {
			if (error.response.status === 401) return;
			dispatch({
				type: GET_ALL_COMMENTS_ERROR,
				payload: { msg: error.response.data.msg },
			});
		}
		clearAlert();
	};

	const getMyVotes = async () => {
		dispatch({ type: GET_MY_VOTES_BEGIN });
		try {
			const { data } = await authFetch.get(`/vote/me`);
			const { myVotes } = data;
			dispatch({ type: GET_MY_VOTES_SUCCESS, payload: { myVotes } });
		} catch (error) {
			if (error.response.status === 401) return;
			dispatch({
				type: GET_MY_VOTES_ERROR,
				payload: { msg: error.response.data.msg },
			});
		}
		clearAlert();
	};

	const getMyComments = async () => {
		dispatch({ type: GET_MY_COMMENTS_BEGIN });
		try {
			const { data } = await authFetch.get(`/comment/me`);
			const { myComments } = data;
			dispatch({
				type: GET_MY_COMMENTS_SUCCESS,
				payload: { myComments },
			});
		} catch (error) {
			if (error.response.status === 401) return;
			dispatch({
				type: GET_MY_COMMENTS_ERROR,
				payload: { msg: error.response.data.msg },
			});
		}
		clearAlert();
	};

	const addComment = async (comment) => {
		dispatch({ type: ADD_COMMENT_BEGIN });
		try {
			await authFetch.post(`/comment`, comment);
			dispatch({ type: ADD_COMMENT_SUCCESS });
		} catch (error) {
			if (error.response.status === 401) return;
			dispatch({
				type: ADD_COMMENT_ERROR,
				payload: { msg: error.response.data.msg },
			});
		}
		clearAlert();
	};

	const updateComment = async ({ id, text }) => {
		dispatch({ type: UPDATE_COMMENT_BEGIN });
		try {
			await authFetch.patch(`/comment/${id}`, { text: text });
			dispatch({ type: UPDATE_COMMENT_SUCCESS });
		} catch (error) {
			if (error.response.status === 401) return;
			dispatch({
				type: UPDATE_COMMENT_ERROR,
				payload: { msg: error.response.data.msg },
			});
		}
		clearAlert();
		getMyComments();
	};

	const deleteComment = async (id) => {
		dispatch({ type: DELETE_COMMENT_BEGIN });
		try {
			await authFetch.delete(`/comment/${id}`);
			dispatch({ type: DELETE_COMMENT_SUCCESS });
		} catch (error) {
			if (error.response.status === 401) return;
			dispatch({
				type: DELETE_COMMENT_ERROR,
				payload: { msg: error.response.data.msg },
			});
		}
		clearAlert();
		getMyComments();
	};

	return (
		<AppContext.Provider
			value={{
				...state,
				displayAlert,
				registerUser,
				loginUser,
				logoutUser,
				addTopic,
				getAllTopics,
				handleChange,
				createOrUpadateVote,
				getMyVotes,
				handleTopicChange,
				getMyTopics,
				getMyComments,
				getAllComments,
				addComment,
				updateComment,
				deleteComment,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
// make sure use
const useAppContext = () => {
	return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
