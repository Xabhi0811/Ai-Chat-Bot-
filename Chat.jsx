import React, { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { user: "You", text: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await fetch("http://localhost:3000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      setMessages([...newMessages, { user: "Chatbot", text: data.reply }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages([...newMessages, { user: "Chatbot", text: "Could not fetch response." }]);
    }
  };


  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((msg, index) => (
          <p key={index}><b>{msg.user}:</b> {msg.text}</p>
        ))}
      </div>
      <input
        type="text"
        className="input-box"
        placeholder="Ask me anything about safety..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="send-btn" onClick={sendMessage}>Send</button>
    </div>
  );
}
