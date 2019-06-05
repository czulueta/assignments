import React from "react"
import { withProvider } from "./GlobalProvider"

const Save = (props) => {
    // console.log('save props: ', props)


    const mappedQuotes = props.savedContent.map((quote, i ) => {
        // console.log(quote)
        return (
                <div key={i} onClick={() => props.deleteBtn(quote)}>
                    <p className="saveP" dangerouslySetInnerHTML={{ __html: quote }} className="saved"></p>
                </div>
                )
    })



    return (
        <div  className="save" style={{ backgroundImage: `url("https://www.gtreview.com/wp-content/uploads/2014/11/Sky-Clouds-768x512.jpg")` }}>
            <h1 className="saveHeader" ></h1>
            <div className="newP">
                {mappedQuotes}
            </div>
        </div>
    )
}
export default withProvider(Save)
