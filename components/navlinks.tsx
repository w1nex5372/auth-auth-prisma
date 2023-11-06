import React, { useState } from 'react';
import CustomButton from './CustomBtn';
import { useButtonContext } from '@/context/ButtonContext';

export const Navlinks = () => {
  const { updateClickedButtonText } = useButtonContext();
  const [activeButton, setActiveButton] = useState('Home'); // Set the default activeButton to 'Home'.

  const handleButtonClick = (button) => {
    setActiveButton(button);
    updateClickedButtonText(button);
  };

  const buttons = ['Home', 'Explore', 'Dashboard3', 'Dashboard4', 'Dashboard5'];

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
