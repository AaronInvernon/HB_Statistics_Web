import React from 'react'
import Header from '../misc/Header'
import { Link } from 'react-router-dom'


const PreMatch = () => {
    return (
        <div className="PreMatch">
            <Header />
            <form className="container  text-center mt-3">
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

                <div className="container mt-5">
                    <button className="btn btn-success mr-3">
                        Start Match
                </button>

                    <Link to="/team/new" className="btn btn-info">Create Team</Link>
                </div>
            </form>
        </div>
    )
}

export default PreMatch;