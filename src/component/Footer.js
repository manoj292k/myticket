import React from 'react';

function Footer() {
    return (
        <footer className='bg-gray-800 text-gray-200 p-4 '>
            <div className='container mx-auto flex flex-wrap justify-between items-center'>
                <div className='w-full md:w-1/3 mb-6 md:mb-0'>
                    <h2 className='text-2xl font-bold mb-4'>MJ Travels</h2>
                    <p>Providing premium bus services across Tamilnadu and beyond.</p>
                </div>
                <div className='w-full md:w-1/3 mb-6 md:mb-0'>
                    <h3 className='text-xl font-semibold mb-4'>Quick Links</h3>
                    <ul>
                        <li className='mb-2'><a href='/myticket' className='hover:text-red-400'>Home</a></li>
                        <li className='mb-2'><a href='/' className='hover:text-red-400'>My Booking</a></li>
                        <li className='mb-2'><a href='/' className='hover:text-red-400'>Cancel & Refund</a></li>
                        <li className='mb-2'><a href='/' className='hover:text-red-400'>Help</a></li>
                        <li className='mb-2'><a href='/' className='hover:text-red-400'>Contact Us</a></li>
                    </ul>
                </div>
                <div className='w-full md:w-1/3'>
                    <h3 className='text-xl font-semibold mb-4'>Contact Us</h3>
                    <p>Email: <a href='mailto:mjtravelsinfo@mjt.com' className='hover:text-red-400'>mjtravelsinfo@mjt.com</a></p>
                    <p>Phone: <a href='tel:9998877665' className='hover:text-red-400'>9998877665</a></p>
                    <div className='flex space-x-4 mt-4'>
                        <a href="#" className='text-gray-200 hover:text-red-400'><box-icon name='facebook' type='logo'></box-icon></a>
                        <a href="#" className='text-gray-200 hover:text-red-400'><box-icon name='twitter' type='logo'></box-icon></a>
                        <a href="#" className='text-gray-200 hover:text-red-400'><box-icon name='instagram' type='logo'></box-icon></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
