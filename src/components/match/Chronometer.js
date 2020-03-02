import React from 'react'
import { play, pause } from '../../assets'

export default class Chronometer extends React.Component {

    constructor(props) {
        super(props)

        this.currentTime = 0
        this.intervalId = 0
        this.state = {
            play: true
        }
    }


    addSeconds = () => this.currentTime++;

    startClick() {
        this.intervalId = setInterval(this.addSeconds(), 1000)
    }

    getMinutes() {
        let minutes = 0;

        if (this.currentTime >= 60) {
            minutes = Math.floor(this.currentTime / 60);
        }

        return minutes;
    }

    getSeconds() {
        let seconds = 0;

        seconds = this.currentTime % 60;

        return seconds;
    }

    twoDigitsNumber(number) {

        if (number < 10) {

            return '0' + number;
        } else {

            return `${number}`
        }

    }

    stopClick() {
        clearInterval(this.intervalId)
    }

    playButton(props) {
        this.setState( {play: false} )
        return (
            <img src={play} alt="button" onClick={this.startClick()} />
        );
    }

    pauseButton(props) {
        //this.setState( {play: true} )
        return (
            <img src={pause} alt="button" onClick={this.stopClick()} />
        );
    }

    render() {

        const play = this.state.play
        let button;

        if (play) {

             button = this.playButton()

        } else {
             button = this.pauseButton()
        }

        return (
            <div className="Chronometer ">
                <h1>
                    {this.twoDigitsNumber(this.getMinutes())}:{this.twoDigitsNumber(this.getSeconds())}
                </h1>

                {button}

            </div>
        )
    }
}
