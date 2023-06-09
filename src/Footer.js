import React from "react"
import {ThemeContext} from "./ThemeContext"

function Footer(props){

    const {color} = React.useContext(ThemeContext)
    
    return(
        <div className={`${color}-theme`}>
            <h4>The amazing footer</h4>
        </div>
        

    )
}

export default Footer