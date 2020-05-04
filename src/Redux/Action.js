import axios from "axios"

export const fetchRequest = () => {
    return {
        type: "FETCH_REQUEST"
    }
}

export const fetchFailure = (msg) => {
    return {
        type: "FETCH_FAILURE",
        msg: msg
    }
}

export const fetchSuccess = (data, type) => {
    return {
        type: type,
        data: data
    }
}

export const comment = (msg) => {
    return {
        type: 'COMMENT',
        msg
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
                dispatch(fetchFailure(err))
            })
    }
}


export const postComments = (comments) => {
    return dispatch => {
        return axios.post(comments)
            .then(res => {
                dispatch(comment("Comment is added"))
            })
    }
}

