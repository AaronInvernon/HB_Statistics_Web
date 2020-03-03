import React from 'react'

export default class Chronometer extends React.Component {

    constructor(props) {
        super(props)

        this.currentTime = 0
        this.intervalId = 0
        this.state = {
            timerOn: false,
            timerStart: 0,
            timerTime: 0
        };
    }

    startTimer = () => {
        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: Date.now() - this.state.timerTime
        });
        this.timer = setInterval(() => {
            this.setState({
                timerTime: Date.now() - this.state.timerStart
            });
        }, 10);
    };

    stopTimer = () => {
        this.setState({ timerOn: false });
        clearInterval(this.timer);
    };

    render() {
        const { timerTime } = this.state;
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        return (
            <div className="Chronometer ">
                <h1>
                    {minutes}:{seconds}
                </h1>
                {this.state.timerOn === false  && (
                    <button onClick={this.startTimer}>Start</button>
                )}
                {this.state.timerOn === true && (
                    <button onClick={this.stopTimer}>Stop</button>
                )}

            </div>
        )
    }
}
