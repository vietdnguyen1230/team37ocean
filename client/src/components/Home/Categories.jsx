import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Categories = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div className='flex min-h-screen items-center justify-center p-10 bg-white'>
      <div className='container grid max-w-screen-xl gap-8 lg:grid-cols-2 lg:grid-rows-2'>
        <div className='row-span-2 flex flex-col rounded-md border border-slate-200'>
          <div className='h-1/2 flex-1'>
            <img
              src='https://images.unsplash.com/photo-1613779907266-f85db34edae5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=856&q=80'
              className='w-full object-cover object-right-top'
              alt='omnichannel'
            />
          </div>
          <div className='p-10'>
            <h3 className='text-xl font-medium text-gray-700'>
              CONSERVE AND SUSTAINABILITY
            </h3>
            <p className='mt-2 text-slate-500'>
              Healthy oceans and seas are essential to our existence.They cover
              70 percent of our planet and we rely on them for food, energy and
              water. Yet, we have managed to do tremendous damage to these
              precious resources. We must protect them by eliminating pollution
              and overfishing and immediately start to responsibly manage and
              protect all marine life around the world.
            </p>
            <Link to='/directories' className='mt-2 inline-flex text-teal-600'>
              Directories →
            </Link>
          </div>
        </div>
        <div className='flex rounded-md border border-slate-200'>
          <div className='flex-1 p-10'>
            <h3 className='text-xl font-medium text-gray-700'>TAKE ACTION</h3>
            <p className='mt-2 text-slate-500'>
              Partake in cleanup project for rivers and oceans. Engage your
              whole community to clean up a local river, seaside or an ocean.
            </p>
            <Link to='/events' className='mt-2 inline-flex text-teal-600'>
              Join Local Events →
            </Link>
          </div>

          <div className='relative hidden h-full w-1/3 overflow-hidden lg:block'>
            <div className='absolute inset-0'>
              <img
                src='https://images.unsplash.com/photo-1580039304641-c381b24fc21c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
                className='h-full w-full object-cover object-left-top'
                alt=''
              />
            </div>
          </div>
        </div>
        <div className='flex rounded-md border border-slate-200'>
          <div className='flex-1 p-10'>
            <h3 className='text-xl font-medium text-gray-700'>JOIN US</h3>
            <p className='mt-2 text-slate-500'>
              Any support, big or small, can make a difference!
            </p>
            <Link
              to={!user ? "/register" : "/events"}
              className='mt-2 inline-flex text-teal-600'
            >
              Sign Up and Earn Rewards →
            </Link>
          </div>

          <div className='relative hidden h-full w-1/3 overflow-hidden lg:block'>
            <div className='absolute inset-0'>
              <img
                src='https://images.unsplash.com/photo-1561203890-70b56b03aaff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80'
                className='h-full w-full object-cover object-left-top'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
