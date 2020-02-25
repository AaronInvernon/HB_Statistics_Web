import React from 'react'
import HBServices from '../../services/HBService'


const PreMatch = () => {
    return (
        <div>
            <form>
                <label for="team1">Choose your team:</label>
                <select id="team1" name="team1" form="team1">
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>

                <br /><br />

                <label for="team2">Choose opponent team:</label>
                <select id="team2" name="team2" form="team2">
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>

            </form>
        </div>
    )
}

export default PreMatch;