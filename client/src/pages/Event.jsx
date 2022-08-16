import React, { useState, useEffect } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Home/Footer";
import { axiosInstance } from "../config";
import Navbar from "../components/Home/Navbar";
import { addTask } from "../redux/taskRedux";

const Event = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [task, setTasks] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getEvent = async () => {
      try {
        const res = await axiosInstance.get("/events/find/" + id);
        setTasks(res.data);
      } catch {}
    };
    getEvent();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleSubmit = () => {
    dispatch(addTask({ task, quantity }));
    navigate("/profile");
  };

  return (
    <div>
      <Navbar />
      {/* Header */}
      <div className='flex space-x-2 justify-center mt-10'>
        <h2 className='text-4xl font-light leading-tight text-gray-400'>
          Event Details
        </h2>
      </div>
      {/* Nearby Directories */}
      <div className='p-6 py-6 dark:bg-teal-600 dark:text-gray-900 mt-5'>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row items-center justify-between'>
            <h2 className='text-center text-white text-2xl tracking-tighter font-bold'>
              Featured
            </h2>
          </div>
        </div>
      </div>
      {/* Single */}
      <section className='text-gray-600 body-font overflow-hidden'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='lg:w-4/5 mx-auto flex flex-wrap'>
            <img
              alt='event'
              className='lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded'
              src={task.img}
            />
            <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
              <h2 className='text-sm title-font text-gray-500 tracking-widest'>
                {task.country}
              </h2>
              <h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>
                {task.title}
              </h1>

              <p className='leading-relaxed mt-7'>{task.desc}</p>
              <div className='flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5'>
                <div className='flex'>
                  <span className='mr-3 font-bold'>Event Date</span>
                  <div>March 23, 2023</div>
                </div>
                <div className='flex ml-10 items-center'>
                  <span className='mr-3 font-bold'>Phone</span>
                  <div className='relative'>
                    <div>(415)-886-8888</div>
                    <span className='absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        className='w-4 h-4'
                        viewBox='0 0 24 24'
                      >
                        <path d='M6 9l6 6 6-6'></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex mb-5 items-center'>
                <span className='mr-3 font-bold'>Number of Attendees:</span>
                <p className='p-2 flex'>
                  <span
                    className='p-2 m-1 border bg-teal-600  text-white cursor-pointer rounded-lg items-center flex justify-center'
                    onClick={() => handleQuantity("dec")}
                  >
                    <MinusIcon className='w-5' />
                  </span>
                  <span className='p-2 m-1 border border-gray-800 cursor-pointer rounded-lg w-[80px] text-center'>
                    {quantity}
                  </span>
                  <span
                    className='p-2 m-1 border bg-teal-600 text-white cursor-pointer rounded-lg items-center flex justify-center'
                    onClick={() => handleQuantity("inc")}
                  >
                    <PlusIcon className='w-5' />
                  </span>
                </p>
              </div>
              <div class='flex'>
                <span class='title-font font-medium text-2xl text-teal-600'>
                  {task.rewards} Reward Points
                </span>
                <button
                  onClick={handleSubmit}
                  className='flex ml-auto text-white bg-teal-600 border-0 py-2 px-6 focus:outline-none hover:bg-teal-500 rounded'
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Event;
