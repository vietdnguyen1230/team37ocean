import React, { useState } from "react";
import Navbar from "../components/Home/Navbar";
import { axiosInstance } from "../config";

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axiosInstance.post("/auth/register", {
        firstname,
        lastname,
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div>
      <Navbar />
      <div className='w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0'>
        <div className='w-full sm:max-w-md p-5 mx-auto'>
          <h2 className='mb-12 text-center text-5xl font-extrabold'>
            Sign Up.
          </h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label className='block mb-1' for='email'>
                First Name
              </label>
              <input
                onChange={(e) => setFirstname(e.target.value)}
                id='firstname'
                type='text'
                name='firstname'
                className='py-2 px-3 border border-gray-300 focus:border-teal-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full'
              />
            </div>
            <div className='mb-4'>
              <label className='block mb-1' for='email'>
                Last Name
              </label>
              <input
                onChange={(e) => setLastname(e.target.value)}
                id='last'
                type='text'
                name='lastname'
                className='py-2 px-3 border border-gray-300 focus:border-teal-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full'
              />
            </div>
            <div className='mb-4'>
              <label className='block mb-1' for='email'>
                Username
              </label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                id='username'
                type='text'
                name='username'
                className='py-2 px-3 border border-gray-300 focus:border-teal-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full'
              />
            </div>
            <div className='mb-4'>
              <label className='block mb-1' for='email'>
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                id='email'
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
                type='submit'
                className='w-full inline-flex items-center justify-center px-4 py-2 bg-teal-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition'
              >
                Register
              </button>
            </div>
            <div className='mt-6 text-center'>
              {error && <div>Something went wrong!</div>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
