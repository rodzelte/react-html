import { useState } from 'react'
import './App.css'

import ChatbotInput from './components/ChatbotInput.jsx'
import ChatMessages from './components/ChatMessages.jsx'

function App() {
  const [chatMessages, setChatMessages] = useState([])

  return (
    <div className='app-container'>
      {chatMessages.length === 0 && (
        <p className='welcome-message'>
          Welcome to the chatbot project! Send a message using the textbox below.
        </p>
      )}
      <ChatMessages chatMessages={chatMessages} />
      <ChatbotInput chatMessages={chatMessages} setChatMessages={setChatMessages} />
    </div>
  )
}

export default App
