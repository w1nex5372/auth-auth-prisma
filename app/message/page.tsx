import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSearch } from '@fortawesome/free-solid-svg-icons';


const MessagePage = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    setMessages([...messages, inputValue]);
    setInputValue('');
  };

  return (
    <div className='bg-lowgray h-full text-left'>
      <div className='w-full text-center'>
        <FontAwesomeIcon icon={faSearch} className='text-gray' />
        <input
          type='text'
          className='m-2 p-1 rounded-full w-4/5 placeholder:p-3'
          placeholder='Search Messages'
        />
      </div>

      <div className='father block md:flex'>
        {/* left side */}
        <div className='p-2 m-3 testas cursor-pointer' onClick={handleExpandClick}>
          <div className='flex gap-2'>
            <img src="/123.png" className='w-5 rounded-full' alt="" />
            <h1 className='font-bold'>Lukas</h1>
            <p className=' '>2023/11/12</p>
            <p className=' '>14:23</p>
          </div>
          <div className='w-full'>
            <h1 className='whitespace-nowrap overflow-hidden text-ellipsis w-96 text-gray'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed illo numquam
              asperiores quisquam, dolore deleniti. Aspernatur excepturi impedit, magnam
              sequi quidem quas illo, maxime optio molestiae voluptas minus error.
              Voluptatum, vero!
            </h1>
          </div>
        </div>

        {/* right side */}
        <div className='flex flex-col w-full justify-center'>
          {isExpanded ? (
            <div className='w-full'>
              <div className='font-bold m-2 p-2'>
                <h1>IONOS DE SUPPORT</h1>
              </div>

              <div className='flex items-center gap-2 flex-col'>
                <img src="/123.png" alt="" width={"45px"} className='rounded-full' />
                <h1 className='font-bold'>IONOS DE SUPPORT</h1>
                <p className="text-gray">@Reserver</p>
                <p className='text-gray'>Im in love with the coco</p>
                <p className='text-green'>online</p>
              </div>
              <div className='bg-white testas h-96 shadow-md overflow-auto  '>
                {messages.map((message, index) => (
                  <div key={index} className='p-2 text-right'>
                    <p className='text-right text-black p-2 bg-lowgray'>{message}</p>
                    <p className='text-gray'>time 9:14AM</p>
                  </div>
                ))}
              </div>
              <div className='p-2 flex '>
                <input
                  type="text"
                  placeholder='Start a new message'
                  className='w-full rounded-lg p-2'
                  value={inputValue}
                  onChange={handleInputChange}
                />
                <FontAwesomeIcon
                  className='cursor-pointer flex justify-center items-center p-3'
                  icon={faPaperPlane}
                  onClick={handleSendMessage}
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default MessagePage;
