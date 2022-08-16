import React from "react";
import Tasks from "./Tasks";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
} from "react-share";
import { FacebookIcon } from "react-share";
import { useDispatch } from "react-redux";

const AVATAR =
  "https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1214428300?k=20&m=1214428300&s=170667a&w=0&h=NPyJe8rXdOnLZDSSCdLvLWOtIeC9HjbWFIx8wg5nIks=";

const Profile = ({ user }) => {
  const dispatch = useDispatch();

  return (
    <div className='relative max-w-md mx-auto md:max-w-2xl  min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16'>
      <div className='px-6 py-10'>
        <div className='flex flex-wrap justify-center'>
          <div className='w-full flex justify-center'>
            <div className='relative'>
              <img
                src={AVATAR}
                alt={user._id}
                className='shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]'
              />
            </div>
          </div>
          <div className='w-full text-center mt-20'>
            <div className='flex justify-center lg:pt-4 pt-8 pb-0'>
              <div className='p-3 text-center'>
                <span className='text-xl font-bold block uppercase tracking-wide text-slate-700'>
                  {user.rewards}
                </span>
                <span className='text-sm text-slate-400'>Reward Points</span>
              </div>

              <div className='p-3 text-center'>
                <span className='text-xl font-bold block uppercase tracking-wide text-slate-700'>
                  Bronze League
                </span>
                <span className='text-sm text-slate-400'>
                  Earn points to level up
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center mt-2'>
          <h3 className='text-2xl text-slate-700 font-bold leading-normal mb-1'>
            {user.firstname} {user.lastname}
          </h3>
        </div>
        <div className='text-center mt-2'>
          <h3 className='text text-slate-400 leading-normal mb-1'>
            Share with friends
          </h3>
          <div className='flex text-center justify-center mt-5 space-x-4'>
            <FacebookShareButton
              url='https://www.globalgoals.org/goals/14-life-below-water/'
              quote={"Life Below Water"}
              hashtag='#HFG'
            >
              <FacebookIcon />
            </FacebookShareButton>
            <LinkedinShareButton
              url='https://www.globalgoals.org/goals/14-life-below-water/'
              quote={"Life Below Water"}
              hashtag='#HFG'
            >
              <LinkedinIcon />
            </LinkedinShareButton>
          </div>
        </div>
        <div className='mt-6 py-6 border-t border-slate-200 text-center'>
          <div className='flex flex-wrap justify-center'>
            <div className='w-full px-4'>
              <p className='font-bold leading-relaxed text-slate-600 mb-4'>
                Earn Rewards Upon Completion
              </p>{" "}
              <div className='font-normal text-slate-700 hover:text-slate-400'>
                <Tasks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
