"use client";
import { useState } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ text: "Hello! How can I help you?", sender: "bot" }]);
  const [input, setInput] = useState("");

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);

    // Simulating a bot response
    setTimeout(() => {
      const botResponse = { text: "cnstact this number 8827219873 🚀", sender: "bot" };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);

    setInput("");
  };

  return (
    <>
      {/* Chatbot Icon (Floating Button) */}
      <button
        onClick={toggleChatbot}
        className="fixed bottom-1 right-5 w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-all"
      >
        💬
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-16 right-5 w-80 bg-white shadow-lg rounded-lg p-3 border">
          {/* Chat Header */}
          <div className="flex justify-between items-center border-b pb-2">
            <h2 className="text-lg font-semibold">Chatbot</h2>
            <button onClick={toggleChatbot} className="text-red-500 font-bold">
              ✖
            </button>
          </div>

          {/* Chat Messages */}
          <div className="h-64 overflow-y-auto p-2">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 text-${msg.sender === "user" ? "right" : "left"}`}>
                <span className={`px-3 py-1 rounded ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="flex mt-2">
            <input
              type="text"
              className="flex-1 border p-2 rounded"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded ml-2" onClick={handleSend}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
