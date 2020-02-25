import React from 'react'
import Header from '../misc/Header'
import ScoreBoard from './ScoreBoard'
import Players from './Players'

const Match = ({ showModal }) => {
    return (
        <div className="Match">
            <Header />
            <ScoreBoard />
            <Players {...{ showModal }} />
            {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                Launch demo modal
            </button> */}
        </div>
        
    )
}



export default Match;