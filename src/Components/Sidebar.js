import React from "react";
import './Sidebar.css'
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar">
                <ul className="side-list">
                    <li><Link to="/" className="link">Home</Link></li>
                    <li><Link to="/Cities" className="link" >Cities</Link></li>


                </ul>
        </div>
    )

}
export default Sidebar