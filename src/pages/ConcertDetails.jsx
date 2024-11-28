import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import concerts from "../data/songs.json";

const ConcertDetails = () => {
    const { date } = useParams();
    const navigate = useNavigate();
    const concert = concerts.concerts.find(c => c.date === date);

    if (!concert) return <p>Concert not found!</p>
    
    return (
        <div className="song-list">
            <h3>{concert.venue} - {concert.date}</h3>
            <h4>Part 1</h4>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Tempo</th>
                    </tr>
                </thead>
                <tbody>
                    {concert.songs.part1.map((song, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{song.title}</td>
                            <td>{song.tempo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {concert.songs.part2 && concert.songs.part2.length > 0 && (
                <>
                    <h4>Part 2</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Tempo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {concert.songs.part2.map((song, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{song.title}</td>
                                    <td>{song.tempo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
            <div className="button-container">
                <button className="back-button" onClick={() => navigate(-1)}>Back</button>
            </div>             
        </div>
    )
}

export default ConcertDetails;