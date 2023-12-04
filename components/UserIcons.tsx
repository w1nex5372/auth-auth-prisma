import React, {ReactNode, useState , useEffect, useRef} from 'react'
import CustomButton from './CustomBtn'
import MyFontAwesomeIcon from './FontAwesomeIcon'
import { useButtonContext } from '@/context/ButtonContext';
import { faBell, faChevronDown, faQuestion } from '@fortawesome/free-solid-svg-icons'; // Import the necessary icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from "next-auth/react"
import UserSettingsPage from './UserSettingsPage';


interface UserIconsProps  {

}



const UserIcons: React.FC<UserIconsProps> = () => {
const { clickedButtonText, updateClickedButtonText } = useButtonContext();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [showDropDownMenu, setShowDropDownMenu] = useState(false);
  const [showSettings, setShowSettings] = useState(false);



 

  const handleAccountClick = () => {
  updateClickedButtonText("Profile");
  setShowDropDownMenu(false);
};


  const handleDropdownMenuClick = () => {
    setShowDropDownMenu(!showDropDownMenu);
    console.log(dropdownRef.current);
   
  };


  const handleLogOffClick = () => {
    signOut();
    setShowDropDownMenu(false);
  };



  const handleSettingsClick = () => {
    setShowSettings(!showSettings)
     setShowDropDownMenu(false);
    
  };


useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      // Use setShowDropDownMenu instead of setOpenDropdownId
      setShowDropDownMenu(false);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);

  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [dropdownRef]);




  return (
    <div className='flex justify-end pr-4 '>
      {showSettings && (
        <div className='absolute inset-0 rounded-md shadow-md'>
          <UserSettingsPage handleSettingsClick={handleSettingsClick}/>
        </div>
      )}
      <div className='text-primary m-3  pl-3 text-3xl font-bold'>{clickedButtonText}</div>
      <div className='flex-grow'></div> {/* This pushes the buttons to the right */}

      <div className='flex align-middle' >
        <div className='m-auto px-2 pt-1'>
            <CustomButton onClick={() => {console.log("tes")}} customClassName='bg-white w-max h-max m-auto m-1'>
      <MyFontAwesomeIcon icon={faBell}  className='text-gray border border-gray rounded-full p-2'/>

      </CustomButton>
        </div>
          
          <div className=' h-12 rounded-full bg-lowgray  m-auto p-2 flex'>  
            <img src="/face.png" className='rounded-full object-cover ' alt="" />

          <div className='flex items-center gap-1 text-left '>
              <h1 className='p-2 font-bold'>Name</h1>
        <FontAwesomeIcon
          icon={faChevronDown}
          onClick={() => handleDropdownMenuClick()} // Add curly braces around the onClick handler
        />

            {showDropDownMenu && (
  <div className="absolute top-10 mt-2 " ref={dropdownRef}>
    <ul className="bg-white  rounded-md shadow-md">
     <li className="py-2 px-4 hover:bg-lowgray cursor-pointer" onClick={handleAccountClick}>
  Account
</li>
       <li className="py-2 px-4 hover:bg-lowgray cursor-pointer" onClick={() => handleSettingsClick()}>
        Settings
      </li>
      <li className="py-2 px-4 hover:bg-lowgray cursor-pointer" onClick={() =>handleLogOffClick()}>
        Log Off
      </li>
    </ul>
  </div>
)}
          </div>
          </div>
          

      </div>


    

      
     
    </div>
  )
}

export default UserIcons;
