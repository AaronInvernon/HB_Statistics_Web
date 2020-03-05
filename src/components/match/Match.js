import React from 'react'
import HBService from '../../services/HBService'
import Header from '../misc/Header'
import ScoreBoard from './ScoreBoard'
import Players from './Players'

class Match extends React.Component {
    
    state = {
        data: {
            match: null
        }
    }

    componentDidMount() {
        const data = {id: this.props.match.params.id}
        
        HBService.getMatch(data)
            .then( m =>{
                this.setState({
                    data:{
                        ...this.state.data,
                        match: m
                    }
                })
            })
    }

    render() {
        console.info('Match ', this.state.data.match)
        const match = this.state.match
        return (
            <div className="Match">
                <Header />
                <ScoreBoard {...this.state.data.match}/>
                <button className="btn btn-info m-3">Statistics <i className="fa fa-file-text-o" aria-hidden="true"></i></button>
               {match && <Players showModal={this.props.showModal} teamA={match.teamA.players} teamB={match.teamB.players}/>} 

            </div>

        )
    }
}



export default Match;