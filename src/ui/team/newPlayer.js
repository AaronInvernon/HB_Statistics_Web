import React from 'react'
import Header from '../../components/misc/Header'
import PlayersList from './PlayersList'

const NewTeam = () => {
    return (
        <div className="New Team">
            <Header />
            <div className="forms">
                <h2>NEW TEAM</h2>
                <h3>ENTER THE PLAYERS DATA</h3>
                <form className="NewPlayerForm">

                    <div className="form-group">
                        <label htmlFor="name">Number: </label>
                        <input
                            autoComplete="off"
                            name="number"
                            type="number"
                            id="name"
                            placeholder="Enter name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name: </label>
                        <input
                            autoComplete="off"
                            name="name"
                            type="text"
                            id="name"
                            placeholder="Enter name"
                        />
                    </div>
                    <button className="btn btn-success">Create Player</button>
                </form>
            </div>
            <PlayersList/>
        </div>
    )
}

export default NewTeam;
