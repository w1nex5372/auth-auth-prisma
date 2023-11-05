import React, { useState, useEffect, useRef } from 'react';
import CustomButton from './CustomBtn';
import LoginForm from '@/app/login/page';
import RegistrationForm from '@/app/register/page';
import { useSession } from 'next-auth/react';
import UserIcons from './UserIcons';

const Headas = () => {
  
  const [ShowLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { data: session } = useSession(); // Get user session data


  useEffect(() => {
    if (session && session.user) {
      setIsLoggedIn(true); // Update the isLoggedIn state when the user is authenticated
      setShowLoginForm(false)
    }
  }, [session]);


  const formsToRender = [
    ShowLoginForm && <LoginForm key="login" />,
    showRegisterForm && <RegistrationForm key="register" />,
  ];

  const handleShowRegisterForm = () => {
    setShowRegisterForm(!showRegisterForm);
  };

  const handleShowLoginForm = () => {
    setShowLoginForm(!ShowLoginForm);
  };

  const handleBody = (event) => {
    const classNames = event.target.className.split(' ');
    if (classNames.includes('lopas') && ShowLoginForm === true) {
      setShowLoginForm(false);
    } else if (classNames.includes('lopas') && showRegisterForm === true) {
      setShowRegisterForm(false);
    } else {
      return;
    }
  };

  useEffect(() => {
    if (ShowLoginForm) {
      document.body.addEventListener('click', handleBody);
    }
    if (showRegisterForm) {
      document.body.addEventListener('click', handleBody);
    } else {
      return;
    }

    // Cleanup the event listener when the component unmounts
    return () => {
      document.body.removeEventListener('click', handleBody);
    };
  }, [ShowLoginForm, showRegisterForm]);

  return (
    <div className="border">
    
      <div>
        {isLoggedIn ? ( // Render different buttons based on the authentication status
          <UserIcons >
            
          </UserIcons>
        ) : (
          <>
            <CustomButton customClassName="border border-red bg-green" onClick={handleShowLoginForm}>
              Log In
            </CustomButton>
            <CustomButton customClassName="border border-red" onClick={handleShowRegisterForm}>
              Register
            </CustomButton>
          </>
        )}
      </div>

      <div>
        {formsToRender.map((form, index) => (
          <div key={index}>{form}</div>
          
        ))}
      </div>
    </div>
  );
};

export default Headas;
