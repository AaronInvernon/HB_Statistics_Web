import React from 'react'
import Header from '../../components/misc/Header'

const NewTeam = () => {
    return (
        <div className="New Team">
            <Header />
            <div className="forms container w-80">
            <h2>NEW TEAM</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="name"> Team Name: </label>
                        <input
                            autoComplete="off"
                            name="name"
                            type="text"
                            id="name"
                            placeholder="Enter team name"
                        />
                    </div>
                    <button className="btn btn-success"> Create Team </button>
                </form>
            </div>
        </div>
    )
}

export default NewTeam;