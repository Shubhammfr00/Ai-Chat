import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  transition: background 0.3s, color 0.3s;
}
`;

export const Corner = styled.div`
  position: absolute;
  ${({ pos }) => (pos === "tl" ? "top:16px;left:18px;" : "")}
  ${({ pos }) => (pos === "br" ? "bottom:14px;right:18px;" : "")}
  font-size: 15px;
  opacity: 0.6;
`;

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const GlassPanel = styled.div`
  max-width: 430px;
  width: 140vw;
  min-height: 520px;
  background: ${({ theme }) => theme.bgAlt};
  border-radius: 2rem;
  box-shadow: 0 12px 36px rgba(40,64,140,0.10), 0 1.5px 7px ${({ theme }) => theme.accent}20;
  padding: 42px 30px 100px;
  position: relative;
  display: flex; 
  flex-direction: column;
  transition: background 0.3s;
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 2.1rem;
  text-align: center;
  margin: 0 0 4px 0;
  letter-spacing: -.03em;
  color: ${({ theme }) => theme.accent};
`;

export const Subtitle = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.text}BB;
  margin: 0 0 28px 0;
  font-size: 1.06rem;
`;

export const ChatList = styled.div`
  flex: 1 1 auto;
  padding: 5px 0 0 0;
  overflow-y: auto;
  margin-bottom: 10px;
  scrollbar-width: thin;
`;

export const BubbleRow = styled.div`
  display: flex;
  flex-direction: ${({ you }) => (you ? "row-reverse" : "row")};
  align-items: flex-end;
  margin-bottom: 10px;
`;

export const Bubble = styled.div`
  max-width: 80%;
  padding: 13px 18px;
  background: ${({ you, theme }) => (you ? theme.usrBubble : theme.botBubble)};
  color: ${({ you, theme }) => (you ? theme.usrText : theme.text)};
  border-radius: 1.4em;
  border-bottom-right-radius: ${({ you }) => (you ? "0.3em" : "1.4em")};
  border-bottom-left-radius: ${({ you }) => (!you ? "0.3em" : "1.4em")};
  box-shadow: 0 3px 14px rgba(60,90,150,0.09);
  font-size: 0.98em;
  white-space: pre-wrap;
  animation: appearMsg .6s cubic-bezier(.4,1.8,.4,1) both;
  @keyframes appearMsg {
    0% {transform: translateY(16px) scale(0.95); opacity: 0;}
    100% {transform: none; opacity: 1;}
  }
`;

export const FooterBar = styled.form`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;  // Ensures padding doesn't increase total width
  display: flex;
  gap: 8px;
  background: ${({ theme }) => theme.bgAlt}BB;
  padding: 18px 27px;
  border-radius: 0 0 2rem 2rem;
  border-top: 1.5px solid ${({ theme }) => theme.secondary};
  box-shadow: 0 2px 12px rgba(9,18,77,0.06);
`;


export const InputBox = styled.input`
  flex: 1;
  padding: 12px 18px;
  border-radius: 2em;
  border: 1.5px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.input};
  color: ${({ theme }) => theme.text};
  font-size: 1em;
  outline: none;
  &:focus { border-color: ${({ theme }) => theme.accent}; }
  transition: border 0.2s;
`;

export const IconBtn = styled.button`
  background: ${({ theme }) => theme.accent};
  color: #fff;
  border: none;
  border-radius: 1.8em;
  width: 2.4em;
  height: 2.4em;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1em;
  cursor: pointer;
  transition: background .13s;
  margin-left: 2px;
  &:hover { background: ${({ theme }) => theme.text}EE; color:${({ theme }) => theme.accent}; }
`;

export const UploadArea = styled.div`
  padding: 16px 0 0 0;
  display: flex;
  align-items: center;
  gap: 19px;
  margin-bottom: 12px;
`;

export const FileInputLabel = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.accent};
  font-weight: 500;
  gap: 7px;
  &:hover {
    text-decoration: underline;
  }
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const UploadMsg = styled.div`
  margin-left: 12px;
  color: ${({ error, theme }) => (error ? "tomato" : theme.accent)};
  font-size: 0.98em;
`;

export const ThemeSwitch = styled(IconBtn)`
  position: absolute;
  top: 18px;
  right: 22px;
  width: 2.3em; height: 2.3em;
  font-size: 1.1em;
  border-radius: 100px;
  background: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.accent} ;
`; 