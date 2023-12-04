import React, { useState } from 'react';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const QuestionMarkButton = () => {
  const [showModal, setShowModal] = useState(false);

  const handleQuestionMarkClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <FontAwesomeIcon
        icon={faQuestion}
        className='text-gray border border-gray rounded-full p-2 mx-1 cursor-pointer'
        onClick={handleQuestionMarkClick}
      />

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white p-8 border rounded shadow-lg">
            <p>This is more detailed information in a modal.</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionMarkButton;
