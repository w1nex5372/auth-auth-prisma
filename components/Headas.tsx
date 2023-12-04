import React, { useState, useEffect } from 'react';
import CustomButton from './CustomBtn';
import LoginForm from '@/app/login/page';
import RegistrationForm from '@/app/register/page';
import { useSession } from 'next-auth/react';
import UserIcons from './UserIcons';
import { useNavMenuContext } from '@/context/NavMenuContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';




const Headas: React.FC = () => {
  const [ShowLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { data: session } = useSession(); // Get user session data
    const { showNavMenu, handleBarsIconClick } = useNavMenuContext();

 



  



  useEffect(() => {
    if (session && session.user) {
      setIsLoggedIn(true);
      setShowLoginForm(false);
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



 const handleBody = (event: any) => {
  const target = event.target;

  if (!target) {
    return;
  }

  let classNames: string[];

  // Check if the target is an SVG element
  if (target instanceof SVGElement) {
    // Handle the case where the target is an SVG element
    // You can adjust this based on the structure of your SVG and how you want to handle it
    const svgParent = target.closest('svg');
    if (!svgParent) {
      return;
    }

    // Get the class attribute of the SVG parent
    const classAttribute = svgParent.getAttribute('class');
    classNames = classAttribute ? classAttribute.split(' ') : [];
  } else {
    // Get the class names from the target
    classNames = target.className.split(' ');
  }

  if (classNames.includes('lopas') && ShowLoginForm === true) {
    setShowLoginForm(false);
  } else if (classNames.includes('lopas') && showRegisterForm === true) {
    setShowRegisterForm(false);
  }
};



  useEffect(() => {
    if (ShowLoginForm) {
      document.body.addEventListener('click', handleBody);
    }
    if (showRegisterForm) {
      document.body.addEventListener('click', handleBody);
    }
    else {
      return;
    }

    return () => {
      document.body.removeEventListener('click', handleBody);
    };
  }, [ShowLoginForm, showRegisterForm]);



  return (
    <div className="">
     

      <div>
        {isLoggedIn ? (
          <div className='flex ms:block md:block '>
              {showNavMenu ? (
               <FontAwesomeIcon
                className={`block sm:hidden mr-auto  pb-2 text-3xl  pt-4 pl-3 text-white z-50 `}
                icon={faXmark}
                onClick={handleBarsIconClick}
              ></FontAwesomeIcon>
            ) : (
                 <FontAwesomeIcon
                className={`block   sm:hidden mr-auto  pb-2 text-3xl pt-4 pl-3 text-black z-50 `}
                icon={faBars}
                onClick={handleBarsIconClick}
              ></FontAwesomeIcon>
            )}
           
                 <UserIcons></UserIcons>
            
         
          </div>
          
        ) : (
          <div className="p-2 z-10  flex justify-end items-center ">
            {showNavMenu ? (
               <FontAwesomeIcon
                className={`block sm:hidden mr-auto  pb-2 text-3xl pt-2 text-white z-50 `}
                icon={faXmark}
                onClick={handleBarsIconClick}
              ></FontAwesomeIcon>
            ) : (
                 <FontAwesomeIcon
                className={`block sm:hidden mr-auto  pb-2 text-3xl pt-2 text-black z-50 `}
                icon={faBars}
                onClick={handleBarsIconClick}
              ></FontAwesomeIcon>
            )}
            
            
            <div className="flex">
              <CustomButton
                customClassName="h-max hover:bg-primary p-2 bg-secondary md:p-3 m-1"
                onClick={handleShowLoginForm}
              >
                Log In
              </CustomButton>
              <CustomButton
                customClassName=" h-max hover:bg-secondary p-2 bg-primary md:p-3 m-1"
                onClick={handleShowRegisterForm}
              >
                Register
              </CustomButton>
            </div>
          </div>
        )}
      </div>

      <div className=''>
        {formsToRender.map((form, index) => (
          <div key={index}>{form}</div>
        ))}
      </div>
    </div>
  );
};

export default Headas;
