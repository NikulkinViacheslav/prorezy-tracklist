import React from "react";
import { Link, useNavigate } from "react-router-dom";
import concerts from "../data/songs.json";

const ConcertList = () => {
    const navigate = useNavigate();
    const { concerts: concertList } = concerts;

    return (
        <div className="song-list">
            <h2>List of concerts</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Venue</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {concertList.map((concert, index) => (
                        <tr key={index}>
                            <td>{concert.date}</td>
                            <td>{concert.venue}</td>
                            <td>
                                <Link to={`/concerts/${concert.date}`}>Open</Link>
                            </td>
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