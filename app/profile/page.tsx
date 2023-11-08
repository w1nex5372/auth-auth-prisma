import React from 'react';
import UserCard from '@/components/UserCard';


const UserProfile = () => {
  return (
    <>
   <h2 className='w-max '>
    My Profile
   </h2>


{/* UserCARD */}
<div className="flex">
  <div className="parent   basis-2/5 border border-red-500 ">
    <UserCard></UserCard>
  </div>

  <div className="parent2 flex-7 border border-red-500 w-full">
    <ul className='flex gap-2 border'>
      <button>My Profile</button>
      <button>test1</button>
      <button>test2</button>
    </ul>
    <div>text</div>
  </div>
</div>


      

   </>
   
    
  );
};

export default UserProfile;
