import { useState } from "react";
import { Chatbot } from "supersimpledev";
import "./ChatInput.css";
export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");
  function saveTextInput(event) {
    setInputText(event.target.value);
  }
  function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];
    setChatMessages(newChatMessages);
    const response = Chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);
    setInputText("");
  }

  return (
    //avoid ( this in new line
    <>
      <div className="chat-input-container">
        {/*Fragment which works as div to group multiple element together*/}
        <input
          placeholder="Send a message to Chatbot"
          size="30"
          onChange={saveTextInput}
          value={inputText}
          className="chat-input"
        />
        <button onClick={sendMessage} className="send-button">
          Send
        </button>
      </div>
    </>
  );
}
