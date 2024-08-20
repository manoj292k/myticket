import React from 'react';

function Header() {
    return (
        <>
            <div className="w-full bg-rose-500 hidden md:block">
                <div className="flex flex-col md:flex-row justify-between items-center p-4 text-white">
                    <a href="#" className="mb-2 md:mb-0 text-sm md:text-base">mjtravelsinfo@mjt.com</a>
                    <h1 className="text-2xl md:text-4xl font-bold">MJ Travels</h1>
                    <a href="#" className="mt-2 md:mt-0 text-sm md:text-base">9998877665</a>
                </div>
            </div>
            <div className="w-full bg-white flex justify-center border-b border-gray-200 ">
                <ul className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-8 p-3 text-sm md:text-base">
                    <li><a className="hover:text-rose-500 transition-colors duration-200" href="/">Home</a></li>
                    <li><a className="hover:text-rose-500 transition-colors duration-200" href="#">My Booking</a></li>
                    <li><a className="hover:text-rose-500 transition-colors duration-200" href="#">Cancel & Refund</a></li>
                    <li><a className="hover:text-rose-500 transition-colors duration-200" href="#">Help</a></li>
                    <li><a className="hover:text-rose-500 transition-colors duration-200" href="#">Contact Us</a></li>
                </ul>
            </div>
        </>
    );
}

export default Header;
