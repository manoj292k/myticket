import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Adjust the path as needed

function Header() {
  const { isAuthenticated, userName, userEmail, logout } = useAuth(); // Get the user's email from context
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleSignOut = () => {
    logout();
    setDropdownOpen(false);
  };

  const handleLogin = async () => {
    if (isAuthenticated) {
      // Navigate to booking history with the user's email
      navigate('/booking-history', { state: { userEmail } });
    } else {
      // If not logged in, navigate to login page
      navigate('/login');
    }
  };

  return (
    <>
      <div className="w-full bg-rose-500 hidden md:block">
        <div className="flex flex-col md:flex-row justify-between items-center p-4 text-white">
          <a href="mailto:mjtravelsinfo@mjt.com" className="mb-2 md:mb-0 text-sm md:text-base">
            mjtravelsinfo@mjt.com
          </a>
          <h1 className="text-2xl md:text-4xl font-bold">MJ Travels</h1>

          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-lg"
                onClick={toggleDropdown}
              >
                {isAuthenticated ? userName : 'Account'}
                <svg
                  className="-mr-1 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            {isDropdownOpen && (
              <div
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
              >
                <div className="py-1" role="none">
                  {isAuthenticated ? (
                    <>
                      <Link to="/account-settings" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">
                        {userName}
                      </Link>
                      <button
                        type="button"
                        className="block w-full px-4 py-2 text-left text-sm text-gray-700"
                        onClick={handleSignOut}
                        role="menuitem"
                      >
                        Sign out
                      </button>
                    </>
                  ) : (
                    <Link to="/login" className="block w-full px-4 py-2 text-left text-sm text-gray-700">
                      Login
                    </Link>
                  )}
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">
                    License
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full bg-white flex justify-center border-b border-gray-200">
        <ul className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-8 p-3 text-sm md:text-base">
          <li>
            <Link className="hover:text-rose-500 transition-colors duration-200" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-rose-500 transition-colors duration-200" to="#">
              Cancel & Refund
            </Link>
          </li>
          <li>
            <span className="hover:text-rose-500 transition-colors duration-200 cursor-pointer" onClick={handleLogin}>
              My Booking
            </span>
          </li>
          <li>
            <Link className="hover:text-rose-500 transition-colors duration-200" to="#">
              Help
            </Link>
          </li>
          <li>
            <Link className="hover:text-rose-500 transition-colors duration-200" to="#">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
