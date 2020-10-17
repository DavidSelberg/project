import React from 'react'
import "./Navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            <a href="#" className="icon">
                <img src="" alt="" className="logo"/>
            </a>
            <a href="#" className="navlink"><p className="navlink_text">Home</p></a>
            <a href="#" className="navlink"><p className="navlink_text">Tasks</p></a>
            <a href="#" className="navlink"><p className="navlink_text">Chat</p></a>
        </div>
    )
}

export default Navbar
