import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/apiCalls";

const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    logout(dispatch);
    navigate("/");
  };
  return (
    <header className='bg-white'>
      <div className='flex items-center h-16 max-w-screen-xl gap-8 px-4 mx-auto sm:px-6 lg:px-8'>
        <Link to='/'>
          <div className='flex items-center space-x-4 cursor-pointer'>
            <div className='block text-teal-600 '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-7 w-7 text-teal-600 mr-3'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z' />
              </svg>
            </div>
            <div className='text-gray-500 transition hover:text-gray-500/75'>
              TEAM37
            </div>
          </div>
        </Link>

        <div className='flex items-center justify-end flex-1 md:justify-between'>
          <nav className='hidden md:block' aria-labelledby='header-navigation'>
            <ul className='flex items-center gap-6 text-sm'>
              <li>
                <Link
                  className='text-gray-500 transition hover:text-gray-500/75'
                  to='/directories'
                >
                  Directories
                </Link>
              </li>
              <li>
                <Link
                  className='text-gray-500 transition hover:text-gray-500/75'
                  to='/publish'
                >
                  Publish
                </Link>
              </li>
              <li>
                <Link
                  className='text-gray-500 transition hover:text-gray-500/75'
                  to='/events'
                >
                  Events
                </Link>
              </li>

              <li>
                {user && (
                  <Link
                    className='text-gray-500 transition hover:text-gray-500/75'
                    to='/profile'
                  >
                    Profile Dashboard
                  </Link>
                )}
              </li>
            </ul>
          </nav>

          <div className='flex items-center gap-4'>
            <div className='sm:gap-4 flex space-x-3 duration-75'>
              {user && (
                <Link
                  onClick={handleLogout}
                  className='block px-5 py-2.5 text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 transition rounded-md'
                  to='/login'
                >
                  Hello {user.firstname}, Logout
                </Link>
              )}
              {!user && (
                <Link
                  className='block px-5 py-2.5 text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 transition rounded-md'
                  to='/login'
                >
                  Login
                </Link>
              )}
              {!user && (
                <Link
                  className='sm:block px-5 py-2.5 text-sm font-medium text-teal-600 bg-gray-100 rounded-md hover:text-teal-600/75 transition'
                  to='/register'
                >
                  Register
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
