import React from "react";
import "./chat-messages.styles.css";

const ChatMessage = ({ message }) => {
  return <div className="chat-message">{message}</div>;
};

export default ChatMessage;
