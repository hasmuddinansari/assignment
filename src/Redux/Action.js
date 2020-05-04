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

export const CommentMsg = (msg) => {
    return {
        type: 'COMMENT',
        msg: msg
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


export const postComments = (objectWithComment, qId, aId, comment) => {
    return dispatch => {
        let modifiedIndex
        objectWithComment.videos.forEach((e, i) => {
            if (e.questionId == qId) {
                modifiedIndex = i
            }
        })
        objectWithComment.videos[modifiedIndex] = {
            ...objectWithComment.videos[modifiedIndex],
            "comments": comment
        }
        // Content-Type: application/json
        console.log(objectWithComment)
        return axios({
            method: "PATCH",
            baseURL: "http://localhost:3004",
            url: `/applications/${aId}`,
            headers: { "Content-Type": "application/json" },
            data: objectWithComment,
        })
            .then(() => {
                alert("Comment is added in json file")
            })
    }
}

