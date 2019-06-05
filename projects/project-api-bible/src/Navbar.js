import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className= "navbar">
            <Link className="navStyle" to="/">Home</Link>
            <Link className="navStyle" to="/about">About</Link>
            <Link className="navStyle" to="/save">Save</Link>
        </div>
    )
}
export default Navbar