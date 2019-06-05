import React from "react"
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar">
                <Link className="HomeStyle" to="/">Home</Link>
                <Link className="HomeStyle" to="/about">About</Link>
                <Link className="HomeStyle" to="/services">Services</Link>
                <Link className="HomeStyle" to="/products">Products</Link>
        </div>
    )
}
export default Navbar