import React from "react";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home">
            <button className="home-button" onClick={() => navigate("/songs")}>
                List of songs
            </button>
            <button className="home-button" onClick={() => navigate("/concerts")}>
                Concert track lists
            </button>
        </div>
    )
}

export default Home;