import React from 'react';
import { useLocation} from 'react-router-dom';
import Buslist from '../data/buslist';

import { useNavigate } from 'react-router-dom';

function BusChoosing() {
    const navigate = useNavigate();
    const location = useLocation();
    const { boardingLocation, dropingLocation } = location.state || { boardingLocation: "Location", dropingLocation: "Location" };

    const backpage = () => {
        navigate('/');
    };
    const selectedBus = (bus) => {
        navigate('/busseates', { state: { bus, boardingLocation, dropingLocation } });
    };
    return (
        <>
            <div className="w-full h-auto">
                <div className='p-3'>
                <p onClick={backpage} className='pointer text-3xl'>Back / </p>
                    <label className="text-red-500 text-3xl">From </label><span className='text-3xl' id="boarding"> {boardingLocation}</span> →
                    <label className="text-red-500 text-3xl">To </label><span className='text-3xl' id="droping"> {dropingLocation}</span>
                </div>
                <div className='w-full flex'>
                    <div className='w-56 h-screen bg-gray-200 filterContainer'>
                        <h2>Filters</h2>
                        <div className='w-full flex flex-col justify-center p-4 gap-4 '>
                            <p className='text-lg'>departure Time</p>
                            <div className='w-max px-6 py-4 border-2 bg-white rounded-md border-red-500'> 6AM - 6PM </div>
                            <div className='w-max px-6 py-4 border-2 bg-white rounded-md border-red-500'> 6PM - 6AM </div>
                        </div>
                    </div>
                    <div className='w-full p-3 flex gap-3 flex-col border-2 '>
                        <h2>Buses via {boardingLocation} to {dropingLocation}</h2>
                        {Buslist.map((bus, index) => (
                                <div className='buslist p-5 border-2 flex justify-around busContainer' key={index} value={bus.name}>
                               
                                <div className='max-w-40 busname'>{bus.name} {bus.type}</div>
                                <div className='w-36  flex  gap-4'>
                                <div className='route'> pickup  {bus.pickup} <br/> {boardingLocation} </div>
                                →
                                <div> Drop  {bus.drop}<br/> {dropingLocation} </div>
                                </div>
                                
                                <div>No of seates {bus.seatCapacity}</div>
                                <div> price start @ {bus.price}</div>
                                <button onClick={() => selectedBus(bus)} className='bg-red-500 px-7 py-0 rounded-md text-white'>Book</button>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default BusChoosing;
