import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSendMessage = async () => {
    try {
      const res = await axios.post('/api/v1/chat:generate', {
        model: 'gemini',
        messages: [{ text: message }],
      }, {
        headers: {
          'Authorization': `Bearer AIzaSyB4mmwpAYDiCVf0L_tCZuOVwfn4AHUL2Jw`,
          'Content-Type': 'application/json',
        },
      });
      setResponse(res.data);
    } catch (error) {
      console.error('Error sending message:', error);
      setResponse('Error sending message'); // Menampilkan pesan kesalahan
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message"
        className="border rounded-lg p-2 w-full mb-2"
      />
      <button onClick={handleSendMessage} className="bg-blue-500 text-white rounded-lg p-2 w-full">
        Send
      </button>
      {response && <div className="mt-4 p-2 border rounded-lg">{response}</div>}
    </div>
  );
};

export default Chat;
