import React, {ReactNode } from 'react'
import CustomButton from './CustomBtn'
import MyFontAwesomeIcon from './FontAwesomeIcon'
import { useButtonContext } from '@/context/ButtonContext';
import { faBell, faChevronDown, faQuestion } from '@fortawesome/free-solid-svg-icons'; // Import the necessary icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



interface UserIconsProps {
  children: ReactNode; // Specify the type for children
}


const UserIcons: React.FC<UserIconsProps> = ({ children }) => {
  const { clickedButtonText } = useButtonContext();

  return (
    <div className='flex justify-end pr-4 '>
      <div className='text-primary m-3  pl-3 text-3xl font-bold'>{clickedButtonText}</div>
      <div className='flex-grow'></div> {/* This pushes the buttons to the right */}

      <div className='flex align-middle' >
        <div className='m-auto'>
            <CustomButton onClick={() => {console.log("tes")}} customClassName='bg-white w-max h-max m-auto m-1'>
      <MyFontAwesomeIcon icon={faBell}  className='text-gray border border-gray rounded-full p-2'/>

      </CustomButton>
      <CustomButton onClick={() => {console.log("tes")}} customClassName='bg-white w-max h-max m-auto m-1'>
        <MyFontAwesomeIcon icon={faQuestion} className='text-gray border border-gray rounded-full p-2 mx-1'/>
      </CustomButton>
        </div>
          
          <div className='relative h-12 rounded-full bg-lowgray  m-auto p-2 flex'>  
            <img src="/face.png" className='rounded-full object-cover ' alt="" />

          <div className='flex items-center gap-1 text-left '>
              <h1 className='p-2 font-bold'>Lukas</h1>
           <FontAwesomeIcon className='' icon={faChevronDown}></FontAwesomeIcon>
          </div>
          

          </div>
      </div>


    

      
     
    </div>
  )
}

export default UserIcons;
