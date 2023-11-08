import React, { useState } from 'react';
import CustomButton from './CustomBtn';
import { useButtonContext } from '@/context/ButtonContext';
import Link from 'next/link';
export const Navlinks = () => {
  const { updateClickedButtonText } = useButtonContext();
  const [activeButton, setActiveButton] = useState('Home'); // Set the default activeButton to 'Home'.

  const handleButtonClick = (button :string) => {
    setActiveButton(button);
    updateClickedButtonText(button);
  };

  const buttons = ['Home', 'Explore', 'Message', 'Dashboard4', 'Profile'];

  return (
    <div className="bg-blue-600 flex flex-col h-full">
      <h1 className="text-white text-2xl font-bold text-center m-3">Logo</h1>
      <div className="flex flex-col">
        {buttons.map((button) => (
          <CustomButton
            key={button}
            secondary={button !== activeButton}
            primary={button === activeButton}
            onClick={() => handleButtonClick(button)}
          >
            {button}
          </CustomButton>
        ))}
      </div>
    </div>
  );
};
