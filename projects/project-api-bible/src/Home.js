import React, { Component } from 'react';
import {withProvider} from "./GlobalProvider" 
import sunflower from './sunflower.mp3'

class Home extends Component {
    constructor() {
        super();
    
        this.url = sunflower;
        this.audio = new Audio(this.url)
        this.state = {
            intervalId: '',
            playing: false,
            count: 0
        }
    }

    componentDidMount(){
        var intervalId = setInterval(this.music, 1000);
        this.setState(prevState => {
            return {
                intervalId: intervalId,
                count: prevState.count + 1
            }    
        });
    }

    componentWillUnmount(){
        clearInterval(this.state.intervalId)
        this.audio.pause()
    }

    music = () => {
        if(this.state.count > 12 && this.state.count < 18){
            this.audio.pause()
            this.setState(prevState => {
                return {
                    count: prevState.count + 1
                }    
            });
        }else if(this.state.count > 15){
            this.audio.play()
            this.setState({count: 0})
        }else{
            this.audio.play()
            this.setState(prevState => {
                return {
                    count: prevState.count + 1
                }    
            });
        }
        console.log(this.state)
    }
    // play = () => {
  
    //     this.audio.play()
    // }
    // pause = () => {
    //     this.setState({
    //         play: false, 
    //         pause: false
    //     })
    //     this.audio.pause()
    // }

    render(){
        return (
            <><div className="home" style={{backgroundImage: `url("http://bettysteacuppuppies.com/images/items/36137273_1083621675127304_4751060653530152960_n.jpg")`}}>
                <h1 className="homeHeaderOne"></h1>
                <button onClick={this.props.getContent}>
                        I-Care
                </button>
                <p className="homeP" dangerouslySetInnerHTML={{__html: this.props.newContent}} onClick={this.props.handleSave}></p>
              </div>
            </>
        )
    }
    
}

export default withProvider(Home)

