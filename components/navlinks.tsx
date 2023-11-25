import React, { useState, useEffect } from 'react';
import CustomButton from './CustomBtn';
import { useButtonContext } from '@/context/ButtonContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEnvelope, faHouse, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavMenuContext } from '@/context/NavMenuContext';

export const Navlinks = () => {
  
  const { updateClickedButtonText } = useButtonContext();
  const { showNavMenu, setShowNavMenu } = useNavMenuContext();

  const [activeButton, setActiveButton] = useState('Home');
  

  
  const handleButtonClick = (button:string) => {
    setActiveButton(button);
    updateClickedButtonText(button);
    setShowNavMenu(false);
   
    
    
  };


   useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setShowNavMenu(false);
      }
    };

    // Call the function once to set the state initially
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  

  const buttons = ['Home', 'Explore', 'Message', 'Profile'];

 
  return (
    <div className='relative h-full z-50 '>
      <div className={`overflow-auto md:flex z-10 bg-primary p-5 flex-col h-full ${showNavMenu ? 'fixed  inset-0' : 'hidden'}`}>
        <h1 className="text-secondary text-2xl  cursor-pointer font-bold text-center m-3">QuipWave</h1>
        <div className="flex flex-col pt-5">
          {buttons.map((button) => (
            <CustomButton
              key={button}
              secondary={button !== activeButton}
              primary={button === activeButton}
              onClick={() => handleButtonClick(button)}
            >
              {button === "Message" && (
                <FontAwesomeIcon icon={faEnvelope} className='mr-2'/>
              )}
              {button === "Profile" && (
                <FontAwesomeIcon icon={faUser} className='mr-2'/>
              )}
              {button === "Explore" && (
                <FontAwesomeIcon icon={faSearch} className='mr-2'/>
              )}
              {button === "Home" && (
                <FontAwesomeIcon icon={faHouse} className='mr-2'/>
              )}
              {button}
            </CustomButton>
          ))}
        </div>
      </div>
    </div>
  );
};
