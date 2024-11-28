import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
    return (
        <div className="home">
            <button className="home-button">
                <Link to="/songs">List of songs</Link>
            </button>
            <button className="home-button">
                <Link to="/concerts">Tracklists</Link>
            </button>
        </div>
    )
}

export default Home;