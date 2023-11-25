import React, { useState } from 'react';
import CustomImage from './CustomImage';

const UserCard = ({ size = "normal" }) => {
  const [selectedImage, setSelectedImage] = useState<string>('face.jpg');

 

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const result = e.target?.result as string;
        setSelectedImage(result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className=" bg-white rounded-lg shadow-md p-4 m-2">
      <div className="flex items-center text-center flex-col	">
        <div className="w-40 h-42 rounded-full overflow-hidden">
          <CustomImage src={selectedImage} alt='User Profile' className="w-full h-full object-cover" />
        </div>
        <div className="ml-4">
          <h2 className="text-2xl font-semibold text-gray-800">Lukas</h2>
          <p className="text-gray-500">Specializes</p>
        </div>
        <label htmlFor="imageInput" className="mt-2 bg-secondary text-white p-2 rounded cursor-pointer hover:bg-blue-600">
          Change Image
          <input
            type="file"
            id="imageInput"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </label>
      </div>

      <div className="mt-6 text-gray-600 text-left">
        <div className="text-sm">
          Status: <span className="text-green">Online</span>
        </div>
        <div className="text-sm mt-2">Welcome boys</div>
      </div>
    </div>
  );
};

export default UserCard;
