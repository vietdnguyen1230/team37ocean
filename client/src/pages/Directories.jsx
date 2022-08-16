import React, { useEffect } from "react";
import Navbar from "../components/Home/Navbar";
import Posts from "../components/Posts/Posts";
import Footer from "../components/Home/Footer";
import { getPosts } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Directories = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);

  useEffect(() => {
    getPosts(dispatch);
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      {/* Header */}
      <div class='flex space-x-2 justify-center mt-10'>
        <h2 class='text-4xl font-light leading-tight text-gray-400'>
          WATER OUTLET DIRECTORIES
        </h2>
      </div>
      {/* Nearby Directories */}
      <div className='p-6 py-6 dark:bg-teal-600 dark:text-gray-900 mt-5'>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row items-center justify-between'>
            <h2 className='text-center text-white text-2xl tracking-tighter font-bold'>
              Refill Reusable Water Bottles
            </h2>
          </div>
        </div>
      </div>
      <div className='w-full'>
        <div>
          {/* Compilations of Cards */}
          <Posts posts={posts} />
        </div>
      </div>
      {/* End */}
      <div className='my-5 bg-gray-100'></div>
      <Footer />
    </div>
  );
};

export default Directories;
