import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext'; // Adjust the path as needed

const BookingHistory = () => {
    const { userEmail } = useAuth(); // Get the current logged-in user's email from AuthContext
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchBookingHistory = async () => {
            try {
                const response = await axios.get(`https://66d5ca01f5859a7042677b7b.mockapi.io/api/v1/bookingdata?userEmail=${userEmail}`);
                setBookings(response.data);
            } catch (err) {
                setError('Failed to fetch booking history.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        if (userEmail) {
            fetchBookingHistory();
        } else {
            setError('User email is required.');
            setLoading(false);
        }
    }, [userEmail]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-4">Booking History</h1>
            {bookings.length > 0 ? (
                <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-md">
                    <thead>
                        <tr className="border-b border-gray-200">
                            <th className="p-3 text-left">Bus Name</th>
                            <th className="p-3 text-left">Journey Date</th>
                            <th className="p-3 text-left">Amount</th>
                            <th className="p-3 text-left">Seats</th>
                            <th className="p-3 text-left">Boarding Location</th>
                            <th className="p-3 text-left">Dropping Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking, index) => (
                            <tr key={index} className="border-b border-gray-200">
                                <td className="p-3">{booking.busName}</td>
                                <td className="p-3">{booking.journeyDate}</td>
                                <td className="p-3">₹{booking.amount}</td>
                                <td className="p-3">
                                    {booking.passengerDetails.map(detail => `Seat ${detail.seatNumber}: ${detail.name}`).join(', ')}
                                </td>
                                <td className="p-3">{booking.boardingLocation}</td>
                                <td className="p-3">{booking.droppingLocation}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No bookings found.</p>
            )}
        </div>
    );
};

export default BookingHistory;
