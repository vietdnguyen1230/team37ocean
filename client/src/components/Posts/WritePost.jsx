import React, { useState } from "react";
import { axiosInstance } from "../../config";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const WritePost = () => {
  const user = useSelector((state) => state.user.currentUser);

  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");
  const [img, setImg] = useState("");
  const [desc, setDesc] = useState("");
  const [error, setError] = useState("false");

  //   const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title,
      address,
      city,
      country,
      category,
      img,
      desc,
    };

    try {
      const res = await axiosInstance.post("/posts", newPost);
      res.data && window.location.replace("/directories");
    } catch (err) {
      setError(err);
      console.log(err.response.data);
    }
  };
  return (
    <div className='w-full mt-5 mr-5 sticky'>
      <h1 className='text-center font-bold text-teal-600 mb-5'>
        Add Nearby Locations
      </h1>
      <form
        onSubmit={handleSubmit}
        className='bg-gray-100 shadow-lg rounded px-8 pt-6 pb-8 mb-4'
      >
        {/* Title */}
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            for='title'
          >
            Title
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='title'
            type='text'
            placeholder='Title'
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        {/* Address */}
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            for='address'
          >
            Address
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='address'
            type='text'
            placeholder='Address'
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        {/* City */}
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            for='city'
          >
            City
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='city'
            type='text'
            placeholder='City'
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        {/* Country */}
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            for='country'
          >
            Country
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='country'
            type='text'
            placeholder='Country'
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        {/* Category */}
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            for='category'
          >
            Category
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='category'
            type='text'
            placeholder='Category'
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        {/* Image */}
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            for='img'
          >
            Image
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='img'
            type='text'
            placeholder='Enter Image URL'
            onChange={(e) => setImg(e.target.value)}
          />
        </div>
        {/* Description */}
        <div className='mb-6'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            for='desc'
          >
            Description
          </label>
          <textarea
            className='shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            id='desc'
            type='text'
            placeholder='Enter Details'
            rows={5}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className='flex items-center justify-between'>
          {!user ? (
            <button className='bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
              <Link to='/login'>Sign in to publish</Link>
            </button>
          ) : (
            <button
              className='bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
            >
              Publish
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default WritePost;
