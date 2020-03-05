import React from 'react'
import HBService from '../../services/HBService'
import Header from '../misc/Header'
import { Link } from 'react-router-dom'
import Spinner from '../../ui/Spinner'


class PreMatch extends React.Component {

    state = {
        data: {
            teamA: '',
            teamB: ''
        }, 
        loading: true,
        success: false
    }

    
    componentDidMount() {
        HBService.getTeams()
            .then(teams => {
                this.setState({ teams, loading: false })
            })
            .catch(error => console.info(error))
    }


    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            data: {
                ...this.state.data,
                [name]: value
            }
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();

        const { data } = this.state
        this.setState({...this.state, loading: true, error: false }, () => {
            console.log(data)
            HBService.createMatch(data)
                .then((match) => {
                    this.setState(
                        { 
                            ...this.state, 
                            loading: false,
                            success: true,
                            matchID: match._id, 
                            teamA: this.state.data.teamA, 
                            teamB: this.state.data.teamB 
                        })
                })
                .catch(() => {
                    this.setState({ error: true, loading: false })
                })
        })
    }

    render() {
        if (this.state.loading) {
            return <Spinner />
        }

        if (this.state.success) {            
            return   <Link to={`/matches/${this.state.matchID}`}> Start Match </Link>
        }

        return (
            <div className="PreMatch">
                <Header />
                <form className="container  text-center mt-3" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="teamA">Choose your team:</label>
                        <select id="teamA" name="teamA" form="teamA" onChange={this.handleChange}>
                            {this.state.teams.map((team, i) => (
                                <option key={i} value={team._id}>{team.name}</option>
                            ))}
                        </select>
                    </div>
                    <br /><br />

                    <div className="form-group">
                        <label htmlFor="teamB">Choose opponent team:</label>
                        <select id="teamB" name="teamB" form="teamB" onChange={this.handleChange}>
                            {this.state.teams.map((team, i) => (
                                <option key={i} value={team._id}>{team.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="container mt-5">
                    <button
                            type="submit"
                            className="btn btn-success mr-3"
                            disabled={this.state.loading}
                        >
                            Start Match
                    </button>

                        <Link to="/teams/new" className="btn btn-info">Create Team</Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default PreMatch;