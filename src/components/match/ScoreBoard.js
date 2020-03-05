import React from 'react'
import Chronometer from './Chronometer'


const ScoreBoard = ({ teamA = {}, teamB = {}, goals = {} }) => {
    console.log(teamA)
    console.log(teamB)
    return (
        <div className="ScoreBoard">
            <div className="container">

                <div className="row">
                    <div className="col-4"> <h1>{teamA.name}</h1></div>
                    <div className="col-5"><h1>Game Day</h1> </div>
                    <div className="col-3"> <h1>{teamB.name}</h1></div>

                </div>

                <div className="row">
                    <div className="col-2"> <h1>xx</h1></div>
                    <div className="col"> <Chronometer /></div>
                    <div className="col-2"> <h1>xx</h1></div>

                </div>

            </div>
        </div>
    )
}

export default ScoreBoard;