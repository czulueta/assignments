import React, {Component} from "react"
import "./styles.css"
import Navbar from "./Navbar"
// import axios from "axios";
import { Switch, Route } from "react-router-dom"
import Home from "./Home"
import Save from "./Save"
import About from "./About"



class App extends Component {

    
    render(){
    return (
        <>  
            <Navbar />

                {/* set the dangerously dangerouslySetInnerHTML={this.state.content} */}
                <Switch>
                    <Route exact path= "/" component={Home}/>
                    <Route path= "/about" component={About}/>
                    <Route path= "/save" component={Save}/>
                </Switch>
            <footer className="foot" style={{backgroundImage:`url("https://ui-ex.com/images/transparent-gifs-simpson-2.gif")` }} ></footer>
            <footer className="foot-color"></footer>
            
        </>
    )
    }
}
export default App