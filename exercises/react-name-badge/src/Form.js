import React from "react"
import './styles.css'

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            fName: "",
            lName: "",
            email: "",
            pOfBirth: "",
            phone: "",
            fFood: "",
            comments: "",
            people: []

        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        console.log('submit')
        event.preventDefault()

        const newPerson = {
            fName: this.state.fName,
            lName: this.state.lName,
            email: this.state.email,
            pOfBirth: this.state.pOfBirth,
            phone: this.state.phone,
            fFood: this.state.fFood,
            comments: this.state.comments
        }
        this.setState(prevState => {
            return {
                people: [...prevState.people, newPerson]
            }
        })
    }
    render() {

        const myPeopleMapped = this.state.people.map((person => {
            return(
                <div className="mappedContainer">
                    <div className="navbar">Badge:</div>
                    <div className="mBox">
                        <div className="mName">Name: {person.fName} {person.lName}</div>
                        <div className="mEmail">{person.email}</div>
                        <div className="mPb">{person.pOfBirth}</div>
                        <div className="mPhone">{person.phone}</div>
                        <div className="mFood">{person.fFood}</div>
                        <div className="empty">{person.fFood}</div>
                        <div className="mCom">{person.comments}</div>
                    </div>
                </div>
            )
        }))

        return (
            <>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <input className="box fNameBox" type="text" 
                        placeholder="First Name" 
                        name="fName" 
                        value={this.state.fName}
                        onChange={this.handleChange}/>
                        <input className="box lNameBox" type="text" 
                        placeholder="Last Name" 
                        name="lName" 
                        value={this.state.lName}
                        onChange={this.handleChange}/>
                        <input className="box email" type="text" 
                        placeholder="Email" 
                        name="email" 
                        value={this.state.email}
                        onChange={this.handleChange}/>
                        <input className="box placeOfB" type="text" 
                        placeholder="Place of Birth" 
                        name="pOfBirth" 
                        value={this.state.pOfBirth}
                        onChange={this.handleChange}/>
                        <input className="box phone" type="number" 
                        placeholder="Phone Number" 
                        name="phone" 
                        value={this.state.phone}
                        onChange={this.handleChange}/>
                        <input className="box fFood" type="text" 
                        placeholder="Favorite Food" 
                        name="fFood" 
                        value={this.state.fFood}
                        onChange={this.handleChange}/>
                        <textarea className="box comments" type="textarea" 
                        placeholder="Comments" 
                        name="comments" 
                        value={this.state.comments}
                        onChange={this.handleChange}/>
                        <button className="submit">Submit</button>
                    </form>
                </div>
                {myPeopleMapped}
            </>
        )
    }
}

export default Form