'use client'
import React, { useState, ChangeEvent } from 'react';
import UserCard from '@/components/UserCard';
import CustomButton from '@/components/CustomBtn';
import FriendList from '@/components/FriendList';

const UserProfile = () => {
  const [AboutMeDesc, setAboutMeDesc] = useState<string>("");
  const [specialities, setSpecialities] = useState<string[]>(['']);
  const [education, setEducation] = useState<string[]>(['']);
  const [AddDesciption, setAddDescription] = useState(false);
  const [changePasswordField, setChangePasswordField] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [showFriends, setShowFriends] = useState<boolean>(false);
  const [isEmailSent, setIsEmailSent] = useState<boolean>(false);
  

  const handleShowFriendsClick = () => {
    setShowFriends(!showFriends);
    setChangePasswordField(false)
    setAddDescription(false)
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSendClick = () => {
    // Handle the logic for sending the email
    console.log(`Sending email to ${email}`);

    // Set the state to indicate that the email has been sent
    setIsEmailSent(true);
    setEmail("");
  };

  const handleChangePasswordClick = () => {
    setChangePasswordField(!changePasswordField);
    setAddDescription(false);
    setShowFriends(false);

  };

  const handleAddDescription = () => {
    setAddDescription(!AddDesciption);
    setChangePasswordField(false);
    setShowFriends(false);
  };

  const handleRemoveSpeciality = (index: number) => {
    const updatedSpecialities = [...specialities];
    updatedSpecialities.splice(index, 1);
    setSpecialities(updatedSpecialities);
  };

  const handleRemoveEducation = (index: number) => {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);
    setEducation(updatedEducation);
  };

  const handleSpecialityChange = (index: number, value: string) => {
    const updatedSpecialities = [...specialities];
    updatedSpecialities[index] = value;
    setSpecialities(updatedSpecialities);
    console.log(updatedSpecialities);
  };

  const handleEducationChange = (index: number, value: string) => {
    const updatedEducations = [...education];
    updatedEducations[index] = value;
    setEducation(updatedEducations);
  };

  const handleAddEducation = () => {
    setEducation([...education, '']);
  };

  const handleAddSpeciality = () => {
    setSpecialities([...specialities, '']);
  };

  const UserInformation = {
    AboutMe: AboutMeDesc,
    Specialities: specialities,
  };

  const handleSaveDescription = () => {
    console.log(UserInformation.AboutMe);
    setAddDescription(!AddDesciption);
  };

  return (
    <div className='bg-lowgray h-full  border-2 border-primary'>
      <div className=''>
        <h2 className='w-max p-3 text-2xl font-bold'>My Profile</h2>
      </div>

      {/* UserCARD */}
      <div className="md:flex ">
        <div className="parent basis-2/5">
          <UserCard />
        </div>

        <div className="parent2 flex-7 w-full  mt-1">
          <ul className='flex gap-2 py-1 px-2 md:text-xs  justify-center'>
            <CustomButton
              customClassName="text-xs sm:text-xs font-bold h-max hover:bg-primary p-1 py-2 bg-secondary md:p-4"
              onClick={() => handleAddDescription()}
            >
              Add Description
            </CustomButton>
            <CustomButton
              customClassName="text-xs  font-bold h-max hover:bg-primary p-1 py-2 bg-secondary md:p-4"
              onClick={() => handleChangePasswordClick()}
            >
              Change Password
            </CustomButton>
            <CustomButton
              customClassName="text-xs font-bold h-max hover:bg-primary p-1 py-2 bg-secondary md:p-4"
              onClick={() => handleShowFriendsClick()}
            >
              Show Friends
            </CustomButton>
          </ul>

          {/* Conditionally render either AddDesc or the original parent div */}
          {AddDesciption ? (
            <div className='text-left pl-3 pt-3 parent'>
              <div>
                <h1 className='font-bold  py-1'>About me</h1>
                <input
                  className='p-5 rounded-md '
                  type="text"
                  placeholder='add about me..'
                  value={AboutMeDesc}
                  onChange={(e) => setAboutMeDesc(e.target.value)}
                />
              </div>

              <div className=''>
                <h1 className='font-bold  py-1'>Specialities</h1>
                {specialities.map((speciality, index) => (
                  <div key={index} className="flex mb-2">
                    <input
                      className='p-1 b rounded-md mr-2'
                      type="text"
                      placeholder={`Add spec ${index + 1}..`}
                      value={speciality}
                      onChange={(e) => handleSpecialityChange(index, e.target.value)}
                    />
                    <button
                      className="p-1 rounded-md text-black bg-red-500"
                      onClick={() => handleRemoveSpeciality(index)}
                    >
                      X
                    </button>
                  </div>
                ))}
                {specialities.length < 5 && (
                  <button
                    className='p-1 mb-1 rounded-md bg-primary text-white'
                    onClick={() => handleAddSpeciality()}
                  >
                    + Add Speciality
                  </button>
                )}
              </div>
              <div className=''>
                <h1 className='font-bold  py-1'>Education</h1>
                {education.map((educate, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      className='p-1 rounded-md flex-1 mr-2 mb-1'
                      placeholder={`Add edu.. ${index + 1}..`}
                      value={educate}
                      onChange={(e) => handleEducationChange(index, e.target.value)}
                    />
                    <button
                      onClick={() => handleRemoveEducation(index)}
                    >
                      X
                    </button>
                  </div>
                ))}
                {education.length < 5 && (
                  <button
                    className='p-1 mb-1 rounded-md bg-primary text-white'
                    onClick={() => handleAddEducation()}
                  >
                    + Add Education
                  </button>
                )}
              </div>
              <button
                className='border p-2 px-8 rounded-xl bg-primary text-white mt-2 hover:bg-green'
                onClick={() => handleSaveDescription()}
              >
                Save
              </button>
            </div>
          ) : showFriends ? (
            <div className=''>
              <div className='text-left rounded-lg p-2'>
              </div>

              <div className='friend-parent  rounded-lg m-1'>
                <FriendList />
              </div>
            </div>
          ) : changePasswordField ? (
            <div>
              <div className='text-left p-2'>
                <fieldset className='font-bold'>Enter your Email</fieldset>
                <input
                  type="Email"
                  className='p-2 my-1 rounded-md'
                  placeholder='Email'
                  value={email}
                  onChange={handleEmailChange}
                />
                <button
                  className='border p-2 px-5 ml-2 bg-secondary text-white rounded-md hover:bg-green'
                  onClick={handleSendClick}
                  disabled={!email.trim()}
                >
                  Send
                </button>
              </div>
              {isEmailSent && (
                <p className='text-left p-2  px-4  text-green'>
                  The instruction of how to change a password was sent to the email you entered.
                </p>
              )}
            </div>
          ) : (
            <div className='text-left pl-3 pt-3 parent'>
              <div>
                <h1 className='font-bold text-xl py-1'>About me</h1>
                <p className='text-xs md:text-xs py-1'>{UserInformation.AboutMe}</p>
              </div>

              <div className=''>
                <h1 className='font-bold text-xl py-1'>Specialities</h1>
                <ul>
                  {specialities.map((speciality, index) => (
                    <li className='py-1' key={index}>{speciality}</li>
                  ))}
                </ul>
              </div>
              <div className=''>
                <h2 className='font-bold py-1 text-xl'>Education</h2>
                <ul>
                  {education.map((edu, index) => (
                    <li className='py-1' key={index}>{edu}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
