import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ events }) => {
  return (
    <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 w-full my-5 mx-5 px-5'>
      {/* Map Under */}
      {events.map((event) => (
        <div key={event._id} className='relative mx-auto w-full'>
          <div className='relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full'>
            <div className='shadow p-4 rounded-lg bg-white'>
              <div className='flex justify-center relative rounded-lg overflow-hidden h-52'>
                <div className='transition-transform duration-500 transform ease-in-out hover:scale-110 w-full'>
                  <div className='absolute inset-0 bg-black opacity-10'></div>
                  <img src={event.img} alt={event._id} />
                </div>
                <div className='absolute flex justify-center bottom-0 mb-3'>
                  <div className='flex bg-white px-4 py-1 space-x-5 rounded-lg overflow-hidden shadow'>
                    <p className='flex items-center font-medium text-gray-800'></p>

                    <p className='flex items-center font-medium text-gray-800'></p>

                    <p className='flex items-center font-medium text-gray-800'></p>
                  </div>
                </div>

                <span className='absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-teal-500 text-sm font-medium text-white select-none'>
                  Featured
                </span>
              </div>

              <div className='mt-4'>
                <h2 className='font-medium text-base md:text-lg text-gray-800 line-clamp-1'>
                  {event.title}
                </h2>
                <p className='mt-2 text-sm text-gray-800 line-clamp-1'>
                  {event.desc}
                </p>
              </div>

              <div className='grid grid-cols-2 grid-rows-2 gap-4 mt-8'>
                <p className='inline-flex flex-col xl:flex-row xl:items-center text-gray-800'>
                  <span className='mt-2 xl:mt-0 font-bold'>{event.tasks}</span>
                </p>

                <p className='inline-flex flex-col xl:flex-row xl:items-center text-gray-800'>
                  <span className='mt-2 xl:mt-0'>{event.country}</span>
                </p>
              </div>

              <div className='grid grid-cols-2 '>
                <Link to={`/event/${event._id}`}>
                  <div className='flex items-center bg-teal-600 p-2 rounded-full cursor-pointer duration-300 hover:bg-teal-400'>
                    <div className='relative'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-7 w-7 text-white'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                          clip-rule='evenodd'
                        />
                      </svg>
                    </div>
                    <p className='ml-6 text-white text-center line-clamp-1'>
                      View Event
                    </p>
                  </div>
                </Link>

                <div className='flex justify-end'>
                  <p className='inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl'>
                    <span className='text-lg text-teal-600'>
                      {event.rewards}{" "}
                    </span>
                    <span className='text-lg'>Reward Points</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventCard;
