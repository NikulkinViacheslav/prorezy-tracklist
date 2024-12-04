import React from "react";
import { Link, useNavigate } from "react-router-dom";
import concerts from "../data/songs.json";

const ConcertList = () => {
    const navigate = useNavigate();
    const { concerts: concertList } = concerts;

    return (
        <div className="song-list">
            <h2>Concert track lists</h2>
            <table className="concert-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Venue</th>
                    </tr>
                </thead>
                <tbody>
                    {concertList.map((concert, index) => (
                        <tr 
                            key={index} 
                            onClick={() => navigate(`/concerts/${concert.date}`)} 
                            style={{ cursor: 'pointer' }}
                            className="concert-row"
                        >
                            <td>{concert.date}</td>
                            <td>{concert.venue}</td>                            
                        </tr>
                    ))}
                </tbody>
            </table>            
            <div className="button-container">
                <button className="back-button" onClick={() => navigate('/')}>Back</button>
            </div> 
        </div>
    )
}

export default ConcertList;