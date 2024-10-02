import { useState } from 'react';
import '../assets/css/modal.css';

export default function Modal({
  message,
  setMessage,
  closeModal,
  setCloseModal,
}) {
  const messageHandler = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  function localStorageHandler() {
    const userToDM = localStorage.getItem('DM-to');
    localStorage.removeItem('DM-to');
    return userToDM;
  }

  const submitMessageHandler = (e) => {
    e.preventDefault();
    const userToDM = localStorageHandler();
    const parsedUserToDM = JSON.parse(userToDM);
    // console.log(parsedUserToDM.id.name);
    const userId = parsedUserToDM.id.name;
    localStorage.setItem(`${userId}-${crypto.randomUUID()}`, message);

    setCloseModal('none');
  };

  return (
    <div className='modal-section' style={{ display: closeModal }}>
      <form onSubmit={submitMessageHandler} className='modal-form'>
        <textarea
          placeholder={'Write your message'}
          value={message}
          onChange={messageHandler}
          required
        ></textarea>
        <div>
          <button className='modal-button'>Send</button>
          <button
            onClick={() => {
              setMessage('');
              setCloseModal('none');
            }}
            className='modal-button'
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
}
