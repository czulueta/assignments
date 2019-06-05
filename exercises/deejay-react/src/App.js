import React from "react"
import "./styles.css"
import Box from "./Box"
import Music from "./Music"

class App extends React.Component {
    constructor(){
        super()
        this.state = { 
            squares: [ 'white', 'white', 'white', 'white']
    }

    }

    blackOrWhite = () => {
        this.setState(
            prevState => {
                if (prevState.squares[0] === 'black') {
                    return {
                        squares: ['white', 'white', 'white', 'white']
                    }
                } else {
                    return {
                        squares: ['black', 'black', 'black', 'black']
                    }
                }
            }
        )
    }

    randomColor = () => {
        const colors = ['pink', 'red', 'blue', 'antiquewhite', 'blanchedalmond', 'purple', 'aquamarine', 'rebeccapurple', 'yellow']
        const boxOne = colors[Math.floor(Math.random()*colors.length)]
        const boxTwo = colors[Math.floor(Math.random()*colors.length)]
        const boxThree = colors[Math.floor(Math.random()*colors.length)]
        const boxFour = colors[Math.floor(Math.random()*colors.length)]
        this.setState({
            squares: [boxOne, boxTwo, boxThree, boxFour]
        })
    }
    topColorPurple = () => {
        const colors = ["purple"]
        const boxOne = colors
        const boxThree = colors
        this.setState({
            squares: [boxOne, boxThree]
        })
    }
    oneBottomBlue = () => {
        const color = ["blue"]
        const boxTwo = color
        this.setState({
            squares: ["", "", boxTwo, ""]
            
        })
    }
    twoBottomBlue = () => {
        const color = ["blue"]
        const boxFour = color
        this.setState({
            squares: ["", "", "", boxFour]
        })
    }
    render(){
        return (
            <>
                <div className='square-container'>
                    <Box color={this.state.squares[0]}/>
                    <Box color={this.state.squares[1]}/>
                    <Box color={this.state.squares[2]}/>
                    <Box color={this.state.squares[3]}/>
                </div>
                <button onClick={this.blackOrWhite}>one</button>
                <button onClick={this.topColorPurple}>two</button>
                <button onClick={this.oneBottomBlue}>three</button>
                <button onClick={this.twoBottomBlue}>four</button>
                <button onClick={this.randomColor}>five</button>
                <Music />

                <form action="">
                    <input type="text"/>
                </form>
                {/* { mappedSubmitedForms } */}
            </>
        )
    }

}

 
export default App