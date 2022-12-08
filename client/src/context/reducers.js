import {
	DISPLAY_ALERT,
	CLEAR_ALERT,
	REGISTER_USER_BEGIN,
	REGISTER_USER_SUCCESS,
	REGISTER_USER_ERROR,
	LOGOUT_USER,
	LOGIN_USER_BEGIN,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_ERROR,
	ADD_TOPIC_BEGIN,
	ADD_TOPIC_SUCCESS,
	ADD_TOPIC_ERROR,
	GET_TOPICS_BEGIN,
	GET_TOPICS_SUCCESS,
	GET_TOPICS_ERROR,
	HANDLE_CHANGE,
	CREATE_OR_UPDATE_VOTE_BEGIN,
	CREATE_OR_UPDATE_VOTE_SUCCESS,
	CREATE_OR_UPDATE_VOTE_ERROR,
	CLEAR_VALUES,
	GET_MY_VOTES_BEGIN,
	GET_MY_VOTES_SUCCESS,
	GET_MY_VOTES_ERROR,
	HANDLE_TOPIC_CHANGE,
} from "./actions";
import { initialState } from "./appContext";

const reducer = (state, action) => {
	if (action.type === DISPLAY_ALERT) {
		return {
			...state,
			showAlert: true,
			alertType: "danger",
			alertText: "Please provide all values!",
		};
	}

	if (action.type === CLEAR_ALERT) {
		return {
			...state,
			showAlert: false,
			alertType: "",
			alertText: "",
		};
	}

	if (action.type === REGISTER_USER_BEGIN) {
		return { ...state, isLoading: true };
	}

	if (action.type === REGISTER_USER_SUCCESS) {
		return {
			...state,
			user: action.payload.user,
			token: action.payload.token,
			isLoading: false,
			showAlert: true,
			alertType: "success",
			alertText: "User Created! Redirecting...",
		};
	}

	if (action.type === REGISTER_USER_ERROR) {
		return {
			...state,
			isLoading: false,
			showAlert: true,
			alertType: "danger",
			alertText: action.payload.msg,
		};
	}

	if (action.type === LOGOUT_USER) {
		return {
			...initialState,
			user: null,
			token: null,
		};
	}

	if (action.type === LOGIN_USER_BEGIN) {
		return {
			...state,
			isLoading: true,
		};
	}

	if (action.type === LOGIN_USER_SUCCESS) {
		return {
			...state,
			isLoading: false,
			user: action.payload.user,
			token: action.payload.token,
			showAlert: true,
			alertType: "success",
			alertText: "Login Successful! Redirecting...",
		};
	}

	if (action.type === LOGIN_USER_ERROR) {
		return {
			...state,
			isLoading: false,
			showAlert: true,
			alertType: "danger",
			alertText: action.payload.msg,
		};
	}

	if (action.type === ADD_TOPIC_BEGIN) {
		return {
			...state,
			isLoading: true,
		};
	}

	if (action.type === ADD_TOPIC_SUCCESS) {
		return {
			...state,
			isLoading: false,
			showAlert: true,
			alertType: "success",
			alertText: "Create Topic Successful!",
		};
	}

	if (action.type === ADD_TOPIC_ERROR) {
		return {
			...state,
			isLoading: false,
			showAlert: true,
			alertType: "danger",
			alertText: action.payload.msg,
		};
	}

	if (action.type === GET_TOPICS_BEGIN) {
		return {
			...state,
			isLoading: true,
		};
	}

	if (action.type === GET_TOPICS_SUCCESS) {
		return {
			...state,
			isLoading: false,
			listTopics: action.payload.listTopics,
		};
	}

	if (action.type === GET_TOPICS_ERROR) {
		return {
			...state,
			isLoading: false,
			showAlert: true,
			alertType: "danger",
			alertText: action.payload.msg,
		};
	}

	if (action.type === HANDLE_CHANGE) {
		return {
			...state,
			[action.payload.name]: action.payload.value,
		};
	}

	if (action.type === HANDLE_TOPIC_CHANGE) {
		return {
			...state,
			topicId: action.payload.topicId,
		};
	}

	if (action.type === CREATE_OR_UPDATE_VOTE_BEGIN) {
		return {
			...state,
			isLoading: true,
		};
	}

	if (action.type === CREATE_OR_UPDATE_VOTE_SUCCESS) {
		return {
			...state,
			isLoading: false,
			showAlert: true,
			alertType: "success",
			alertText: "SUCCESS",
		};
	}

	if (action.type === CREATE_OR_UPDATE_VOTE_ERROR) {
		return {
			...state,
			isLoading: false,
			showAlert: true,
			alertType: "danger",
			alertText: action.payload.msg,
		};
	}

	if (action.type === CLEAR_VALUES) {
		const initialState = {
			vote: "",
			design: "",
			position: "",
			amount: "",
			description: "",
		};

		return {
			...state,
			...initialState,
		};
	}

	if (action.type === GET_MY_VOTES_BEGIN) {
		return {
			...state,
			isLoading: true,
		};
	}

	if (action.type === GET_MY_VOTES_SUCCESS) {
		return {
			...state,
			isLoading: false,
			myVotes: action.payload.myVotes,
			alertType: "success",
			alertText: "SUCCESS",
		};
	}

	if (action.type === GET_MY_VOTES_ERROR) {
		return {
			...state,
			isLoading: false,
			showAlert: true,
			alertType: "danger",
			alertText: action.payload.msg,
		};
	}

	throw new Error(`no such action : ${action.type}`);
};

export default reducer;
