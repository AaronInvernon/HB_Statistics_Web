import React from 'react'
import HBService from '../../services/HBService'
import Spinner from '../../ui/Spinner'

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
                <table className=" table table-striped">
                    <th>NAME</th>
                    {this.state.teams.map((team, i) => (
                        <tr>
                            <td>{team.name}</td>
                        </tr>
                    ))}
                </table>

                <Link to="/team/new" className="btn btn-info">Create Team</Link>
            </div>
        )
    }
}

export default TeamList