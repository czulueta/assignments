import React from "react"
import song from './cesarsMusic.mp3'

class Music extends React.Component {
    constructor(){
      super()

      this.state = {
        play: false
      }

      this.audio = new Audio
      this.audio.src = song;
    }


    // componentDidMount(){
        // audio.src = "./cesarsMusic.mp3"
    // }
  
    togglePlay = () => {
      this.setState(prevState => ({ play: !prevState.play }), () => {
        this.state.play ? this.audio.play() : this.audio.pause();
      });
    }
  
    render() {
      return (
        <div>
          <button onClick={this.togglePlay}>{this.state.play ? 'Pause' : 'Play'}</button>
        </div>
      );
    }
  }
  
  export default Music;