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
            
            <button className="btn btn-info m-3">Statistics <i className="fa fa-file-text-o" aria-hidden="true"></i></button>
        </div>
        
    )
}



export default Match;