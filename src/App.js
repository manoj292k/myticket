import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './component/home';
import BusChoosing from "./component/BusChoosing";
import Busseates from './component/Busseats';

function App() {
  return (
    <BrowserRouter>
      <div className=''>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
         
          <Route path="/bus-choosing" element={<BusChoosing />} />
          <Route path="/busseates" element={<Busseates />} />
          {/*
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
