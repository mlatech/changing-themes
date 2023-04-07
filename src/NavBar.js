import React from "react"
import {ThemeContext} from "./ThemeContext"

export default function NavBar(props) {

    const {color} = React.useContext(ThemeContext)

    return(
        <div className={`${color}-theme`}>
            <h2>Changing Themes</h2>
        </div>
    )
}