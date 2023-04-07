import React from "react"
import Button from "./Button"
import NavBar from "./NavBar"
import {ThemeContextProvider} from "./ThemeContext"

export default function App(props) {
    return(
        <>
            <ThemeContextProvider>
                <NavBar/>
                <Body/>
            </ThemeContextProvider>
        </>
    )
}

