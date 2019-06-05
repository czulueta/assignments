
import React, { Component } from 'react';

class Music extends Component {
    constructor() {
        super();
    
        this.state = { 
            play: false, 
            pause: true
        }
    
        this.url = "sunflower.mp3";
        this.audio = new Audio(this.url)
    }

    componentDidMount(){
        this.play()
    }

    play = () => {
        this.setState({
            play: true, 
            pause: false
        })
        this.audio.play()
    }
    pause = () => {
        this.setState({
            play: false, 
            pause: false
        })
        this.audio.pause()
    }
    render() { 
        return ( 
            <>
                <button onClick={this.play}>Play</button>
                <button onClick={this.pause}>Pause</button>
            </>
         )
    }
}
 
export default Music;