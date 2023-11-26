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
    <div className="p-2 border-2 border-primary rounded-md m-2">

  <div className="flex flex-col md:flex-row items-center">
    <img src="/face.jpg" alt="" width={"30px"} className="rounded-full mx-2 m-2 " />

    <textarea
      className="break-words w-full h-32 p-2 rounded-md border text-black "
      placeholder='Place a message'
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />

    {showEmojiPicker && (
      <div className="md:absolute right-0 top-20">
        <EmojiPicker width="350px" height="550px" onEmojiClick={handleEmojiSelect} />
      </div>
    )}

    <div className="flex items-center mt-2 md:mt-0">
      <FontAwesomeIcon
        icon={faFaceSmile}
        onClick={handleEmojiClick}
        className="px-1 pt-2 text-gray text-2xl cursor-pointer"
      />

      <label htmlFor="imageUpload" className="text-gray text-2xl cursor-pointer px-1 pt-2">
        <FontAwesomeIcon icon={faImage} />
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

  <button
    className={`border rounded-full p-1 px-5 hover:bg-secondary mt-2 text-white ${
      inputValue.trim() === '' && images.length === 0 ? 'bg-gray cursor-not-allowed' : 'bg-primary cursor-pointer'
    }`}
    onClick={handleSendMessage}
    disabled={inputValue.trim() === '' && images.length === 0}
    style={inputValue.trim() === '' && images.length === 0 ? { pointerEvents: 'none' } : undefined}
  >
    Post
  </button>
</div>

    <div className="flex p-3 mx-3 flex-wrap">
  {imagePreviews.map((preview, index) => (
    <div key={index} className="block  items-center mb-2 md:mr-2">
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



      {/* Render other messages */}
      {messages.map((message, index) => (
        <div key={index} className='z-0 border-2 border-primary  max-w-3xl  sm:max-w-7xl shadow-lg  rounded-sm  mt-3 mx-2 '>

          <div className=' text-left pl-2 block sm:flex  shadow-md   pt-1  items-center gap-1'>
            <img src="/face.jpg" alt="" width={"32px"} className='rounded-full  mb-1' />
            <h1 className=''>John Bravo</h1>
            <h1 className='text-gray'>useracc</h1>
            <p className='text-gray'>date</p>
            <FontAwesomeIcon
              icon={faGear}
              className='m-auto-left p-2 text-primary'
              style={{ marginLeft: 'auto' }}
              onClick={() => handlePostMenuClick(index)}
            />

            {activeComment && (
              <div className='fixed     z-50 border top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl max-w-full  sm:w-2/3 lg:w-1/3 h-auto sm:h-2/3 bg-white shadow-lg items-center '>





               <div className='flex w-full'>
  <button className='absolute top-0 right-0 p-2 text-xl' onClick={() => handleCommentClose()}>X</button>
  <div className='sm:flex flex flex-col justify-center items-center w-full sm:justify-center gap-3 sm:items-center pt-3 rounded-md'>
    <img src="/face.jpg" alt="" className='ml-2 w-12 h-12 rounded-full' />
    <div className='block w-full max-w-xl px-4 mx-2 rounded-sm'>
      <textarea
        value={comment}
        className='p-4 w-full h-32 border rounded focus:outline-none resize-none'
        onChange={(e) => setComment(e.target.value)}
        placeholder="Type a comment"
      />
    </div>
    <button
      className={`border rounded-full  w-1/2 py-2 p-1 px-4  hover:bg-secondary  text-white ${
        comment.trim() === '' ? 'bg-gray hover:bg-lowgray' : 'bg-primary cursor-pointer'
      }`}
      onClick={() => handlePostComment()}
      disabled={comment.trim() === ''}
    >
      Post
    </button>
  </div>
</div>


                

              <div className='flex pt-3   text-left justify-center'>
  {activePostIndex !== null && messages[activePostIndex] && comments[messages[activePostIndex].postId] && comments[messages[activePostIndex].postId].length > 0 && (
    <div className='overflow-scroll  h-64 sm:h-80 w-full max-w-screen-md mx-auto'>
      {comments[messages[activePostIndex].postId].map((comment, commentIndex) => (
        <div className='p-1 m-2  flex flex-col sm:flex-row items-center rounded-lg bg-lowgray gap-4 ' key={commentIndex}>
          <div >
              <p className='mb-2 text-gray sm:mb-0'>username</p>
              <p className='text-gray'>14:22</p>
          </div>
          <p className='mb-2 sm:mb-0 w-full sm:w-80 break-words'>{comment.text}</p>
          
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
       
            <div className='text-left ml-4 py-2 px-1 break-words whitespace-normal  '>
            {message.text}
            </div>
    
          
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
