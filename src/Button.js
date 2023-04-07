import React from "react"
import {ThemeContext} from "./ThemeContext"

function Button(props){

    const {color, toggleTheme} = React.useContext(ThemeContext)

    return(
        <button onClick={toggleTheme} className={`${color}-theme`}>Change Theme</button>

    )
}

export default Button