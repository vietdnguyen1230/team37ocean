import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../redux/taskRedux";

const Tasks = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <div class='bg-white'>
      {tasks.tasks.length > 0 && (
        <h1
          className='font-bold leading-relaxed text-red-600 mb-4 cursor-pointer'
          onClick={() => dispatch(reset())}
        >
          Reset
        </h1>
      )}
      <section>
        {tasks.tasks.map((item) => (
          <section class='text-gray-600 body-font  '>
            <div class='container px-5 pt-5 mx-auto'>
              <div class='p-5 bg-gray-100 flex items-center mx-auto border-b  border-gray-200 rounded-lg sm:flex-row flex-col'>
                <div class=' sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center flex-shrink-0'>
                  <img src={item.task.img} alt={item.task.title} />
                </div>
                <div class='flex-grow sm:text-left text-center mt-6 sm:mt-0'>
                  <h1 class='text-black text-2xl title-font font-bold mb-2'>
                    {item.task.title}
                  </h1>
                  <p class='leading-relaxed text-base mb-5'>{item.task.desc}</p>

                  <div class='md:flex font-bold text-gray-800 mb-3'>
                    <div className='w-full flex'>
                      <div className='flex w-full'>
                        <div className='w-1/2'>
                          <div className='text-gray-500'>Date</div>
                        </div>
                        <div className='w-1/2'>
                          <div>March 23, 2023</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='md:flex font-bold text-gray-800 mb-3'>
                    <div className='w-full flex'>
                      <div className='flex w-full'>
                        <div className='w-1/2'>
                          <div className='text-gray-500'>Attendees</div>
                        </div>
                        <div className='w-1/2'>
                          <div>{item.quantity}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='md:flex font-bold text-gray-800 mb-3'>
                    <div className='w-full flex'>
                      <div className='flex w-full'>
                        <div className='w-1/2'>
                          <div className='text-gray-500'>Rewards</div>
                        </div>
                        <div className='w-1/2'>
                          <div>{item.task.rewards * item.quantity}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex w-full '>
                    <div className='text-red-400 w-1/2'>In Progress</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </section>
    </div>
  );
};
export default Tasks;
