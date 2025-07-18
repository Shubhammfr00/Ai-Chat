import React, { useState, useRef, useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./styles/theme";
import { Global, Corner, Container, GlassPanel, Title, Subtitle, ThemeSwitch } from "./styles/StyledComponents";
import { FaMoon, FaSun } from "react-icons/fa";
import UploadAreaComponent from "./components/UploadArea";
import ChatListComponent from "./components/ChatList";
import FooterBarComponent from "./components/FooterBar";

// Main App Component
function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [theme, setTheme] = useState("light");
  const [file, setFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState("");
  const [uploadError, setUploadError] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handlers
  const handleSubmit = useCallback(async (e) => {
  e && e.preventDefault();
  const inputText = input;
  setInput("");

  if (!inputText.trim()) return;
  setMessages((prev) => [...prev, { role: "user", text: inputText }]);

  // Automatically switch between local and production
  const isLocalhost = window.location.hostname === "localhost";
  const API_BASE_URL = isLocalhost
    ? "http://127.0.0.1:8000"
    : "https://ai-chat-y8no.onrender.com";

  try {
    const res = await axios.post(`${API_BASE_URL}/chat`, {
      message: inputText,
    });
    setMessages((prev) => [
      ...prev,
      { role: "bot", text: res.data.response },
    ]);
  } catch (err) {
    setMessages((prev) => [
      ...prev,
      { role: "bot", text: "Error connecting to backend." },
    ]);
    console.error("Chat error:", err);
  }
}, [input]);


  const handleReset = useCallback(() => {
    setMessages([]);
    setInput("");
    setUploadMessage("");
    setUploadError(false);
  }, []);

  const toggleTheme = useCallback(() => setTheme((t) => (t === "light" ? "dark" : "light")), []);

  const handleFileChosen = useCallback((evt) => {
    if (evt.target.files[0]) {
      setFile(evt.target.files[0]);
      setUploadMessage("");
      setUploadError(false);
    }
  }, []);

  const handleFileUpload = useCallback(async (e) => {
  e && e.preventDefault();
  if (!file) return;

  const isLocalhost = window.location.hostname === "localhost";
  const API_BASE_URL = isLocalhost
    ? "http://127.0.0.1:8000"
    : "https://ai-chat-y8no.onrender.com";

  const formData = new FormData();
  formData.append("file", file);
  setUploadMessage("Uploading...");
  setUploadError(false);

  try {
    const res = await axios.post(`${API_BASE_URL}/upload`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    const botReply = res.data.message || "PDF uploaded successfully.";
    setUploadMessage(botReply);
    setUploadError(false);
    setMessages((prev) => [...prev, { role: "bot", text: botReply }]);
  } catch (err) {
    const errMsg = "Error uploading PDF.";
    setUploadMessage(errMsg);
    setUploadError(true);
    setMessages((prev) => [...prev, { role: "bot", text: errMsg }]);
    console.error("Upload error:", err);
  }
}, [file]);


  // Memoized theme object
  const themeObj = useMemo(() => (theme === "light" ? light : dark), [theme]);

  return (
    <ThemeProvider theme={themeObj}>
      <Global />
      <Corner pos="tl">Inzint</Corner>
      <Corner pos="br">Made by Shubham</Corner>
      <Container>
        <GlassPanel>
          <ThemeSwitch onClick={toggleTheme} title="Switch theme">
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </ThemeSwitch>
          <Title>AI Chatbot</Title>
          <Subtitle>Ask anything, get instant answers</Subtitle>

          {/* Upload Area */}
          <UploadAreaComponent
            file={file}
            uploadMessage={uploadMessage}
            uploadError={uploadError}
            handleFileChosen={handleFileChosen}
            handleFileUpload={handleFileUpload}
          />

          {/* Chat List */}
          <ChatListComponent messages={messages} chatEndRef={chatEndRef} />

          {/* Footer Bar */}
          <FooterBarComponent
            input={input}
            setInput={setInput}
            handleSubmit={handleSubmit}
            handleReset={handleReset}
          />
        </GlassPanel>
      </Container>
    </ThemeProvider>
  );
}

export default App;
