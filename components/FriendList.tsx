import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

interface Friend {
  id: number;
  name: string;
  image: string;
}

const FriendList: React.FC = () => {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const listOfFriends: Friend[] = [
    { id: 1, name: 'Lukas', image: '/face.jpg' },
    { id: 2, name: 'Anna Smit', image: '/next.svg' },
    { id: 3, name: 'John Bravo', image: '/vercel.svg' },
    // Add more friends as needed
  ];

  useEffect(() => {
    setFriends(listOfFriends);
  }, []);

  const handleDropDownClick = (friendId: number) => {
    setIsDropdownOpen(!isDropdownOpen);
    setOpenDropdownId(friendId);
  };

  const handleRemoveFriend = (friendId: number) => {
    // Logic for removing a friend
    const updatedFriends = friends.filter((friend) => friend.id !== friendId);
    setFriends(updatedFriends);
    setOpenDropdownId(null); // Close the dropdown after action
    setIsDropdownOpen(false); // Close the dropdown after action
  };

  const handleBlockFriend = (friendId: number) => {
    // Logic for blocking a friend
    const updatedFriends = friends.filter((friend) => friend.id !== friendId);
    setFriends(updatedFriends);
    setOpenDropdownId(null); // Close the dropdown after action
    setIsDropdownOpen(false); // Close the dropdown after action
  };

  const filteredFriends = friends.filter((friend) =>
    friend.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className='friend-parent  rounded-lg m-1'>
        <div className='text-left p-2'>
          <input
            type='text'
            placeholder='Search Friends'
            className='p-2 rounded-md w-full'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className='friend relative  flex-col flex items-center gap-2 p-2'>
          {filteredFriends.map((friend, index) => (
            <div key={index} className='border rounded-lg items-center w-full text-right flex p-3'>
              <img src={friend.image} alt='' width={'32px'} className='rounded-full mx-1' />
              <h1 className='mx-1'>{friend.name}</h1>
              <button onClick={() => handleDropDownClick(friend.id)} className='ml-auto'>
                <FontAwesomeIcon icon={faEllipsis} />
              </button>
              {openDropdownId === friend.id && (
                <div className=' right-0 mt-2 -bottom-20 rounded-md shadow-lg bg-white'>
                  <div className='py-1' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
                    <button
                      onClick={() => handleRemoveFriend(friend.id)}
                      className='block px-4 py-2 text-sm hover:bg-lowgray text-gray-700 hover:bg-gray-100'
                      role='menuitem'
                    >
                      Remove Friend
                    </button>
                    <button
                      onClick={() => handleBlockFriend(friend.id)}
                      className='block px-4 py-2 text-sm hover:bg-lowgray text-gray-700 hover:bg-gray-100'
                      role='menuitem'
                    >
                      Block Friend
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FriendList;
