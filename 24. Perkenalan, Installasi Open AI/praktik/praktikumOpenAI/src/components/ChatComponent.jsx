import React, { useState } from 'react';
import axios from 'axios';

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const apiKey = import.meta.env.VITE_API_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    setInput('');

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [...messages, userMessage],
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const aiMessage = {
        role: 'assistant',
        content: response.data.choices[0].message.content,
      };

      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error('Error:', error);
      alert('Gagal mendapatkan respons dari API');
    }
  };

  return (
    <div className="flex flex-col w-full max-w-md mx-auto mt-10 p-4 border border-gray-300 rounded-lg shadow-md bg-white">
      <div className="flex flex-col space-y-4 overflow-y-auto mb-4 max-h-80 p-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg max-w-xs ${
              msg.role === 'user'
                ? 'self-end bg-blue-500 text-white'
                : 'self-start bg-gray-200 text-black'
            }`}
          >
            {msg.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ketik pesan..."
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Kirim
        </button>
      </form>
    </div>
  );
};

export default ChatComponent;
