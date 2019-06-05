import React, { Component } from "react"

class Form extends Component {
    constructor(){
        super()

        this.state = {
            firstName: "",
            lastName: "",

        }
    } 
    handleSubmit = () => {
        console.log(this.state)
    }
    handleChange = (event) => {
        this.setState ({
            [event.target.name]: event.target.value
        

        })
    }


    render(){
        return(
            <>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" placeholder="First Name" name="firstName" value={this.state.firstName}/>
                    <input onChange={this.handleChange} type="text" placeholder="Last Name" name="lastName" value={this.state.lastName}/>
                    <button>Submit</button>

                </form>
                <h1>{this.state.firstName} {this.state.lastName}</h1>
            </>
            
        )
    }
}
export default Form
