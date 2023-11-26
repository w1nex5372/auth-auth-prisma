'use client'
import React, { useState, useRef, ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSearch } from '@fortawesome/free-solid-svg-icons';

interface MessagePageProps {}

const MessagePage: React.FC<MessagePageProps> = () => {


   const persons = [
    {
      id: 1,
      name: 'Lukas',
      date: '2023/11/12',
      time: '14:23',
      message: 'Lorem ipsum dolor sit amet consectetur asdasd asdsadasasds',
      imagePath: '/next.svg',
      personUrl: "@jameson33",
      description: "im in love with the coco",
      status: "online",
    },
    {
      id: 2,
      name: 'Tomy',
      date: '2022/5/12',
      time: '18:33',
      message: 'lorem dsfsd ds erwe wer er ',
      imagePath: '/face.jpg',
      personUrl: "@jameson33",
      description: "i am  a god",
      status: "offline",
    },
    {
      id: 3,
      name: 'Admyto',
      date: '2018/8/12',
      time: '18:09',
      message: 'loasda asdasdsaas asdasdasrem dsfsd ds erwe wer er ',
      imagePath: '/vercel.svg',
      personUrl: "@teryy33",
      description: "love web dev",
      status: "online",
    },
    // Add more persons as needed
  ];


  const [expandedPersonId, setExpandedPersonId] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [messages, setMessages] = useState<Record<number, string[]>>({});
    const [filteredPersons, setFilteredPersons] = useState(persons);

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    console.log(messages)
  };
 

  const handleExpandClick = (personId: number) => {
    setExpandedPersonId(personId === expandedPersonId ? null : personId);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.trim().toLowerCase();
    setInputValue(e.target.value);
    console.log(inputValue)

    // Filter persons based on the search value
    const filtered = persons.filter(
      (person) =>
        person.name.toLowerCase().includes(searchValue) ||
        person.personUrl.toLowerCase().includes(searchValue)
    );
    setFilteredPersons(filtered);
  };
  const handleSendMessage = () => {
    if (expandedPersonId !== null) {
      setMessages({
        ...messages,
        [expandedPersonId]: [...(messages[expandedPersonId] || []), inputValue],
      });
      setInputValue('');
    }
  };

  return (
    <div className='bg-lowgray  border-2 border-primary text-left'>
      <div className='w-full text-center'>
        <FontAwesomeIcon icon={faSearch} className='text-gray' />
        <input
          type='text'
          className='m-2 p-3 rounded-full w-4/5 placeholder:p-3'
          placeholder='Search Messages'
          onChange={handleInputChange}
        />
      </div>

      <div className=''>
        <div className='father block  sm:block'>
          {filteredPersons.map((person) => (
            <div
              key={person.id}
              className='p-2 m-3 testas cursor-pointer'
              onClick={() => handleExpandClick(person.id)}
            >
              <div className='flex gap-2'>
                <img src={person.imagePath} className='w-5 rounded-full' alt="" />
                <h1 className='font-bold'>{person.name}</h1>
                <p className=' '>{person.date}</p>
                <p className=' '>{person.time}</p>
              </div>
              <div className='w-full'>
               <h1 className='overflow-hidden text-ellipsis text-gray'>
        {messages[person.id]?.length > 0
          ? messages[person.id][messages[person.id].length - 1] // Get the last message
          : "No messages yet"}
      </h1>
              </div>
            </div>
          ))}
        </div>

        <div className='w-full sm:block   justify-center'>
          {expandedPersonId !== null ? (
            <div className='w-full '>
              {persons.map((person) => (
                person.id === expandedPersonId ? (
                  <div className='flex rounded-md justify-center'>
                      <div key={person.id} className='mx-2 w-1/2 mb-2 m-auto shadow-lg bg-white'>
                    <div className='flex items-center gap-2 flex-col'>
                      <img src={person.imagePath} alt="" width={"45px"} className='rounded-full pt-2' />
                      <h1 className='font-bold'>{person.name}</h1>
                      <p className="text-gray">{person.personUrl}</p>
                      <p className='text-gray'>{person.description}</p>
                      <p className='text-green'>{person.status}</p>
                    </div>
                  </div>
                  </div>
                
                ) : null
              ))}
              <div className='bg-white  max-w-md md:max-w-7xl h-56  m-auto shadow-md  overflow-y-scroll'>
                {messages[expandedPersonId]?.map((message, index) => (
                  <div key={index} className='p-2 text-right  '>
                    <p className='text-left text-black p-2 bg-lowgray break-words '>{message}</p>
                    <p className='text-gray'>time 9:14AM</p>
                  </div>
                ))}
              </div>
              <div className='p-2 flex '>
                <textarea
                  placeholder='Start a new message'
                  className='w-full rounded-lg p-2'
                  value={inputValue}
                  onChange={handleTextAreaChange}
                
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
