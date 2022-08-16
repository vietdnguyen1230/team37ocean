import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const CommentSection = ({ post }) => {
  const user = useSelector((state) => state.user.currentUser);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState();
  const dispatch = useDispatch();

  const handleClick = () => {
  };
  return (
    <>
      <div>
        {/* Comments */}
        <div className='flex flex-col'>
          <div className='flex justify-center'>
            <div className='relative grid grid-cols-1 gap-4 p-4 border rounded-lg bg-white shadow-lg w-2/3'>
              <div className='relative flex gap-4'>
                <div className='flex flex-col w-full'>
                  <div className='flex flex-row justify-between'>
                    <p className='relative text-xl whitespace-nowrap truncate overflow-hidden'>
                      COMMENTOR
                    </p>
                  </div>
                  <p className='text-gray-400 text-sm'>
                    20 April 2022, at 14:88 PM
                  </p>
                </div>
              </div>
              <p className='mt-4 text-gray-500'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Maxime quisquam vero adipisci beatae voluptas dolor ame.
              </p>
            </div>
          </div>
        </div>
        {/* Comment Form */}
        <div className='flex mx-auto items-center justify-center shadow-lg mt-56 mb-4 max-w-lg'>
          <form className='w-full max-w-xl bg-white rounded-lg px-4 pt-2'>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <h2 className='px-4 pt-3 pb-2 text-gray-800 text-lg'>
                Add a new comment, {user.username}!
              </h2>
              <div className='w-full md:w-full px-3 mb-2 mt-2'>
                <textarea
                  className='bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white'
                  name='body'
                  placeholder='Type Your Comment'
                  required
                  onChange={(e) => setComment(e.target.value)}
                  value={comment}
                ></textarea>
              </div>
              <div className='w-full md:w-full flex items-start px-3'>
                <div className='flex items-start w-1/2 text-gray-700 px-2 mr-auto'>
                  <svg
                    fill='none'
                    className='w-5 h-5 text-gray-600 mr-1'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </div>
                <div className='-mr-1'>
                  <button
                    type='submit'
                    className='bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100'
                    onClick={handleClick}
                  >
                    Post Comment
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CommentSection;
