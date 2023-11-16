import React from 'react';
import Homer from '@/app/home/page'; // Import the Home component
import Explore from '@/app/explore/page'; // Import the Explore component
import { useButtonContext } from '@/context/ButtonContext';
import UserProfile from '@/app/profile/page';
import MessagePage from '@/app/message/page';

const DisplayedScreen = () => {
    let content = null;
  const { clickedButtonText } = useButtonContext() as { clickedButtonText: string }; // Type assertion
      

      if(clickedButtonText === "Explore"){
        content = <Explore />
      } else if (clickedButtonText === "Profile"){
        content = <UserProfile />
      } else if (clickedButtonText === "Message"){
        content = <MessagePage />
      }  else if (clickedButtonText === "Home"){
        content = <Homer />
      }

  // Render the specific page component based on the activeButton
 

  return (
    <div className="w-full h-full">
        {content ? content : "DisplayedScreen"}
     
    </div>
  );
};

export default DisplayedScreen;
