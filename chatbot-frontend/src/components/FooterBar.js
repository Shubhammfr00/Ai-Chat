import React from "react";
import { FooterBar, InputBox, IconBtn } from "../styles/StyledComponents";
import { FaPaperPlane, FaSync } from "react-icons/fa";

const FooterBarComponent = ({ input, setInput, handleSubmit, handleReset }) => (
  <FooterBar onSubmit={handleSubmit}>
    <InputBox
      type="text"
      placeholder="Type your message..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      autoFocus
    />
    <IconBtn type="submit" title="Send">
      <FaPaperPlane />
    </IconBtn>
    <IconBtn type="button" title="Reset chat" onClick={handleReset}>
      <FaSync />
    </IconBtn>
  </FooterBar>
);

export default FooterBarComponent; 