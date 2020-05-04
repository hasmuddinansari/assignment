import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import { fetchResponse, postComments } from "../Redux/Action"
import VideoQuestionCard from "./VideoQuestionCard"

function Dashboard({ fetchResponse, candidates, applications, questions, error, message, postComments }) {

    useEffect(() => {
        fetchResponse("FETCH_CANDIDATES", "candidates")
        fetchResponse("FETCH_QUESTIONS", `questions`)
    }, [])

    function getQuestion(id) {
        if (questions.length > 0) {
            let curr_que = questions.find(e => {
                return e.id == id
            })
            return curr_que.question
        }
        else {
            return ""
        }
    }

    function handleChange(e) {
        fetchResponse("FETCH_APPLICATIONS", `applications/${e.target.value}`)
    }


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-12">
                    <h3>Select Candidate</h3>
                    <select
                        onChange={handleChange}
                        name="candidates"
                        className="custom-select">
                        <option disabled selected></option>
                        {candidates && candidates.map(candidate => {
                            return <option
                                key={candidate.id}
                                value={candidate.applicationId}

                            >
                                {candidate.name}
                            </option>
                        })}
                    </select>

                    {/* candidate not found */}
                    {error && <h3 className="my-2 text-danger">Application not found !!</h3>}

                    <div className="row justify-content-center">
                        {applications
                            && applications.videos
                            && applications.videos.map(v => {
                                return <VideoQuestionCard
                                    key={v.questionId} video={v.src} qId={v.questionId} getQuestion={getQuestion}
                                    postComments={postComments}
                                    applications={applications}
                                />
                            })}
                    </div>
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        candidates: state.candidates,
        applications: state.applications,
        questions: state.questions,
        message: state.message,
        error: state.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchResponse: (type, url) => dispatch(fetchResponse(type, url)),
        postComments: (objectWithComment, qId, aId, comment) => dispatch(postComments(objectWithComment, qId, aId, comment))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)