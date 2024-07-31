import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const Busseates = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { bus, boardingLocation, dropingLocation } = location.state || {};
    // const [selectedSeats, setSelectedSeats] = useState([]);

    const backpage1 = () => {
        navigate('/myticket');
    };

    const BackToBus = () => {
        navigate('/bus-choosing');
    };

    // const handleSeatSelection = (seat) => {
    //     if (selectedSeats.includes(seat)) {
    //         setSelectedSeats(selectedSeats.filter(s => s !== seat));
    //     } else {
    //         setSelectedSeats([...selectedSeats, seat]);
    //     }
    // };

    // const isSeatSelected = (seat) => selectedSeats.includes(seat);

    return (
        <>
            <h6>
                <span onClick={backpage1} className='pointer text-3xl'>Home / </span>
                <span onClick={BackToBus} className='pointer text-3xl'>Bus Selection / </span>
            </h6>
            <hr />
            <div className='detailsContainer'>
                <div className='h-screen bg-slate-300 flex justify-around seatdetials'>
                    {bus ? (
                        <div>
                            <h2>Bus Name: {bus.name}</h2>
                            <p>Type: {bus.type}</p>
                            <p>From: {boardingLocation}</p>
                            <p>To: {dropingLocation}</p>
                        </div>
                    ) : (
                        <p>No bus selected.</p>
                    )}
                
                <div className='seaterContainer flex justify-around '>
                    <h1 className='text-center text-2xl '>Select your seat from {bus.name}</h1>
                    <div className='w-60 h-70 flex justify-around bg-slate-500 align-middle py-5'>
                    <div className='flex-col h-full flex justify-around gap-3'>
                        {bus.leftWindow.map((lw,index)=>(
                            <button className='bg-gray-50 py-0 border-2 w-8 h-8 text-sm' key={`rw-${index}`}>L{lw}W</button> 
                        ))}
                        </div>
                        <div className='flex-col h-full flex justify-around gap-3'>
                         {bus.left.map((l,index)=>(
                            <button className='bg-gray-50 py-0 border-2 w-8 h-8 text-sm' key={`rw-${index}`}>L{l}</button>
                        ))}
                        </div>
                        <div className='flex-col h-full flex justify-around gap-3 '>
                         {bus.right.map((r,index)=>(
                            <button className='bg-gray-50 py-0 border-2 w-8 h-8 text-sm ' key={`rw-${index}`}>R{r}</button>
                        ))}
                        </div>
                        <div className='flex-col h-full flex justify-around gap-3'>
                        
                         {bus.rightWindow.map((rw,index)=>(
                            <button className='bg-gray-50 py-0 border-2 w-8 h-8 text-sm' key={`rw-${index}`}>R{rw}W</button>
                        ))}
                        </div>
                    </div>
                                   </div>
                </div>
            </div>
        </>
    );
};

export default Busseates;
