import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {

  return (
    <section>
      <div className='px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:h-screen'>
          <div className='relative z-10 lg:py-16'>
            <div className='relative h-64 sm:h-80 lg:h-full'>
              <img
                className='absolute inset-0 object-cover w-full h-full rounded-lg'
                src='https://images.unsplash.com/photo-1582623838120-455da222cdc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
                alt='ocean'
              />
            </div>
          </div>

          <div className='relative flex items-center bg-gray-100'>
            <span className='hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16'></span>

            <div className='p-8 sm:p-16 lg:p-24'>
              <h2 className='text-2xl font-bold sm:text-3xl'>
                LIFE BELOW WATER
              </h2>

              <p className='mt-4 text-gray-600'>
                Conserve and sustainably use the oceans, seas and marine
                resources for sustainable development.
              </p>

              <Link
                className='inline-block px-12 py-3 mt-8 text-sm font-medium text-white bg-teal-600 border border-teal-600 rounded active:text-teal-500 hover:bg-transparent hover:text-teal-600/75 transition focus:outline-none focus:ring'
                to='/directories'
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
