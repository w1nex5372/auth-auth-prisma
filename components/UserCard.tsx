import React from 'react';
import CustomImage from './CustomImage';

const UserCard = ({ size = "normal"}) => {
  const cardSizesClass = size === "normal" ? "" : "w"
  return (
    <div className=" bg-white rounded-lg shadow-md p-4 m-2">
      <div className="flex items-center text-center flex-col	">
       
        <div className="w-40 h-42 rounded-full overflow-hidden ">
          <CustomImage src="face.jpg" alt='User Profile' className="w-full h-full object-cover" />
        </div>
        <div className="ml-4 ">
          <h2 className="text-2xl font-semibold text-gray-800">Lukas</h2>
          <p className="text-gray-500">Specializes</p>
        </div>
      </div>

      

      <div className="mt-6 text-gray-600  text-left">
        <div className="text-sm ">
          Status: <span className="text-green">Online</span>
        </div>
        <div className="text-sm mt-2">Welcome boys </div>
      </div>
    </div>
  );
};

export default UserCard;
