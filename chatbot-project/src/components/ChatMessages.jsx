import { useEffect, useRef } from 'react'
import ChatbotMessage from './ChatbotMessage.jsx'

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useRef(null)

  useEffect(() => {
    const containerElem = chatMessagesRef.current
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight
    }
  }, [chatMessages])

  return (
    <div className='chat-messages-container' ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatbotMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        )
      })}
    </div>
  )
}

export default ChatMessages
