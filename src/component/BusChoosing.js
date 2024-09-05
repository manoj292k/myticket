import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Buslist from '../data/buslist';
import { useAuth } from '../AuthContext'; // Import the Auth Context

function BusChoosing() {
  const navigate = useNavigate();
  const location = useLocation();
  const { boardingLocation, droppingLocation, journeyDate } = location.state || {};
 // Get authentication status from context

  const backpage = () => {
    navigate('/home');
  };
  const { isAuthenticated } = useAuth();

  const selectedBus = (bus) => {
    if (isAuthenticated) {
      navigate('/bus-seats', { state: { bus, boardingLocation, droppingLocation, journeyDate } });
    } else {
      navigate('/login'); // Redirect to login page if not authenticated
    }
  };

  return (
    <div className="w-full h-auto bg-gray-100">
      <div className="p-4 bg-white shadow-md">
        <p onClick={backpage} className="cursor-pointer text-2xl text-red-500 hover:underline">Back</p>
        <div className="text-xl font-semibold">
          <label className="text-red-600">From </label>
          <span className="font-bold text-gray-800">{boardingLocation}</span> →
          <label className="text-red-600">To </label>
          <span className="font-bold text-gray-800">{droppingLocation}</span>
        </div>
        <div className="text-lg text-gray-600">On <b>{journeyDate}</b></div>
      </div>
      <div className="flex flex-col md:flex-row">
        <aside className="w-full md:w-1/4 bg-gray-200 p-4 shadow-md md:shadow-none">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>
          <div className="flex flex-col gap-4">
            <p className="text-lg font-medium">Departure Time</p>
            <button className="px-4 py-2 bg-white border border-red-500 rounded-md hover:bg-red-100">6AM - 6PM</button>
            <button className="px-4 py-2 bg-white border border-red-500 rounded-md hover:bg-red-100">6PM - 6AM</button>
          </div>
        </aside>
        <main className="w-full md:w-3/4 p-4 ">
          <h2 className="text-2xl font-semibold mb-4">Buses from {boardingLocation} to {droppingLocation}</h2>
          <table className="w-full bg-white shadow-md border border-gray-200 rounded-md mb-4 hidden md:inline">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="py-2 px-6 text-left">Bus Name</th>
                <th className="py-2 px-6 text-left">Bus Type</th>
                <th className="py-2 px-6 text-left">Departure</th>
                <th className="py-2 px-6 text-left">Arrival</th>
                <th className="py-2 px-6 text-left">Available Seats</th>
                <th className="py-2 px-6 text-left">Price</th>
                <th className="py-2 px-6 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {Buslist.map((bus, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-6">{bus.name}</td>
                  <td className="py-2 px-6">{bus.type}</td>
                  <td className="py-2 px-6">{bus.pickup}</td>
                  <td className="py-2 px-6">{bus.drop}</td>
                  <td className="py-2 px-6">{bus.seatCapacity}</td>
                  <td className="py-2 px-6">{bus.price}</td>
                  <td className="py-2 px-6">
                    <button onClick={() => selectedBus(bus)} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Book</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="block md:hidden">
            {Buslist.map((bus, index) => (
              <div key={index} className="border border-gray-300 rounded-md p-4 mb-4 bg-white shadow-md">
                <div className="flex justify-between mb-2">
                  <h2 className="text-lg font-semibold">{bus.name}</h2>
                  <p className="text-red-500 font-bold">Starts @{bus.price}</p>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{bus.type}</span>
                  <span>{bus.pickup} - {bus.drop}</span>
                </div>
                <p className="mb-2">{bus.seatCapacity} Available</p>
                <button onClick={() => selectedBus(bus)} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Book</button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default BusChoosing;
