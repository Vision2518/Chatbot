import { useState,useRef,useEffect } from 'react'
import Chatbot from 'supersimpledev'
import './App.css'
function ChatInput({ chatMessages, setChatMessages }) {
        const [inputText, setInputText] =useState("");
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
      function ChatMessage({ message, sender }) {
        return (
          <div
            className={
              sender === "user" ? "chat-message-user" : "chat-message-robot"
            }
          >
            {sender === "robot" && (
              <img src="robot.png" className="chat-message-profile" />
            )}
            <div className="chat-message-text">{message}</div>
            {sender === "user" && (
              <img src="user.png" className="chat-message-profile" />
            )}
          </div>
        );
      }
      function ChatMessages({ chatMessages }) {
        const chatMessagesRef = useRef();
        useEffect(() => {
          const containerElem=chatMessagesRef.current;
          if(containerElem)
        {
          containerElem.scrollTop=containerElem.scrollHeight;
        }
        });
        return (
          <div className="chat-messages-container"
          ref={chatMessagesRef}>
            {/*ChatInput()same as component*/}
            {chatMessages.map((chatMessage) => {
              return (
                <ChatMessage
                  message={chatMessage.message}
                  sender={chatMessage.sender}
                  key={chatMessage.id}
                />
              );
            })}
          </div>
        );
      }
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
export default App
