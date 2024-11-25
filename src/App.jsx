import React from 'react';
import SongList from './SongList';
import './styles/Header.css';
import logo from './assets/prorezy-logo.jpg'

const App = () => {
    return (
        <div>
            <header style={{ textAlign: 'center', margin: '20px 0', padding: '10px', fontSize: 'calc(16px + 2vw)' }}>
                <img
                    src={logo}
                    alt="Band Logo"
                    className="logo"
                />
                <h1 className="band-name">Prorezy songlist</h1>
            </header>
            <main>
                <SongList />
            </main>
        </div>
    )
}

export default App;