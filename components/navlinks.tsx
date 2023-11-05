import React, { useState } from 'react';
import CustomButton from './CustomBtn';
import { useButtonContext } from '@/context/ButtonContext';


export const Navlinks = () => {
  const [activeButton, setActiveButton] = useState(null);
    const { updateClickedButtonText } = useButtonContext();


  const handleButtonClick = (index, text) => {
    setActiveButton(index);
    updateClickedButtonText(text)
  };

  const buttons = ['Dashboard 1', 'Dashboard 2', 'Dashboard 3', 'Dashboard 4', 'Dashboard 5'];

  return (
    <div className="bg-blue-600 flex flex-col h-full">
      <h1 className='text-white text-2xl font-bold text-center m-3'>Logo</h1>
      <div className="flex flex-col">
        {buttons.map((button, index) => (
          <CustomButton
            key={index}
          
                secondary={index !== activeButton}

            primary={index === activeButton}
            onClick={() => handleButtonClick(index, button)}
          >
            {button}
          </CustomButton>
        ))}
      </div>
    </div>
  );
};
