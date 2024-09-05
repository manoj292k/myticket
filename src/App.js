import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/HomeComponent';
import BusChoosing from './component/BusChoosing';
import { AuthProvider } from './AuthContext';
import BusSeats from './component/BusSeat';
import Passenger from './component/Passenger';
import Login from './component/Login';
import BookingHistory from './component/Bookinghistory';

function App() {
    return (
        <AuthProvider>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/bus-choosing" element={<BusChoosing />} />
                <Route path="/bus-seats" element={<BusSeats />} />
                <Route path="/passenger" element={<Passenger />} />
                <Route path="/booking-history" element={<BookingHistory/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
            <Footer />
        </Router>
        </AuthProvider>
    );
}

export default App;
