import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import LoadingSpinner from '../assets/loading-spinner.gif'
import '../App.css'

function ChatbotInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('')

  function saveInputText(event) {
    setInputText(event.target.value)
  }

  async function sendMessage() {
    // Clear the textbox at the top now because the Chatbot
    // will take some time to load the response. We want
    // to clear the textbox immediately rather waiting
    // for the Chatbot to finish loading.
    setInputText('')

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID(),
      },
    ]

    setChatMessages([
      ...newChatMessages,
      // This creates a temporary Loading... message.
      // Because we don't save this message in newChatMessages,
      // it will be removed later, when we add the response.
      {
        message: <img src={LoadingSpinner} className='loading-spinner' />,
        sender: 'robot',
        id: crypto.randomUUID(),
      },
    ])

    const response = await Chatbot.getResponseAsync(inputText)
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID(),
      },
    ])
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      sendMessage()
    }
  }

  return (
    <div className='chat-input-container'>
      <input
        placeholder='Send a message to Chatbot'
        size='30'
        onKeyDown={handleKeyDown}
        onChange={saveInputText}
        value={inputText}
        className='chat-input'
      />
      <button onClick={sendMessage} className='send-button'>
        Send
      </button>
    </div>
  )
}

export default ChatbotInput
