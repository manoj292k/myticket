import React, { useState } from 'react';
import BusData from '../data/data';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [boardingLocation, setBoardingLocation] = useState('');
    const [droppingLocation, setDroppingLocation] = useState('');
    const [journeyDate, setJourneyDate] = useState('');
    const navigate = useNavigate();

    const searchBus = () => {
        if (!boardingLocation || !droppingLocation || !journeyDate) {
            alert("Please fill in all the fields");
            return;
        }
        navigate('/bus-choosing', { state: { boardingLocation, droppingLocation, journeyDate } });
    };

    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-100 homeBg">
                <div className="bg-white bg-opacity-60 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 w-full max-w-4xl">
                    <div className="flex flex-col md:flex-row items-center w-full space-y-6 md:space-y-0 md:space-x-4">
                        <div className="flex flex-col items-center w-full md:w-auto">
                            <label className="block text-sm text-gray-600">From</label>
                            <select
                                onChange={(e) => setBoardingLocation(e.target.value)}
                                className="text-lg font-medium text-gray-900 w-[80%] md:w-52 px-6 py-3 rounded-full border-[1px] bg-opacity-60"
                            >

                                {BusData.map((location, index) => (
                                    <option key={index} value={location}>{location}</option>
                                ))}
                            </select>
                        </div>

                        <div className="flex items-center mx-4">
                            <span className="text-gray-400">⇄</span>
                        </div>

                        <div className="flex flex-col items-center w-full md:w-auto">
                            <label className="block text-sm text-gray-600">To</label>
                            <select
                                onChange={(e) => setDroppingLocation(e.target.value)}
                                className="text-lg font-medium text-gray-900 w-[80%] md:w-52  px-6 py-3 rounded-full border-[1px] bg-opacity-60"
                            >

                                {BusData.map((location, index) => (
                                    <option key={index} value={location}>{location}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col items-center w-full md:w-auto">
                        <label className="block text-sm text-gray-600">Date</label>
                        <input
                            type="date"
                            onChange={(e) => setJourneyDate(e.target.value)}
                            className="text-lg font-medium text-gray-900 w-full md:w-52  px-6 py-3 rounded-full border-[1px] bg-opacity-60"
                        />
                    </div>

                    <button
                        onClick={searchBus}
                        className="w-full md:w-auto bg-rose-500 text-white px-6 py-3 rounded-full text-lg font-bold hover:bg-rose-600 transition duration-200"
                    >
                        SEARCH BUSES
                    </button>
                </div>
            </div>
            <section>
                <h1 className="text-4xl md:text-5xl text-red-500 font-bold text-center">Our Routes</h1>
                <p className="text-xl md:text-2xl text-gray-600  text-center">We provide bus facilities for various routes that include more than 20 Corporate Cities.</p>
                <div className="w-full h-[60vh] md:h-[80vh] flex flex-col items-center justify-center bg-gray-50 border-2">
                    <div className='bg-indigo-200 flex flex-col h-auto'>
                    </div>
                    <div className="relative flex justify-center items-center">
                        {/* Center - Chennai */}
                        <div className="absolute flex items-center justify-center w-40 h-40 bg-red-500 text-white rounded-full text-center">
                            <p className="text-lg font-bold">Chennai</p>
                        </div>

                        {/* Other Locations - Orbiting Chennai */}
                        {BusData.map((location, index) => (
                            <div
                                key={index}
                                className="absolute w-24 h-24 bg-red-500 text-white rounded-full flex items-center justify-center"
                                style={{
                                    transform: `rotate(${index * (360 / BusData.length)}deg) translate(150px) rotate(-${index * (360 / BusData.length)}deg)`
                                }}
                            >
                                <p className="text-sm font-medium">{location}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
            <div className='w-full flex flex-col items-center py-16 bg-white'>
                <div className='w-full max-w-4xl text-center'>
                    <h1 className='text-4xl md:text-5xl text-indigo-800 font-bold mb-8'>About Us</h1>
                    <p className='text-lg md:text-xl text-gray-700 leading-relaxed p-3'>
                        MJ TRAVELS, headquartered in Chennai, provides bus services across Tamilnadu. We are expanding our services to other states soon, with premium AC Sleeper Buses. Our tour services are also available on a pre-booking basis. Our buses offer a safe, smart, and convenient way to travel, with features like live GPS tracking and hygienic coaches.
                    </p>
                </div>
            </div>

            <div className='w-full bg-red-500 py-16'>
                <div className='w-full max-w-6xl mx-auto'>
                    <h1 className='text-5xl text-white text-center font-bold mb-10'>Core Features</h1>
                    <div className='w-full flex flex-wrap justify-around items-center'>
                        <div className='w-36 h-40 p-6 bg-white text-center rounded-lg shadow-lg mb-6'>
                            <div><box-icon type='solid' name='coupon' className='text-red-500'></box-icon></div>
                            <span className='block mt-4 text-lg font-semibold'>Online Booking</span>
                        </div>
                        <div className='w-36 h-40 p-6 bg-white text-center rounded-lg shadow-lg mb-6'>
                            <div><box-icon name='credit-card' className='text-red-500'></box-icon></div>
                            <span className='block mt-4 text-lg font-semibold'>Accept All Cards</span>
                        </div>
                        <div className='w-36 h-40 p-6 bg-white text-center rounded-lg shadow-lg mb-6'>
                            <div><box-icon name='phone-call' className='text-red-500'></box-icon></div>
                            <span className='block mt-4 text-lg font-semibold'>Customer Care Service</span>
                        </div>
                        <div className='w-36 h-40 p-6 bg-white text-center rounded-lg shadow-lg mb-6'>
                            <div><box-icon name='location-plus' className='text-red-500'></box-icon></div>
                            <span className='block mt-4 text-lg font-semibold'>Live Tracking GPS</span>
                        </div>
                        <div className='w-36 h-40 p-6 bg-white text-center rounded-lg shadow-lg mb-6'>
                            <div><box-icon name='health' className='text-red-500'></box-icon></div>
                            <span className='block mt-4 text-lg font-semibold'>Hygienic Coach</span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Home;
