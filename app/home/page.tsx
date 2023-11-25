'use client'
import { faComment, faFaceSmile, faGear, faImage, faL, faShare, faThumbsUp, faTimes } from '@fortawesome/free-solid-svg-icons';
import React, { useState, ChangeEvent, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DropDownMenu from '@/components/DropDownMenu';
import EmojiPicker from 'emoji-picker-react';

import { v4 as uuidv4 } from 'uuid';





interface Comment {
     id: string;
  text: string;
}

interface Message {
  postId: string
  text: string;
  images: File[];
}

interface HomerProps {
  // Define your prop types here
}

const Homer: React.FC<HomerProps> = () => {
  const maxImages = 5;

  const [inputValue, setInputValue] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [showPostMenu, setShowPostMenu] = useState(false);
  const [selectedDropdown, setSelectedDropdown] = useState<number | null>(null);
  const [activeComment, setActiveComment] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<{ [postId: string]: Comment[] }>({});

  const [activePostIndex, setActivePostIndex] = useState<number | null>(null);
const [likes, setLikes] = useState<{ [index: number]: number | "" }>({});
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);




  const handleEmojiClick = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };
  
    const handleEmojiSelect = (emojiObject : any) => {
    setInputValue((prevValue) => prevValue + emojiObject.emoji); // Use emoji.native to get the actual emoji character
    setShowEmojiPicker(false);
    console.log("test")
  };
  
 const handleActiveCommentClick = (index: number) => {
  setActivePostIndex(index);
  setActiveComment(!activeComment);
  setComment('');


};


const handleCommentClose = () => {
  setActiveComment(!activeComment)
}


const handleThumbsUp = (index: number) => {
  // Create a copy of the likes state
  const newLikes = { ...likes };

  // If the post has been liked, toggle the like count; otherwise, set it to 1
  newLikes[index] = newLikes[index] === 1 ? "" : 1;

  console.log(newLikes);
  // Update the likes state
  setLikes(newLikes);
};



useEffect(() => {
  // This block of code will run after setActivePostIndex is completed
  console.log("Updated activePostIndex:", activePostIndex);
  // Any additional actions you want to perform after updating the state
}, [activePostIndex]); // This useEffect will run whenever activePostIndex changes





const handlePostComment = () => {
  // Check if activePostIndex is not null before using it as an index
  if (activePostIndex !== null && comment.trim() !== "") {
    const newComments: { [postId: string]: Comment[] } = { ...comments };

    // Use the postId property to uniquely identify the message
    const postIdentifier = messages[activePostIndex]?.postId;

    if (postIdentifier) {
      // Generate a unique ID for the comment (assuming you have a way to generate unique IDs)
      const commentId = uuidv4(); // replace with your unique ID generation logic

      // Create the comment object
      const newComment: Comment = {
        id: commentId,
        text: comment.trim(),
      };

      // Attach the comment to the specific message (post) using its identifier
      newComments[postIdentifier] = newComments[postIdentifier] || [];
      newComments[postIdentifier].push(newComment);

      setComments(newComments);

      // Reset comment input value
      setComment('');
      console.log('New Comments State:', newComments);
    } else {
      console.error('Error: Message identifier is undefined');
    }
  } else {
    console.error('Error: activePostIndex is null');
  }
};




  const handlePostMenuClick = (index: number) => {
    setShowPostMenu(!showPostMenu);
      console.log(comments, index)
    setSelectedDropdown(index === selectedDropdown ? null : index);
  };

const handleMenuAction = (actionType: string, index: number) => {
  // Perform actions based on actionType
  switch (actionType) {
    case 'delete':
      const updatedMessages = [...messages];
      const deletedMessage = updatedMessages[index];

      // Remove the message from the messages array
      updatedMessages.splice(index, 1);
      setMessages(updatedMessages);

      // Check if the deleted message has a postId
      if (deletedMessage?.postId) {
        // Create a copy of the comments state
        const updatedComments: { [postId: string]: Comment[] } = { ...comments };

        // Remove comments associated with the deleted message
        delete updatedComments[deletedMessage.postId];
        
        // Update the comments state
        setComments(updatedComments);

        console.log('Updated Comments State:', updatedComments);
      }

      break;

    default:
      break;
  }
  setSelectedDropdown(null);
};


  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      if (files.length + images.length > maxImages) {
        // Limit the number of images
        return;
      }

      const newImages = [...images];
      const newImagePreviews = [...imagePreviews];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        const reader = new FileReader();
        reader.onloadend = () => {
          newImages.push(file);
          newImagePreviews.push(reader.result as string);
          setImages(newImages);
          setImagePreviews(newImagePreviews);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleRemoveImage = (index: number) => {
    const newImages = [...images];
    const newImagePreviews = [...imagePreviews];

    newImages.splice(index, 1);
    newImagePreviews.splice(index, 1);

    setImages(newImages);
    setImagePreviews(newImagePreviews);
  };


  const handleSendMessage = () => {
    const newMessage: Message = {
      postId : uuidv4(),
      text: inputValue,
      images: images,
    };
    setMessages([newMessage, ...messages]);
    // Reset input values
    setImages([]);
    setImagePreviews([]);
    setInputValue('');
  };

  return (
    <div className=''>
      <div className='p-2  border-2 border-primary  rounded-md m-2'>



        <div className="md:flex flex border-2 ">
          <img src="/face.jpg" alt="" width={"30px"} className='rounded-full mx-2 m-2 hidden md:block sm:block' />

         
          <textarea className='break-words   w-full p-1 rounded-sm  border text-black '
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}


          />
        
             
                {showEmojiPicker && (
                  <div className='absolute right-0  top-20'>
                      <EmojiPicker width="350px" height="550px" onEmojiClick={handleEmojiSelect} />
                  </div>
                
              )}
                                

                  <div>
                     <FontAwesomeIcon icon={faFaceSmile}
                   onClick={handleEmojiClick}
                className='px-1 pt-2 text-gray text-2xl'/>

                      <div className='items-center flex'>
                    <label htmlFor="imageUpload" className='text-gray  text-2xl  cursor-pointer'>

                <FontAwesomeIcon icon={faImage} className=' px-1  pt-2' />
                <input
                  type="file"
                  id="imageUpload"
                  accept="image/*"
                  className="hidden border"
                  multiple
                  onChange={handleImageChange}
                />
              </label>
          
            </div> 
        
                  </div>

      
        </div>
        <button
          className={`border rounded-full p-1 px-3 hover:bg-secondary mt-2 text-white ${
            inputValue.trim() === '' && images.length === 0 ? 'bg-gray cursor-not-allowed' : 'bg-primary cursor-pointer'
          }`}
          onClick={handleSendMessage}
          disabled={inputValue.trim() === '' && images.length === 0}
          style={inputValue.trim() === '' && images.length === 0 ? { pointerEvents: 'none' } : undefined}
        >
          Post
        </button>
      </div>
       <div className='flex p-3 mx-3'>
             {imagePreviews.map((preview, index) => (
            <div key={index} className="block  items-center">
              <img
                src={preview}
                alt="preview"
                className="mt-2 mr-2"
                style={{ maxWidth: '50px', maxHeight: '100px' }}
              />
              <button
                className="text-red-500 cursor-pointer"
                onClick={() => handleRemoveImage(index)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          ))}
          </div>


           
        <div>
          
        </div>

      {/* Render other messages */}
      {messages.map((message, index) => (
        <div key={index} className='border-2 shadow-lg mr-2 rounded-sm mt-3 '>

          <div className='flex gap-2 pt-1 ml-3 items-center'>
            <img src="/face.jpg" alt="" width={"32px"} className='rounded-full ' />
            <h1>John Bravo</h1>
            <h1 className='text-gray'>useracc</h1>
            <p className='text-gray'>date</p>
            <FontAwesomeIcon
              icon={faGear}
              className='m-auto-left p-2 text-primary'
              style={{ marginLeft: 'auto' }}
              onClick={() => handlePostMenuClick(index)}
            />

            {activeComment && (
              <div className='fixed   z-50 border top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl max-w-full  sm:w-2/3 lg:w-1/3 h-auto sm:h-2/3 bg-white shadow-lg items-center '>





                <div className=''>
                    <button className='absolute top-0 right-0 p-1' onClick={() => handleCommentClose()}>X</button>
                <div className='flex items-center pt-3 border'>
                  <img src="/face.jpg" alt="" className='w-12  h-12 rounded-full' />
                  <div className='block  overflow-scroll px-2 mx-1 border rounded-sm'>
                       <textarea  value={comment} 
                       className='p-3' 
                       onChange={(e) => setComment(e.target.value)} 
                 placeholder="Type a comment" />
                  </div>
              
                  <button
                    className={`border rounded-full p-1 px-3 hover:bg-secondary text-white ${
                      comment.trim() === '' ? 'bg-lowgray hover:bg-lowgray': 'bg-primary cursor-pointer'
                    }`}
                    onClick={() => handlePostComment()}
                    disabled={comment.trim() === ''}
                  >
                    Post
                  </button>
                </div>

                

                </div>
                

               <div className='flex text-left justify-center'>
  {activePostIndex !== null && messages[activePostIndex] && comments[messages[activePostIndex].postId] && comments[messages[activePostIndex].postId].length > 0 && (
    <div className='overflow-scroll h-56'>
      {comments[messages[activePostIndex].postId].map((comment, commentIndex) => (
        <div className='p-1 flex border flex-col sm:flex-row items-center rounded-lg bg-lowgray gap-4 justify-evenly' key={commentIndex}>
          <p className='mb-2 sm:mb-0'>username</p>
          <p className='mb-2 sm:mb-0 w-32 break-words'>{comment.text}</p>
          <p>14:22</p>
        </div>
      ))}
    </div>
  )}
</div>



              </div>
            )}

          </div>
          {selectedDropdown === index && (
            <DropDownMenu handleMenuAction={(actionType: string) => handleMenuAction(actionType, index)} />
          )}

          <div className='text-left ml-4 py-2 px-1 max-w-[450px]  lg:max-w-[1000px]   break-words'>{message.text}</div>
          {message.images && message.images.map((image, i) => (
            <img key={i} src={URL.createObjectURL(image)} alt="uploaded" className="mt-2  p-3" style={{ maxWidth: '100px', maxHeight: '100px' }} />
          ))}
          <div className='flex justify-evenly'>
            <button onClick={() => handleActiveCommentClick(index)}>
            <FontAwesomeIcon icon={faComment} />
            {messages[index] && comments[messages[index].postId] && comments[messages[index].postId].length > 0 && (
              <span className="ml-1">{comments[messages[index].postId].length}</span>
            )}
        </button>

            <button
              onClick={() => handleThumbsUp(index)}
              className={likes[index] === 1 ? 'text-primary' : ''}
            >
              <FontAwesomeIcon icon={faThumbsUp} />
      {likes[index] !== undefined && Number(likes[index]) > 0 && <span className="ml-1">{likes[index]}</span>}
                  </button>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Homer;
