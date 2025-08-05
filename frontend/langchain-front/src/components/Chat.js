import React, { useState } from "react";
import axios from "axios";

function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput("");
    setMessages([...messages, { user: userMsg, ai: null }]);

    try {
      const response = await axios.post("http://localhost:8001/chat", {
        question: userMsg,
      });
      const aiAnswer = response.data.answer;
      setMessages((msgs) => {
        const newMsgs = [...msgs];
        newMsgs[newMsgs.length - 1].ai = aiAnswer;
        return newMsgs;
      });
    } catch (error) {
      setMessages((msgs) => {
        const newMsgs = [...msgs];
        newMsgs[newMsgs.length - 1].ai = "Error: Could not get response";
        return newMsgs;
      });
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>LangChain Chat</h2>
      <div style={{ 
        height: '400px', 
        border: '1px solid #ccc', 
        borderRadius: '8px', 
        padding: '20px', 
        marginBottom: '20px',
        overflowY: 'auto',
        backgroundColor: '#f9f9f9'
      }}>
        {messages.map((m, idx) => (
          <div key={idx} style={{ marginBottom: '15px' }}>
            <div style={{ 
              backgroundColor: '#007bff', 
              color: 'white', 
              padding: '10px', 
              borderRadius: '8px', 
              marginBottom: '5px',
              maxWidth: '80%',
              marginLeft: 'auto'
            }}>
              <strong>You:</strong> {m.user}
            </div>
            {m.ai && (
              <div style={{ 
                backgroundColor: '#e9ecef', 
                padding: '10px', 
                borderRadius: '8px',
                maxWidth: '80%'
              }}>
                <strong>AI:</strong> {m.ai}
              </div>
            )}
            {!m.ai && (
              <div style={{ 
                backgroundColor: '#e9ecef', 
                padding: '10px', 
                borderRadius: '8px',
                maxWidth: '80%'
              }}>
                <strong>AI:</strong> <em>Thinking...</em>
              </div>
            )}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask your question"
          style={{ 
            flex: 1, 
            padding: '10px', 
            borderRadius: '4px', 
            border: '1px solid #ccc',
            fontSize: '16px'
          }}
        />
        <button 
          onClick={sendMessage}
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat; 