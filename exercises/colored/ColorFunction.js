import React from "react"
import ColorBox from "./ColorBox"
import { directive } from "@babel/types";


const ColorList = () => {
    const ColorsMapped = ColorList.map(()=>{
        return <ColoredDivs background = {ColorBox.backgroundColor} title = {ColorBox.title} subtitle = {ColorBox.subtitle} infomation = {ColorBox.information}/>
    })
    return(
        <div>
            {ColorsMapped}

        </div>
    )
}

export default ColorList