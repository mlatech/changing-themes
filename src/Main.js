import React from "react"
import {ThemeContext} from "./ThemeContext"

export default function Main(){

    const {color} = React.useContext(ThemeContext)

    return (
        <div className={`${color}-theme`}>
        <h3>You are currently using {color}</h3>
        </div>
    )
}