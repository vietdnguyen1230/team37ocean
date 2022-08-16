import React from "react";
import Profile from "../components/Profile/Profile";
import { useSelector } from "react-redux";
import Navbar from "../components/Home/Navbar";

const UserProfile = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div>
      <Navbar />
      {/* Header */}
      <div className='flex space-x-2 justify-center mt-10'>
        <h2 className='text-4xl font-light leading-tight text-gray-400'>
          USER PROFILE
        </h2>
      </div>

      <Profile user={user} />
    </div>
  );
};

export default UserProfile;
