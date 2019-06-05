import React, { Component } from "react"
import axios from "axios"
const { Consumer, Provider } = React.createContext()

class GlobalProvider extends Component {
    constructor(){
        super()
        this.state= {
            content: [],
            title: "",
            newContent: "",
            savedContent: [],
            
        }
    }


    getContent = () => {
        axios.get("https://vschool-cors.herokuapp.com?url=http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1")
        .then( response => { console.log(response.data)
            this.setState({
                content: response.data[0].content, 
                title: response.data[0].title
            })
            this.cutContent()
        })
    }
    cutContent= () => {
        let endIndex = this.state.content.length - 5
        const newCon = this.state.content.slice(3, endIndex )
        this.setState({
            newContent: newCon
        })
    }
    deleteBtn = (deletedQuote) => {
        this.setState(prevState => { 
            const newSavedContent = prevState.savedContent.filter((quote) => {
                return quote !== deletedQuote 
            })
            console.log(newSavedContent)
            return {
                savedContent: newSavedContent
            }
        })
        //pass in quote as the argument
        //Filter through the savedContent and remove that quote
    }
    handleSave = () => {
        this.setState(prevState => {
            return {
                savedContent: [...prevState.savedContent, prevState.newContent]
            }
        } )
    }
       


   
    render(){
        return (
            <Provider value={{
                ...this.state,
                getContent: this.getContent,
                handleSave: this.handleSave,
                deleteBtn: this.deleteBtn
                
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export default GlobalProvider


export const withProvider = C => props => (
    <Consumer>
        {value => <C {...value} {...props} />}
    </Consumer>
)