import React, { useState } from 'react';
import CustomButton from './CustomBtn';
import { useButtonContext } from '@/context/ButtonContext';
export const Navlinks = () => {
  const { updateClickedButtonText } = useButtonContext();
  const [activeButton, setActiveButton] = useState('Home'); // Set the default activeButton to 'Home'.

  const handleButtonClick = (button :string) => {
    setActiveButton(button);
    updateClickedButtonText(button);
  };

  const buttons = ['Home', 'Explore', 'Message', 'Profile'];

  return (
    <div className="relative overflow-auto bg-primary  p-5 flex flex-col h-full">
      <h1 className="text-secondary text-2xl font-bold text-center m-3">Logo</h1>
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
