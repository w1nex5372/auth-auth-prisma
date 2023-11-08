import React from 'react';



const UserCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-2">
      <div className="flex items-center">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <img
            src="/public/[removal.ai]_a92f2c59-c8e2-4a51-aff1-37b9cc955059-img_20221026_210337_1_W6PATJ.png" // Replace with the actual image URL
            alt="User Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="ml-4">
          <h2 className="text-2xl font-semibold text-gray-800">Name</h2>
          <p className="text-gray-500">Specializes</p>
        </div>
      </div>

      <button 
        className="bg-blue-500 text-white py-2 px-4 mt-4 rounded-full hover:bg-blue-600"
      >
        Edit Profile
      </button>

      <div className="mt-6 text-gray-600">
        <div className="text-sm">
          Status: <span className="text-green-500">Online</span>
        </div>
        <div className="text-sm mt-2">Some additional information</div>
      </div>
    </div>
  );
};

export default UserCard;
