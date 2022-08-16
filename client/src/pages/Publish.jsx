import React from "react";
import Footer from "../components/Home/Footer";
import Navbar from "../components/Home/Navbar";
import WritePost from "../components/Posts/WritePost";

const Publish = () => {
  return (
    <div>
      <Navbar />
      {/* Header */}
      <div className='flex space-x-2 justify-center mt-10'>
        <h2 className='text-4xl font-light leading-tight text-gray-400'>
          PUBLISH
        </h2>
      </div>
      {/* Nearby Directories */}
      <div className='p-6 py-6 dark:bg-teal-600 dark:text-gray-900 mt-5'>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row items-center justify-between'>
            <h2 className='text-center text-white text-2xl tracking-tighter font-bold'>
              Share locations
            </h2>
          </div>
        </div>
      </div>
      {/* Write Post */}
      <div className='max-w-2xl mx-auto my-10'>
        <WritePost />
      </div>
      <Footer />
    </div>
  );
};

export default Publish;
