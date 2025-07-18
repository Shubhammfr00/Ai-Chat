import React from "react";
import { ChatList, BubbleRow, Bubble } from "../styles/StyledComponents";

const ChatListComponent = ({ messages, chatEndRef }) => (
  <ChatList>
    {messages.map((msg, i) => (
      <BubbleRow key={i} you={msg.role === "user"}>
        <Bubble you={msg.role === "user"}>{msg.text}</Bubble>
      </BubbleRow>
    ))}
    <div ref={chatEndRef}></div>
  </ChatList>
);

export default ChatListComponent; 