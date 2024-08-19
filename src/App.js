import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header'; // Ensure this path is correct
import Footer from './component/Footer'; // Ensure this path is correct
import Home from './component/HomeComponent'; // Ensure this path is correct
import BusChoosing from './component/BusChoosing'; // Ensure this path is correct
import BusSeats from './component/BusSeat'; // Ensure this path is correct
import Passenger from './component/Passenger'; // Ensure this path is correct

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/MyTicket" element={<Home />} />
                <Route path="/bus-choosing" element={<BusChoosing />} />
                <Route path="/bus-seats" element={<BusSeats />} />
                <Route path="/passenger" element={<Passenger />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
