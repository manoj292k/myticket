import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BusSeats = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    const { bus, boardingLocation, droppingLocation, journeyDate } = location.state || {};

    const [selectedSeats, setSelectedSeats] = useState([]);

    const selectSeat = (seatLabel) => {
        setSelectedSeats((prev) =>
            prev.includes(seatLabel)
                ? prev.filter((seat) => seat !== seatLabel)
                : [...prev, seatLabel]
        );
    };

    const bookSeats = () => {
        try {
            if (selectedSeats.length > 0) {
                navigate('/passenger', { state: { bus, selectedSeats, journeyDate, boardingLocation, droppingLocation } });
            } else {
                alert("Please select at least one seat.");
            }
         } catch (error) {
            console.error("Booking failed", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div className="p-6 bg-slate-300 min-h-screen">
            <h6 className="text-xl mb-4">
                <span onClick={() => navigate('/myticket')} className="cursor-pointer text-blue-500 hover:underline">Home</span>
                <span className="mx-2">/</span>
                <span onClick={() => navigate('/bus-choosing')} className="cursor-pointer text-blue-500 hover:underline">Bus Selection</span>
            </h6>
            <hr className="mb-4" />
            <div className="flex flex-col w-full bg-white p-4 rounded-lg shadow-lg">
                <div className="flex justify-between mb-4">
                    {bus ? (
                        <div>
                            <h2 className="text-2xl font-bold">Bus Name: {bus.name}</h2>
                            <p className="text-lg">Type: {bus.type}</p>
                            <p className="text-lg">From: {boardingLocation}</p>
                            <p className="text-lg">To: {droppingLocation}</p>
                            <p className='text-lg'>Date: {journeyDate}</p>
                        </div>
                    ) : (
                        <p>No bus selected.</p>
                    )}
                </div>
                <div className=' mobileVersion'>
                    <div className="flex flex-col lg:flex-row justify-around mb-4 w-auto:w-[60vh] h-auto:h-[60vh] ">
                        <div className="bg-gray-200  rounded-lg transform lg:rotate-0 rotate-90 w-full lg:w-auto h-auto:h-[50vh]">
                            <div className="flex flex-wrap gap-2 border-[1px] border-black p-3">
                                <div className='w-full flex justify-evenly gap-4:gap-4'>
                                    {bus.rightWindow.map((rw, index) => (
                                        <button
                                            key={`R${rw}W-${index}`}
                                            className={`border-[1px] w-10 h-10 lg:w-12 lg:h-12 border-black ${selectedSeats.includes(`R${rw}W`) ? 'bg-green-400' : 'bg-gray-200'}`}
                                            onClick={() => selectSeat(`R${rw}W`)}
                                        >
                                            R{rw}
                                        </button>
                                    ))}
                                </div>
                                <div className='w-full flex justify-evenly'>
                                    {bus.right.map((r, index) => (
                                        <button
                                            key={`R${r}-${index}`}
                                            className={`border-[1px] w-10 h-10 lg:w-12 lg:h-12 border-black ${selectedSeats.includes(`R${r}`) ? 'bg-green-400' : 'bg-gray-200'}`}
                                            onClick={() => selectSeat(`R${r}`)}
                                        >
                                            R{r}
                                        </button>
                                    ))}
                                </div>
                                <div className='w-full flex justify-end'>
                                    <button
                                        className={`w-10 h-10 lg:w-12 lg:h-12 border-[1px] border-black ${selectedSeats.includes(bus.middle) ? 'bg-green-400' : 'bg-gray-200'}`}
                                        onClick={() => selectSeat(bus.middle)}
                                    >
                                        {bus.middle}
                                    </button>
                                </div>
                                <div className='w-full flex justify-evenly'>
                                    {bus.left.map((l, index) => (
                                        <button
                                            key={`L${l}-${index}`}
                                            className={`border-[1px] w-10 h-10 lg:w-12 lg:h-12 border-black ${selectedSeats.includes(`L${l}`) ? 'bg-green-400' : 'bg-gray-200'}`}
                                            onClick={() => selectSeat(`L${l}`)}
                                        >
                                            L{l}
                                        </button>
                                    ))}
                                </div>
                                <div className='w-full flex justify-evenly'>
                                    {bus.leftWindow.map((lw, index) => (
                                        <button
                                            key={`L${lw}W-${index}`}
                                            className={`border-[1px] w-10 h-10 lg:w-12 lg:h-12 border-black ${selectedSeats.includes(`L${lw}W`) ? 'bg-green-400' : 'bg-gray-200'}`}
                                            onClick={() => selectSeat(`L${lw}W`)}
                                        >
                                            L{lw}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>





                        <div className="w-full lg:w-1/4 mt-4 lg:mt-0 ml-4">
                            <ul className="list-disc pl-4">
                                <li className="mb-2"><button className="bg-gray-400 w-8 h-8 rounded-full text-transparent">o</button> - Already booked</li>
                                <li className="mb-2"><button className="bg-green-400 w-8 h-8 rounded-full text-transparent">o</button> - Selected Seat</li>
                                <li><button className="bg-gray-200 w-8 h-8 rounded-full text-transparent">o</button> - Available seats</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="selected-seats p-4 bg-white rounded-lg shadow-md mt-4">
                    <h3 className="text-xl mb-2">Selected Seats:</h3>
                    {selectedSeats.length > 0 ? (
                        <ul className="list-disc pl-4">
                            {selectedSeats.map((seat, index) => (
                                <li key={`selected-${index}`}>{seat}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No seats selected.</p>
                    )}
                    <button
                        className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                        onClick={bookSeats}
                    >
                        Book
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BusSeats;

