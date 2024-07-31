import React, { useState } from 'react';
import BusData from '../data/data'; // Adjust the path if needed
import { useNavigate } from 'react-router-dom';

function Home() {
    const [boardingLocation, setBoardingLocation] = useState('');
    const [dropingLocation, setDropingLocation] = useState('');
    const navigate = useNavigate();

    const searchBus = () => {
        if (!boardingLocation) {
            alert("Enter the Boarding Location");

        } else if (!dropingLocation) {
            alert("Enter the Droping Location");
        } else {
            navigate('/bus-choosing', { state: { boardingLocation, dropingLocation } });
        }
    };
    

    return (
        <div className='w-full'>
            <form className="homeBg flex-col justify-around">
                <h1 className='text-6xl text-white text-center'>Tamilnadu's No. 1 Omni Bus</h1>
                
                <div className='bg-slate-200 w-auto'>
                    
                    <label>Find your  route</label>
                    <label>Boarding location</label>
                    <select onChange={(e) => setBoardingLocation(e.target.value)} required id='location1'>
                        {BusData.map((location, index) => (
                            <option key={index} value={location}>{location}</option>
                        ))}
                    </select>
                    <label>Drop location</label>
                    <select required onChange={(e) => setDropingLocation(e.target.value)} >
                        {BusData.map((location, index) => (
                            <option key={index} value={location}>{location}</option>
                        ))}
                    </select>
                    <label>Date of  Journey</label>
                    <input type='date' />
                    <button type='submit' onClick={searchBus}>Search</button>
                </div>
                <p id= "errortxt">Enter the Boarding location or drop location</p>
                
            </form>
            <div className='w-full h-auto flex justify-around container2'>
            <h1 className='text-center text-red-500 text-5xl'>Our Routes</h1>
                <div className='mapImg w-1/2'>
                 
                </div>
                <div className='w-1/2 overflow-hidden'>
                    <p className='text-gray-600 text-3xl'>We provide bus facilities for various routes that includes more than 20 Corporate Cities</p>
                    {BusData.map((location, index) => (
                        <li key={index} className='relative left-1/3 w-auto'>Chennai <span><box-icon name='left-arrow-alt'></box-icon><box-icon name='right-arrow-alt' ></box-icon> </span> {location}</li>
                    ))}
                </div>
            </div>
            <div className='w-full flex justify-around container3'>
                <div className='w-1/2 p-10 align-middle'>
                    <h1 className='text-5xl text-indigo-800 text-center p-7'>About us</h1>
                    <p className='text-center'>MJ TRAVELS with its head office situated in Chennai, provides bus services between various locations across Tamilnadu. We are working to extend our services to various other states in near future. We are operating fully Premium AC Sleeper Buses. We also provide tour services for different states. This is available with pre booking basis. <br /><br />
                        Highly secured and providing simpler and smarter way of bus booking with a wide range of facilities, right from choosing your pickup point to your preferred choice of seat based on your convenience.
                    </p>
                </div>
                <div className='cartoonImg'> </div>
            </div>
            <div className='w-full bg-red-500'>
                <h1 className='text-6xl text-fuchsia-50 text-center p-10'>Core Features</h1>
                <h3 className='text-3xl text-black text-center p-5'>Find Travel Perfection</h3>
                <p className='text-2xl text-fuchsia-50 text-center'>We offer the stylish features to make our passenger's trip more affable.</p>
                <div className='w-full h-auto flex justify-around p-10 features'>
                    <div className='w-36 py-20 px-4 bg-slate-50 text-center rounded-xl'>Online Booking</div>
                    <div className='w-36 py-20 px-4 bg-slate-50 text-center rounded-xl'>Accept All Cards</div>
                    <div className='w-36 py-20 px-4 bg-slate-50 text-center rounded-xl'>Customer Care Service</div>
                    <div className='w-36 py-20 px-4 bg-slate-50 text-center rounded-xl'>Live Tracking</div>
                    <div className='w-36 py-20 px-4 bg-slate-50 text-center rounded-xl'>Hygienic Coach</div>
                </div>
            </div>
        </div>
    );
}

export default Home;
