import React from 'react'
import HBService from '../../services/HBService'
import { Link } from 'react-router-dom'
import Header from '../../components/misc/Header'

class NewTeam extends React.Component {

    state = {
        data: {
            name: ''
        },
        loading: false,
        success: false
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
        this.setState({ loading: true, error: false }, () => {
            HBService.createTeam(data)
                .then((team) => {
                    this.setState({ success: true, teamID: team._id })
                })
                .catch(() => {
                    this.setState({ error: true, loading: false })
                })
        })
    }



    render() {

        const errorClassName = this.state.error ? 'is-invalid' : ''

        if (this.state.success) {
            return   <Link to={`/teams/${this.state.teamID}/players`}> Create Player </Link>
        }

        return (
            <div className="New Team">
                <Header />
                <div className="forms container w-80">
                    <h2>NEW TEAM</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name"> Team Name: </label>
                            <input
                                value={this.state.data.name}
                                onChange={this.handleChange}
                                autoComplete="off"
                                name="name"
                                type="text"
                                className={`form-control ${errorClassName}`}
                                id="name"
                                placeholder="Enter team name"
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-success mr-3"
                            disabled={this.state.loading}
                        >
                            Create Team
                    </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default NewTeam;