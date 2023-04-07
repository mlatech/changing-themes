import React from "react"
import Button from "./Button"
import NavBar from "./NavBar"
import Main from "./Main"
import Footer from "./Footer"
import style from "./style.css"
import {ThemeContextProvider} from "./ThemeContext"

export default function App(props) {
    return(
        <>
            <ThemeContextProvider>
                <NavBar/>
                <Main/>
                <Button/>
                <Footer/>
            </ThemeContextProvider>
        </>
    )
}

