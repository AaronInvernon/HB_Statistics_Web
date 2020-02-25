import React from 'react'
import { play } from '../../assets'

const Chronometer = () => {
    return (
        <div className="Chronometer ">
            <h1>
                00:00
            </h1>
            <img src={play} alt="button" />
        </div>
    )
}

export default Chronometer;