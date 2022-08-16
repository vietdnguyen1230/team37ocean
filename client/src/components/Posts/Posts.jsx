import React from "react";

const Posts = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post._id} className='bg-white'>
          <section>
            <section className='text-gray-600 body-font  '>
              <div className='container px-5 pt-5 mx-auto '>
                <div className='p-5 bg-gray-100 shadow-lg flex items-center mx-auto border-b  border-gray-200 rounded-lg sm:flex-row flex-col'>
                  <div className=' sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center flex-shrink-0'>
                    <img src={post.img} alt={post.title} />
                  </div>
                  <div className='flex-grow sm:text-left text-center mt-6 sm:mt-0'>
                    <h1 className='text-black text-2xl title-font font-bold mb-2'>
                      {post.title}
                    </h1>
                    <p className='leading-relaxed text-base mb-5'>{post.desc}</p>

                    <div className='md:flex font-bold text-gray-800'>
                      <div className='w-full md:w-1/2 flex space-x-3'>
                        <div className='w-1/2'>
                          <h2 className='text-gray-500'>Address</h2>
                          <p>{post.address}</p>
                        </div>
                        <div class='w-1/2'>
                          <h2 class='text-gray-500'>Country</h2>
                          <p>{post.country}</p>
                        </div>
                      </div>
                      <div className='w-full md:w-1/2 flex space-x-3'>
                        <div className='w-1/2'>
                          <h2 className='text-gray-500'>City</h2>
                          <p>{post.city}</p>
                        </div>
                        <div className='w-1/2'>
                          <h2 className='text-gray-500'>Category</h2>
                          <p>{post.categories}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      {/* <div class='mt-3 text-teal-600 inline-flex items-center cursor-pointer '>
                        Likes ({post.likes})
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
      ))}
    </div>
  );
};

export default Posts;
