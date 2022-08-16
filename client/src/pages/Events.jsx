import React, { useEffect } from "react";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";
import EventCard from "../components/Events/EventCard";
import { getEvents } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Events = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.event.events);

  useEffect(() => {
    getEvents(dispatch);
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      {/* Header */}
      <div class='flex space-x-2 justify-center mt-10'>
        <h2 class='text-4xl font-light leading-tight text-gray-400'>
          LOCAL EVENTS AND OPPORTUNITIES
        </h2>
      </div>
      {/* Nearby Directories */}
      <div className='p-6 py-6 dark:bg-teal-600 dark:text-gray-900 mt-5'>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row items-center justify-between'>
            <h2 className='text-center text-2xl tracking-tighter font-bold text-white'>
              Sustainability Actions
            </h2>
          </div>
        </div>
      </div>
      {/* Compilations of Cards */}
      <EventCard events={events} />
      <Footer />
    </div>
  );
};

export default Events;
