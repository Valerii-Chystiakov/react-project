import React from "react"
import Button from "./Button"

class Header extends React.Component {
    render() {
        return (
        <header className="header">Header
        <Button/>
        <Button text="Button"/>
        </header>
        )
    }
}

export default Header