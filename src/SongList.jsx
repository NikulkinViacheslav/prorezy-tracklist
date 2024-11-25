import React from "react";
import songs from './data/songs.json';
import "./styles/SongList.css";

const SongList = () => {
    return (
        <div className="song-list">
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Tempo</th>
                    </tr>
                </thead>
                <tbody>
                    {songs.map((song, index) => (
                        <tr key={index}>
                            <td>{song.title}</td>
                            <td>{song.tempo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default SongList;