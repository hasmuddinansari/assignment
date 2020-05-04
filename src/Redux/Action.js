import axios from "axios"

export const fetchRequest = () => {
    return {
        type: "FETCH_REQUEST"
    }
}

export const fetchFailure = () => {
    return {
        type: "FETCH_FAILURE",
    }
}

export const fetchSuccess = (data, type) => {
    return {
        type,
        data
    }
}


export const fetchResponse = (type, url) => {
    return dispatch => {
        dispatch(fetchRequest())
        return axios.get(`http://localhost:3004/${url}`)
            .then(res => {
                dispatch(fetchSuccess(res.data, type))
            })
            .catch((err) => {
                dispatch(fetchFailure())
            })
    }
}


