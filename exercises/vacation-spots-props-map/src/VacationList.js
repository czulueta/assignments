import React from 'react'
import vacations from './vacation-list'
import Vacation from './Vacation'
import "./styles.css" 

const VacationList = ()=> {

    const mappedVacation = vacations.map((vacation)=>{
        return <Vacation place={vacation.place} price={vacation.price} timeToGo={vacation.timeToGo} image= {vacation.image} />
    })

    return (
        <div>
            {mappedVacation}
        </div>
    )
}

export default VacationList