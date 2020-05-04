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
                candidates: action.payload,
                loading: false,
            }
        case "FETCH_QUESTIONS":
            return {
                ...state,
                questions: action.payload,
                loading: false,
            }
        case "FETCH_APPLICATIONS":
            return {
                ...state,
                applications: action.data,
                loading: false,
            }
        case "FETCH_FAILURE":
            return {
                ...state,
                message: "something went wrong",
                loading: false,
                error: true,
            }
        case "FETCH_REQUEST":
            return {
                ...state,
                loading: true,
            }
    }
}
