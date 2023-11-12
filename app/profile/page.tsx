import React from 'react';
import UserCard from '@/components/UserCard';
import CustomButton from '@/components/CustomBtn';


const UserProfile = () => {
  return (
    <div className='bg-lowgray h-full'>
    
      <div className=''>
        <h2 className='w-max  p-3  font-bold'>
          My Profile
        </h2>
      </div>
   


{/* UserCARD */}
<div className="flex ">
  <div className="parent   basis-2/5 ">
    <UserCard></UserCard>
  </div>

  <div className="parent2 flex-7 w-full  mt-1">
    <ul className='flex gap-2  py-1  px-2  md:text-xs '>
     <CustomButton onClick={console.log("test")} customClassName="text-xs  h-max hover:bg-primary p-1 bg-secondary md:p-4" 
        
      >
        Edit Profile
      </CustomButton>
      <CustomButton  customClassName="text-xs h-max hover:bg-primary p-1 bg-secondary md:p-4" 
        
      >
        Change Password
      </CustomButton>
      <CustomButton  customClassName="text-xs h-max hover:bg-primary p-1 bg-secondary md:p-4" 
        
      >
        Profile Image
      </CustomButton>
      <CustomButton  customClassName="text-xs h-max hover:bg-primary p-1 bg-secondary md:p-4" 
        
      >
        Show Friends
      </CustomButton>
    </ul>
    <div className=' text-left pl-3 pt-3'>
      <div>
        <h1 className='font-bold tex-2xl py-1'>About me</h1>
        <p className='text-xs md:text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>

      <div className=''>
        <h1 className='font-bold py-1 pt-2'>Specialities</h1>
        <ul>
          <li>Lorem.</li>
          <li>fasdasdasd</li>
          <li>asdasdsad</li>
        </ul>
      </div>
      <div className=''>
        <h2 className='font-bold py-1 pt-2'>Education</h2>
        <ul>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>Lorem, ipsum.</li>
        </ul>
      </div>
    </div>

  </div>
</div>


      

   </div>
   
   
  );
};

export default UserProfile;
