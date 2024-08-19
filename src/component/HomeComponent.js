import React, { useState } from 'react';
import BusData from '../data/data';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [boardingLocation, setBoardingLocation] = useState('');
    const [droppingLocation, setDroppingLocation] = useState('');
    const [journeyDate, setJourneyDate] = useState('');
    const navigate = useNavigate();

    const searchBus = () => {
        try {
            if (!boardingLocation || !droppingLocation || !journeyDate) {
                alert("Please fill in all the fields");
                return;
            }
            navigate('/bus-choosing', { state: { boardingLocation, droppingLocation, journeyDate } });
        } catch (error) {
            console.error("Navigation failed", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div className='w-full'>
            <form className="homeBg flex-col justify-around">
                <h1 className='text-6xl text-white text-center'>Tamilnadu's No. 1 Omni Bus</h1>
                <div className='bg-slate-200 w-auto'>
                    <label>Find your route</label>
                    <label>Boarding location</label>
                    <select onChange={(e) => setBoardingLocation(e.target.value)} required id='location1'>
                        <option value="">Select a location</option>
                        {BusData.map((location, index) => (
                            <option key={index} value={location}>{location}</option>
                        ))}
                    </select>
                    <label>Dropping location</label>
                    <select required onChange={(e) => setDroppingLocation(e.target.value)}>
                        <option value="">Select a location</option>
                        {BusData.map((location, index) => (
                            <option key={index} value={location}>{location}</option>
                        ))}
                    </select>
                    <label>Date of Journey</label>
                    <input type='date' required onChange={(e) => setJourneyDate(e.target.value)} id="dateOfJourney"/>
                    <button type='button' onClick={searchBus}>Search</button>
                </div>
            </form>
            <div className='w-full h-auto flex justify-around container2'>
                <h1 className='text-center text-red-500 text-5xl'>Our Routes</h1>
                <p className='text-gray-600 text-3xl p-3'>We provide bus facilities for various routes that includes more than 20 Corporate Cities</p>

                <div className='mapImg w-1/2'>
                    {/* Your map image or content here */}
                </div>

                <div className='w-1/2'>
                    <table className='will-change-auto align-middle'>
                        <tbody>
                            {BusData.map((location, index) => (
                                <tr key={index} className='bg-red-500'>
                                    <td className='w-24'>Chennai</td>
                                    <td className='w-24'><box-icon name='left-arrow-alt'></box-icon><box-icon name='right-arrow-alt'></box-icon></td>
                                    <td className='w-36'>{location}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='w-full flex justify-around container3'>
                <div className='w-1/2 p-10 align-middle'>
                    <h1 className='text-5xl text-indigo-800 text-center p-7'>About us</h1>
                    <p className='text-center'>
                        MJ TRAVELS with its head office situated in Chennai, provides bus services between various locations across Tamilnadu. We are working to extend our services to various other states in near future. We are operating fully Premium AC Sleeper Buses. We also provide tour services for different states. This is available on a pre-booking basis. <br /><br />
                        Highly secured and providing simpler and smarter way of bus booking with a wide range of facilities, right from choosing your pickup point to your preferred choice of seat based on your convenience.
                    </p>
                </div>
                <div className='cartoonImg'> {/* Your cartoon image or content here */} </div>
            </div>

            <div className='w-full bg-red-500'>
                <h1 className='text-6xl text-fuchsia-50 text-center p-10'>Core Features</h1>
                <h3 className='text-3xl text-black text-center p-5'>Find Travel Perfection</h3>
                <p className='text-2xl text-fuchsia-50 text-center'>We offer the stylish features to make our passenger's trip more affable.</p>
                <div className='w-full h-auto flex justify-around p-11 features'>
                    <div className='w-36 h-40 p-10 bg-slate-50 text-center rounded-xl'><div><box-icon type='solid' name='coupon'></box-icon></div> Online Booking</div>
                    <div className='w-36 h-40 p-10 bg-slate-50 text-center rounded-xl'><div><box-icon name='credit-card'></box-icon></div> Accept All Cards</div>
                    <div className='w-36 h-40 p-10 bg-slate-50 text-center rounded-xl'><div><box-icon name='phone-call'></box-icon></div> Customer Care Service</div>
                    <div className='w-36 h-40 p-10 bg-slate-50 text-center rounded-xl'><div><box-icon name='location-plus'></box-icon></div> Live Tracking GPS</div>
                    <div className='w-36 h-40 p-10 bg-slate-50 text-center rounded-xl'><div><box-icon name='health'></box-icon></div> Hygienic Coach</div>
                </div>
            </div>
        </div>
    );
}

export default Home;
