import React from 'react'
import Header from '../misc/Header'


const PreMatch = () => {
    return (
        <div className="PreMatch">
            <Header />
            <form className="container mt-3">
                <div className="form-group">
                    <label htmlFor="team1">Choose your team:</label>
                    <select id="team1" name="team1" form="team1">
                        <option value="">TEAMS</option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                </div>
                <br /><br />

                <div className="form-group">
                    <label htmlFor="team2">Choose opponent team:</label>
                    <select id="team2" name="team2" form="team2">
                        <option value="">TEAMS</option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                </div>

                <button className="btn btn-success">
                    Start Match
                </button>

                <button className="btn btn-info">
                    Create Team
                </button>
            </form>
        </div>
    )
}

export default PreMatch;