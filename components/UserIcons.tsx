import React from 'react'
import CustomButton from './CustomBtn'
import MyFontAwesomeIcon from './FontAwesomeIcon'
import { useButtonContext } from '@/context/ButtonContext';

const UserIcons = () => {
  const { clickedButtonText } = useButtonContext();

  return (
    <div className='flex border justify-end pr-4 '>
      <div className=' m-3  pl-3 text-3xl font-bold'>{clickedButtonText}</div>
      <div className='flex-grow'></div> {/* This pushes the buttons to the right */}
      <CustomButton onClick={() => {console.log("tes")}} customClassName='border rounded-full m-1 '>
        <MyFontAwesomeIcon />
      </CustomButton>
      <CustomButton onClick={() => {console.log("tes")}} customClassName='border rounded-full m-1'>
        <MyFontAwesomeIcon />
      </CustomButton>
      <CustomButton onClick={() => {console.log("tes")}} customClassName='border rounded-full m-1'>
        <MyFontAwesomeIcon />
      </CustomButton>
      <CustomButton onClick={() => {console.log("tes")}} customClassName='border rounded-full m-1' >
        <MyFontAwesomeIcon />
      </CustomButton>
    </div>
  )
}

export default UserIcons;
