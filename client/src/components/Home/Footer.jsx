import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='w-full mx-auto'>
      <footer className='p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-800'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <div
            href='#'
            target='_blank'
            className='flex items-center mb-4 sm:mb-0'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-7 w-7 text-teal-600 mr-3'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path d='M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z' />
            </svg>

            <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
              TEAM 37
            </span>
          </div>
          <ul className='flex flex-wrap items-center mb-6 sm:mb-0'>
            <li>
              <Link
                to='/'
                className='mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400'
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to='/'
                className='mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400'
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to='/'
                className='text-sm text-gray-500 hover:underline dark:text-gray-400'
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © 2022 <>TEAM 37 Ocean Sustainability</>. All Rights Reserved.
        </span>
      </footer>
    </div>
  );
};

export default Footer;
