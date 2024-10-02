import { useEffect, useState } from 'react';
import '../assets/css/commentsSection.css';

export default function CommentsSection({ user }) {
  const [userMessages, setUserMessages] = useState([]);
  const userId = user.id.name;

  useEffect(() => {
    const messagesArray = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);

      if (key.startsWith(userId)) {
        const messageForUser = localStorage.getItem(key);

        if (messageForUser) {
          messagesArray.push(messageForUser);
        }
      }
    }

    const uniqueMessages = Array.from(new Set(messagesArray));

    setUserMessages(uniqueMessages);
  }, []);

  return (
    <div className='comments-section'>
      <h2>COMMENTS</h2>
      {userMessages.map((message, index) => (
        <div className='comment-box' key={index}>
          <p>{message}</p>
        </div>
      ))}
    </div>
  );
}
