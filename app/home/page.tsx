import { faComment, faFaceSmile, faGear, faImage, faL, faShare, faThumbsUp, faTimes } from '@fortawesome/free-solid-svg-icons';
import React, { useState, ChangeEvent, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InputEmoji from 'react-input-emoji';
import DropDownMenu from '@/components/DropDownMenu';

interface Comment {
  text: string;
}

interface Message {
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
  const [comments, setComments] = useState<{ [index: number]: Comment[] }>({});
  const [activePostIndex, setActivePostIndex] = useState<number | null>(null);
const [likes, setLikes] = useState<{ [index: number]: number }>({});

  
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

  console.log(newLikes)
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
    const newComments: { [index: number]: Comment[] } = { ...comments };
    newComments[activePostIndex] = newComments[activePostIndex] || [];
    newComments[activePostIndex].push({ text: comment });
    setComments(newComments);

    // Reset comment input value
    setComment('');
    console.log('New Comments State:', newComments);
  } else {
    console.error('Error: activePostIndex is null');
  }
};





   

  const handlePostMenuClick = (index: number) => {
    setShowPostMenu(!showPostMenu);
    setSelectedDropdown(index === selectedDropdown ? null : index);
  };

const handleMenuAction = (actionType: string, index: number) => {
  // Perform actions based on actionType
  switch (actionType) {
    case 'delete':
      const updatedMessages = messages.filter((_, i) => i !== index);
      setMessages(updatedMessages);

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
      <div className='p-2 border rounded-md m-2'>
        <div className='flex'>
          <img src="/123.png" alt="" width={"50px"} className='rounded-full mx-2' />

          <InputEmoji value={inputValue} onChange={setInputValue} placeholder="Type a message" />
          <div className='flex gap-3 justify-left mt-1  items-center text-lowgray'>
            <div>
              <label htmlFor="imageUpload" className='text-gray  text-2xl  cursor-pointer'>
                <FontAwesomeIcon icon={faImage} />
                <input
                  type="file"
                  id="imageUpload"
                  accept="image/*"
                  className="hidden"
                  multiple
                  onChange={handleImageChange}
                />
              </label>
            </div>
          </div>

          {imagePreviews.map((preview, index) => (
            <div key={index} className="block  items-center  ">
              <img
                src={preview}
                alt="preview"
                className="mt-2 mr-2"
                style={{ maxWidth: '100px', maxHeight: '100px' }}
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

      {/* Render other messages */}
      {messages.map((message, index) => (
        <div key={index} className='bg- border ml-2 rounded-sm mt-3'>

          <div className='flex gap-2 ml-3'>
            <img src="/123.png" alt="" width={"32px"} className='rounded-full' />
            <h1>name</h1>
            <h1>useracc</h1>
            <p>date</p>
            <FontAwesomeIcon
              icon={faGear}
              className='m-auto-left p-2 text-primary'
              style={{ marginLeft: 'auto' }}
              onClick={() => handlePostMenuClick(index)}
            />

            {activeComment && (
              <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl w-1/3 h-1/3 bg-white  shadow-lg items-center'>
                <button className='absolute top-0 right-0 p-1' onClick={() => handleCommentClose()}>X</button>
                <div className='flex items-center pt-7'>
                  <img src="/123.png" alt="" className='w-12  h-12 rounded-full' />
                 <InputEmoji value={comment} onChange={setComment} placeholder="Type a comment" />
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

                <div className='block  text-left'>
{activePostIndex !== null && comments[activePostIndex] && comments[activePostIndex].length > 0 && (
  <div>
    {comments[activePostIndex].map((comment, commentIndex) => (
      <div className='p-1' key={commentIndex}>username {comment.text} time</div>
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

          <div className='text-left ml-4'>{message.text}</div>
          {message.images && message.images.map((image, i) => (
            <img key={i} src={URL.createObjectURL(image)} alt="uploaded" className="mt-2  p-3" style={{ maxWidth: '100px', maxHeight: '100px' }} />
          ))}
          <div className='flex justify-evenly'>
            <button onClick={() => handleActiveCommentClick(index)}>
              <FontAwesomeIcon icon={faComment} />
              {comments[index] && comments[index].length > 0 && (
                <span className="ml-1">{comments[index].length}</span>
              )}
            </button>

            <button><FontAwesomeIcon icon={faShare} /></button>
            <button
              onClick={() => handleThumbsUp(index)}
              className={likes[index] === 1 ? 'text-primary' : ''}
            >
              <FontAwesomeIcon icon={faThumbsUp} />
              {likes[index] && likes[index] > 0 && <span className="ml-1">{likes[index]}</span>}
            </button>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Homer;
