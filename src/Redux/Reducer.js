const initialState = {
    candidates: [],
    questions: [],
    applications: [],
    error: false,
    message: "",
    loading: false,
}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_CANDIDATES":
            return {
                ...state,
                candidates: action.data,
                loading: false,
                error: false,
                message: "",
            }
        case "FETCH_QUESTIONS":
            return {
                ...state,
                questions: action.data,
                loading: false,
                error: false,
                message: "",
            }
        case "FETCH_APPLICATIONS":
            return {
                ...state,
                applications: action.data,
                loading: false,
                error: false,
                message: "",
            }
        case "FETCH_FAILURE":
            return {
                ...state,
                message: action.msg,
                applications: [],
                loading: false,
                error: true,
            }
        case "FETCH_REQUEST":
            return {
                ...state,
                loading: true,
            }
        case "COMMENT":
            return {
                ...state,
                message: action.msg
            }
        default: return state
    }
}
