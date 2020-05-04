import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import { fetchResponse } from "../Redux/Action"

function Dashboard({ fetchResponse, candidates }) {
    const [video, setVideo] = useState({})
    useEffect(() => {
        fetchResponse("FETCH_CANDIDATES", "candidates")
    }, [])

    // useEffect(() => {
    //     // fetchResponse("FETCH_QUESTIONS", `applications/${e.target.value}`)
    // }, [question])

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
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        candidates: state.candidates
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchResponse: (type, url) => dispatch(fetchResponse(type, url))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)