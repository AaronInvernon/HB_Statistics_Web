import React from 'react'
import HBService from '../../services/HBService'
import Header from '../../components/misc/Header'
import { Link } from 'react-router-dom'
import PlayersList from './PlayersList'

class NewPlayer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: {
                name: '',
                number: 0, 
                teamID: null
            },
            loading: false,
            success: false,
            players: []
        }
    }
    
    componentDidMount() {
        console.info('props ', this.props)
        this.setState({
            ...this.state, 
            data: {
                ...this.state.data,
                teamID: this.props.match.params.id}
        })
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
            HBService.createPlayer(data)
                .then((player) => {
                    this.setState({ ...this.state, success: true, players:[...this.state.players, player] })
                })
                .catch(() => {
                    this.setState({ error: true, loading: false })
                })
        })
    }

    render() {
        return (
            <div className="New Team">
                <Header />
                <div className="forms">
                    <h2>NEW TEAM</h2>
                    <h3>ENTER THE PLAYERS DATA</h3>
                    <form className="NewPlayerForm" onSubmit={this.handleSubmit}>

                        <div className="form-group">
                            <label htmlFor="number">Number: </label>
                            <input
                                onChange={this.handleChange}
                                autoComplete="off"
                                name="number"
                                type="number"
                                id="name"
                                placeholder="Enter number"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Name: </label>
                            <input
                                onChange={this.handleChange}
                                autoComplete="off"
                                name="name"
                                type="text"
                                id="name"
                                placeholder="Enter name"
                            />
                        </div>
                        <button className="btn btn-success">Create Player</button>
                        <Link to="/" className="btn btn-info ml-3">Home</Link>
                    </form>
                </div>
                <PlayersList list={this.state.players}/>
            </div>
        )
    }
}

export default NewPlayer;
