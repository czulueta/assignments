import React { Component } from "react"
import axios from "axios"
const {Provider, Consumer} = React.createContext()

class TodoProvider extends Component {
    constructor () {
        super()
        this.state = {
            todos: []
        }
    }
    getTodos = () => {
        axios.get("https://api.vschool.io/cesar/todo").then ((response)=> {
            this.setState({todos: response.data})
        })
    }
    render() {
        return (
            <Provider value={{
                ...this.state,
                getTodos: this.getTodos
            }} />
        )
    }
}