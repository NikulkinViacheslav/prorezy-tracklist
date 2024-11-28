import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import SongList from './pages/SongList';
import Home from './pages/Home';
import ConcertList from './pages/ConcertList';
import ConcertDetails from './pages/ConcertDetails';
import './styles/Header.css';
import logo from './assets/prorezy-logo.jpg'

const App = () => {    
    return (
        <Router>
            <header className='header'>
                <img src={logo} alt="Band Logo" className="logo" />
                <h1>Prorezy</h1>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/songs" element={<SongList />} />
                <Route path="/concerts" element={<ConcertList />} />
                <Route path="/concerts/:date" element={<ConcertDetails />} />
            </Routes>
            <footer className="footer">
                <p>Nikuloid © 2024</p>
            </footer>
        </Router>
    )
}

export default App;