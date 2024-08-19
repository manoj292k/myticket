import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Buslist from '../data/buslist';

function BusChoosing() {
    const navigate = useNavigate();
    const location = useLocation();
    const { boardingLocation, droppingLocation, journeyDate } = location.state || {};

    const backpage = () => {
        navigate('/myticket');
    };

    const selectedBus = (bus) => {
        navigate('/bus-seats', { state: { bus, boardingLocation, droppingLocation, journeyDate } });
    };

    return (
        <div className="w-full h-auto">
                <div className='p-3'>
                    <p onClick={backpage} className='pointer text-3xl'>Back / </p>
                    <label className="text-red-500 text-3xl">From </label><span className='text-3xl' id="boarding"> {boardingLocation}</span> →
                    <label className="text-red-500 text-3xl">To </label><span className='text-3xl' id="droping"> {droppingLocation}</span>
                </div>
                <div className='w-full flex'>
                    <div className='w-56 h-screen bg-gray-200 filterContainer'>
                        <h2>Filters</h2>
                        <div className='w-full flex flex-col justify-center p-4 gap-4 '>
                            <p className='text-lg'>Departure Time</p>
                            <div className='w-max px-6 py-4 border-2 bg-white rounded-md border-red-500'>6AM - 6PM</div>
                            <div className='w-max px-6 py-4 border-2 bg-white rounded-md border-red-500'>6PM - 6AM</div>
                        </div>
                    </div>
                    <div className='w-full p-3 flex gap-3 flex-col border-2 '>
                        <h2>Buses via {boardingLocation} to {droppingLocation} / <span> On -<b> {journeyDate}</b></span></h2>
                        <table className=' w-full flex flex-col gap-3 desktop_ver'>
                            <thead className='thContainer '>
                                <tr className=''>
                                    <th>Bus Name</th>
                                    <th>Bus Type</th>
                                    <th>Departure</th>
                                    <th>Arrival</th>
                                    <th>Available Seats</th>
                                    <th>Price</th>
                                    <th className=''> </th>
                                </tr>
                            </thead>
                            <tbody className='flex flex-col gap-3' >
                                {Buslist.map((bus, index) => (
                                    <tr className='busContainer' key={index} value={bus.name}>
                                        <td>{bus.name}</td>
                                        <td>{bus.type}</td>
                                        <td>{bus.pickup}</td>
                                        <td>{bus.drop}</td>
                                        <td>{bus.seatCapacity}</td>
                                        <td>{bus.price}</td>
                                        <td>
                                            <button onClick={() => selectedBus(bus)} className='bg-red-500 px-7 py-0 rounded-md text-white'>Book</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className='w-full h-auto flex flex-col mob_version'>
                            {Buslist.map((bus, index) => (
                                <div className='' key={index} value={bus.name}>
                                    <div className='border-x border-y border-black rounded-md p-4'>
                                        <div className='flex justify-between'> <h2><b>{bus.name}</b> <span className='px-4'>{bus.ratings}/5 <box-icon name='star' color='#ffdd0c' ></box-icon></span></h2> <p>Starts @{bus.price}</p></div>

                                        <div className='flex justify-between'>{bus.type} <span>{bus.pickup}-{bus.drop} </span>   <button onClick={() => selectedBus(bus)} className='bg-red-500 px-7 py-0 rounded-md text-white'>Book</button>
                                        </div>
                                        <p>{bus.seatCapacity} Available</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default BusChoosing;
