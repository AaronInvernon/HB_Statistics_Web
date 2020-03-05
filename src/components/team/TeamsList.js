import React from 'react'
import HBService from '../../services/HBService'
import Spinner from '../../ui/Spinner'
import Header from '../misc/Header'

import { Link } from 'react-router-dom'

class TeamList extends React.Component {
    state = {
        teams: [],
        loading: true
    }

    componentDidMount() {
        HBService.getTeams()
            .then(teams => {
                this.setState({ teams, loading: false })
            })
            .catch(error => console.info(error))
    }

    render() {
        if (this.state.loading) {
            return <Spinner />
        }

        return (
            <div>
                <Header />
                <table className=" table table-striped">
                    <thead>
                        <tr>
                            <th className="text-center">TEAMS LIST</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.teams.map((team, i) => (
                            <tr key={i}>
                                <td>{team.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <Link to="/teams/new" className="btn btn-info">Create Team</Link>
                <Link to="/" className="btn btn-info ml-3">Home</Link>
            </div>
        )
    }
}

export default TeamList