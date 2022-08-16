import React, { useState } from "react";
import Navbar from "../components/Home/Navbar";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password, loggedIn: true });
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className='w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0'>
        <div className='w-full sm:max-w-md p-5 mx-auto'>
          <h2 className='mb-12 text-center text-5xl font-extrabold'>
            Welcome.
          </h2>
          <form>
            <div className='mb-4'>
              <label className='block mb-1' for='email'>
                Username
              </label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                id='username'
                type='text'
                name='email'
                className='py-2 px-3 border border-gray-300 focus:border-teal-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full'
              />
            </div>
            <div className='mb-4'>
              <label className='block mb-1' for='password'>
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                id='password'
                type='password'
                name='password'
                className='py-2 px-3 border border-gray-300 focus:border-teal-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full'
              />
            </div>

            <div className='mt-6'>
              <button
                onClick={handleClick}
                disabled={isFetching}
                className='w-full inline-flex items-center justify-center px-4 py-2 bg-teal-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition'
              >
                Sign In
              </button>
            </div>
            <div className='mt-6 text-center'>
              <Link to='/register' className='underline'>
                Sign up for an account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
