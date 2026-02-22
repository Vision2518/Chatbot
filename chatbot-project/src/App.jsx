import { useState} from "react";
import {ChatInput} from './components/ChatInput';//importing component without default export
import ChatMessages from './components/ChatMessages';
import "./App.css";
function App() {
  const [chatMessages, setChatMessages] = useState([
    {
      message: "hello chatbot",
      sender: "user",
      id: "id1",
    },
    {
      message: "Hello! how can i help you",
      sender: "robot",
      id: "id2",
    },
    {
      message: "Can you get me todays date?",
      sender: "user",
      id: "id3",
    },
    {
      message: "Sure! Today is Janaury 7",
      sender: "robot",
      id: "id4",
    },
  ]);
  return (
    <>
      <div className="app-container">
        <ChatMessages
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
        />
        <ChatInput
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
        />
      </div>
    </>
  );
}
export default App;
