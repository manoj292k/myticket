// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../AuthContext'; // Adjust the path as needed

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [register, setRegister] = useState({ name: '', number: '', email: '', password: '' });
  const [showLogin, setShowLogin] = useState(true);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleChangeReg = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      await login(loginData.email, loginData.password);
      setMessage('Login successful!');
      navigate('/');
    } catch (error) {
      setMessage('Login failed. Invalid email or password.');
    }
  };

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('https://66d5ca01f5859a7042677b7b.mockapi.io/api/v1/register');
      const existingUser = response.data.find(user => user.email === register.email);
      if (existingUser) {
        setMessage('User already registered with this email.');
      } else {
        const res = await axios.post('https://66d5ca01f5859a7042677b7b.mockapi.io/api/v1/register', register);
        if (res.status === 201) {
          setMessage('Registration successful! You can now log in.');
          setRegister({ name: '', number: '', email: '', password: '' });
          setShowLogin(true);
        } else {
          setMessage('Registration failed. Please try again.');
        }
      }
    } catch (error) {
      setMessage('Error registering. Please try again.');
    }
  };

  return (
    <div className="bg-red-400 h-screen flex items-center justify-center">
      {showLogin ? (
        <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-center text-3xl text-red-600 font-bold mb-4">Welcome to MJ Travels</h1>
          <p className="text-center font-thin text-gray-700 mb-6">Please log in to your account!</p>
          <form onSubmit={loginUser} className="flex flex-col gap-4">
            <input
              className="border-2 border-red-600 p-2 rounded-lg"
              name="email"
              placeholder="Email"
              type="email"
              value={loginData.email}
              onChange={handleChange}
            />
            <input
              className="border-2 border-red-600 p-2 rounded-lg"
              name="password"
              placeholder="Password"
              type="password"
              value={loginData.password}
              onChange={handleChange}
            />
            <button
              className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700"
              type="submit"
            >
              Login
            </button>
            <p
              className="text-blue-800 cursor-pointer text-center"
              onClick={() => setShowLogin(false)}
            >
              Don't have an account? Register New
            </p>
            {message && <p className="text-center mt-2 text-red-600">{message}</p>}
          </form>
        </div>
      ) : (
        <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-center text-3xl text-red-600 font-bold mb-4">Welcome to MJ Travels</h1>
          <p className="text-center font-thin text-gray-700 mb-6">Create a new account!</p>
          <form onSubmit={registerUser} className="flex flex-col gap-4">
            <input
              className="border-2 border-red-600 p-2 rounded-lg"
              name="name"
              placeholder="Name"
              type="text"
              value={register.name}
              onChange={handleChangeReg}
            />
            <input
              className="border-2 border-red-600 p-2 rounded-lg"
              name="number"
              placeholder="Mobile Number"
              type="text"
              value={register.number}
              onChange={handleChangeReg}
            />
            <input
              className="border-2 border-red-600 p-2 rounded-lg"
              name="email"
              placeholder="Email"
              type="email"
              value={register.email}
              onChange={handleChangeReg}
            />
            <input
              className="border-2 border-red-600 p-2 rounded-lg"
              name="password"
              placeholder="Password"
              type="password"
              value={register.password}
              onChange={handleChangeReg}
            />
            <button
              className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700"
              type="submit"
            >
              Register
            </button>
            <p
              className="text-blue-800 cursor-pointer text-center"
              onClick={() => setShowLogin(true)}
            >
              Already have an account? Login
            </p>
            {message && <p className="text-center mt-2 text-red-600">{message}</p>}
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;
