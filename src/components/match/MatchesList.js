import React from 'react'
import HBService from '../../services/HBService'
import Spinner from '../../ui/Spinner'
import Header from '../misc/Header'

import { Link } from 'react-router-dom'

class TeamList extends React.Component {
    state = {
        matches: [],
        loading: true
    }

    componentDidMount() {
        HBService.getMatches()
            .then(matches => {
                this.setState({ matches, loading: false })
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
                            <th className="text-center">MATCHES LIST</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.matches.map((team, i) => (
                            <tr key={i}>
                                <td>{team.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <Link to="/" className="btn btn-info ml-3">Home</Link>
            </div>
        )
    }
}

export default TeamList