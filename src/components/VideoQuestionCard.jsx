import React, { useState } from 'react'

export default function VideoQuestionCard({ video, qId, getQuestion, postComments, applications }) {
    const [comment, setComment] = useState("")
    return (
        <div className="my-2 border shadow shadow-sm p-2">
            <div className="my-2">
                <video src={video} width="500" height="300" type="video/mp4" controls={true} />
            </div>
            <div className="">
                <div>
                    <div>Q. {getQuestion(qId)}</div>
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="form-control" cols="45" rows="4"></textarea>
                </div>
                <button
                    onClick={() => {
                        postComments(applications, qId, applications.id, comment)
                        setComment("")
                    }
                    }
                    className="btn btn-success my-2">Save</button>
            </div>
        </div>
    )
}
