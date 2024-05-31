import axios from "axios";

import React, { useState, useEffect } from "react";
import "./chat.styles.css";
import ChatMessage from "../messeges/chat-messages.component";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:5000/api/messages/",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        console.log("Server response: ", res);
        setMessages(res.data);
      })
      .catch((err) => {
        console.log("Server respondend with error: ", err);
      });
  }, []);

  const handleSend = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, id: Date.now() }]);
      setInput("");

      axios({
        method: "post",
        url: "http://localhost:5000/api/messages/",
        data: {
          text: input,
        },
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => {
          console.log("Server response: ", res);
        })
        .catch((err) => {
          console.log("Server respondend with error: ", err);
        });
    }
  };

  return (
    <div className="chat">
      <div className="messages">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message.text} />
        ))}
      </div>
      <form className="input-form" onSubmit={handleSend}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
