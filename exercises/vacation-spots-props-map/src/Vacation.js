import React from "react"

const Vacation = (props) => {
    console.log(props)
    // let{place, price, timeToGo} = props.vacations;
    return <div className = "bigDiv">
                <div className = "vacationSpots">
                    <div className = "w3-container">
                        <div className = "w3-card-4" style = {{width: "50%"}}>
                            <img src={props.image}/>
                            <h1>{props.place}</h1>
                            <h3>{props.price}</h3>
                            <p>{props.timeToGo}</p>
                        </div>
                    </div>
                

                </div>
            </div>
        
}

export default Vacation