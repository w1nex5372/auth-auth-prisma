'use client'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect, MouseEvent, ChangeEvent  } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Explore = () => {
  const [hasSearchResult, setHasSearchResult] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [dropdownStates, setDropdownStates] = useState<{ [key: number]: boolean }>({});
  const [FriendAdded, setFriendAdded] = useState(false)

  const handleAddFriendClick = () => {
    console.log("added")
    setFriendAdded(!FriendAdded);
   

  }


  

  const [trends, setTrends] = useState([
    { id: 1, category: 'Sports', title: 'Cristiano Ronaldo', posts: '99k posts' },
    { id: 2, category: 'Technology', title: 'TikTok', posts: '99k posts' },
    { id: 3, category: 'Politics', title: 'Palestine', posts: '99k posts' },
    // Add more data as needed
  ]);

  


  const handleNotInterestedClick = (itemId: number) => {
    // Remove the trend with the specified ID from the trends array
    setTrends((prevTrends) => prevTrends.filter((trend) => trend.id !== itemId));

    // Close the dropdown after clicking "Not Interested"
    setDropdownStates((prevState) => ({
      ...prevState,
      [itemId]: false,
    }));
  };

  const handleHarmFullClick = (itemId: number) => {
    setTrends((prevTrends) => prevTrends.filter((trend) => trend.id !== itemId))

  setDropdownStates((prevState) => ({
      ...prevState,
      [itemId]: false,
    }));
  }

  const handleFaEllipsisClick = (itemId: number) => {
    setDropdownStates((prevState) => {
      const updatedState: Record<string, boolean> = {};

      // Set all items to false
      Object.keys(prevState).forEach((key) => {
        updatedState[key] = false;
      });

      // Toggle the clicked item
      updatedState[itemId] = !prevState[itemId];

      return updatedState;
    });
  };

const handleBodyClick: EventListener = (event) => {
  const dropdownContainer = document.getElementById('dropdown-container');

  // Check if the click is outside the dropdown container
  if (dropdownContainer && !dropdownContainer.contains(event.target as Node)) {
    setDropdownStates((prevState) => {
      const updatedState: Record<string, boolean> = {};


      // Set all items to false
      Object.keys(prevState).forEach((key) => {
        updatedState[key] = false;
      });

      return updatedState;
    });
  }
};

useEffect(() => {
  // Attach the event listener when at least one dropdown is visible
  if (Object.values(dropdownStates).some((state) => state)) {
    document.body.addEventListener('click', handleBodyClick);
  }

  // Detach the event listener when the component unmounts or when all dropdowns are closed
  return () => {
    document.body.removeEventListener('click', handleBodyClick);
  };
}, [dropdownStates]);


 useEffect(() => {
  // Attach the event listener when at least one dropdown is visible
  if (Object.values(dropdownStates).some((state) => state)) {
    document.body.addEventListener('click', handleBodyClick);
  }

  // Detach the event listener when the component unmounts or when all dropdowns are closed
  return () => {
    document.body.removeEventListener('click', handleBodyClick);
  };
}, [dropdownStates]);


  const handleSearchInputField = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
     if (inputValue.trim() === '') {
      setFriendAdded(false);
    }
    setSearchTerm(inputValue);
    setHasSearchResult(inputValue.trim() !== '');
  };

  return (
    <div className='  border-2 border-primary  '>
      <div className=' text-left p-3 flex   items-center'>
        <input
          className='p-2 min-w-full   rounded-full bg-lowgray'
          type="text"
          placeholder='Search'
          value={searchTerm}
          onChange={handleSearchInputField}
        />
        
      </div>
       {searchTerm && (
          <div className='w-full  left-0 bg-white text-left p-3 border-2 border-primary'>
            <p>Search results for: {searchTerm}</p>
            <div className='output border'>
              <div className='p-2 hover:bg-lowgray flex items-center '>
                <img src="face.jpg" alt="" width={"32px"} className='rounded-full mx-1' />
                <div className='pl-3'>
                  <h2>username</h2>
                  <p>@userlogin</p>
                </div>
                <button className='ml-auto text-2xl' onClick={() => handleAddFriendClick()}>+</button>
                
              </div>
              {FriendAdded && (
                <div className='text-center text-green'>Friend Request has been send</div>
              )}
            </div>
          </div>
        )}

      <div className='text-left p-3 '>
        <h1 className='font-bold text-2xl'>Trends for you</h1>
        {trends.map((data) => (
          <div key={data.id} className='  hover:bg-lowgray p-2 flex items-center'>
            <div>
              <p className='text-gray'>{data.category}</p>
              <h2 className='font-bold'>{data.title}</h2>
              <p className='text-gray'>{data.posts}</p>
            </div>
            <div className='ml-auto'>
              <button className='text-xl' onClick={() => handleFaEllipsisClick(data.id)}>
                <FontAwesomeIcon icon={faEllipsis} />
              </button>
              {dropdownStates[data.id] && (
                <div id='dropdown-container' className=' fixed right-0 border bg-white flex flex-col p-1 rounded-md'>
                  <button
                    className='py-2 hover:bg-lowgray'
                    onClick={() => handleNotInterestedClick(data.id)}
                  >
                    Not Interested
                  </button>
                  <button onClick={() => handleHarmFullClick(data.id)} className='py-2 hover:bg-lowgray'>It's Harmful</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
