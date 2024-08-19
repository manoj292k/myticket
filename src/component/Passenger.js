import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Passenger = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { bus, selectedSeats, journeyDate, boardingLocation, droppingLocation } = location.state || {};

    const [passengerDetails, setPassengerDetails] = useState(
        selectedSeats.map(() => ({ name: '', age: '', gender: 'Male' }))
    );
    const [totalPrice, setTotalPrice] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const handleInputChange = (index, field, value) => {
        setPassengerDetails((prev) => {
            const newDetails = [...prev];
            newDetails[index] = { ...newDetails[index], [field]: value };
            return newDetails;
        });
    };

    const handleBooking = () => {
        const allValid = passengerDetails.every((detail) => detail.name && detail.age);
        if (!allValid) {
            alert("Please provide name, age, and gender for each passenger.");
            return;
        }
        const pricePerSeat = bus?.price || 0;
        setTotalPrice(selectedSeats.length * pricePerSeat);
        setShowModal(true);
    };

    const confirmPayment = () => {
        alert("Payment successful!");
        setShowModal(false);
        navigate('/myticket');
    };

    return (
        <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-4">Passenger Details</h1>
            <h2 className="text-xl mb-4">Bus Name: {bus?.name} - {bus?.type} - {journeyDate}</h2>
            <div className="bg-white p-4 rounded-lg shadow-md">
                {selectedSeats.length > 0 ? (
                    <ul>
                        {selectedSeats.map((seat, index) => (
                            <li key={index} className="mb-4">
                                <div className="flex flex-col md:flex-row items-center gap-4 border-b pb-4">
                                    <span className="font-semibold w-36">Seat: {seat} </span>
                                    <div className="flex flex-col md:flex-row gap-4">
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            className="border p-2 rounded-md w-full md:w-64"
                                            value={passengerDetails[index]?.name || ''}
                                            onChange={(e) =>
                                                handleInputChange(index, 'name', e.target.value)
                                            }
                                        />
                                        <input
                                            type="number"
                                            placeholder="Age"
                                            className="border p-2 rounded-md w-full md:w-32"
                                            value={passengerDetails[index]?.age || ''}
                                            onChange={(e) =>
                                                handleInputChange(index, 'age', e.target.value)
                                            }
                                        />
                                        <select
                                            className="border p-2 rounded-md w-full md:w-32"
                                            value={passengerDetails[index]?.gender || 'Male'}
                                            onChange={(e) =>
                                                handleInputChange(index, 'gender', e.target.value)
                                            }
                                        >
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Others">Others</option>
                                        </select>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No seats selected.</p>
                )}
            </div>
            <center>
                <button
                    onClick={handleBooking}
                    className="mt-6 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
                >
                    Pay
                </button>
            </center>

            {/* Modal for Bill Summary */}
            {showModal && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
                        <h2 className="text-xl font-bold mb-4">Bill Summary</h2>
                        <p><strong>Bus Name:</strong> {bus?.name}</p>
                        <p><strong>Journey Date:</strong> {journeyDate}</p>
                        <p><strong>From:</strong> {boardingLocation}</p>
                        <p><strong>To:</strong> {droppingLocation}</p>
                        <ul className="mb-4">
                            {selectedSeats.map((seat, index) => (
                                <li key={index}>
                                    <strong>Seat {seat}:</strong> {passengerDetails[index].name}, Age: {passengerDetails[index].age}, Gender: {passengerDetails[index].gender}
                                </li>
                            ))}
                        </ul>
                        <p className="font-bold text-lg">Total Price: ₹{totalPrice}</p>
                        <button
                            onClick={confirmPayment}
                            className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition w-full"
                        >
                            Confirm Payment
                        </button>
                        <button
                            onClick={() => setShowModal(false)}
                            className="mt-2 bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition w-full"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Passenger;
