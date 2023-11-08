import React from 'react';
import Home from '@/app/page'; // Import the Home component
import Explore from '@/app/explore/page'; // Import the Explore component
import { useButtonContext } from '@/context/ButtonContext';
import UserProfile from '@/app/profile/page';

const DisplayedScreen = () => {
    let content = null;
      const { clickedButtonText } = useButtonContext(); // Get the clickedButtonText from the context

      if(clickedButtonText === "Explore"){
        content = <Explore />
      } else if (clickedButtonText === "Profile"){
        content = <UserProfile />
      }

  // Render the specific page component based on the activeButton
 

  return (
    <div className="w-full h-full border borde-red ">
        {content ? content : "DisplayedScreen"}

    </div>
  );
};

export default DisplayedScreen;
