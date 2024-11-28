import React from "react";
import { useNavigate } from "react-router-dom";
import songs from '../data/songs.json';
import "../styles/SongList.css";

const SongList = () => {
    const navigate = useNavigate();
    const sortedSongs = [...songs.main].sort((a, b) => a.title.localeCompare(b.title));

    return (
        <div className="song-list">
            <h2>Full list of songs</h2>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Tempo</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedSongs.map((song, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{song.title}</td>
                            <td>{song.tempo}</td>
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

export default SongList;