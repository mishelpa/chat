import React, { useState } from 'react';
import styled from 'styled-components';

const Messages = styled.div`
background-color: #E1E0FF;
width: 60%;
`; 

const ChatWindow = ({messages = [], sendMessage, currentChat, users = [], currentUser}) => {
  const [messageBody, setMessageBody] = useState('');

  const sortedMessages = messages.sort((a,b) => new Date(a.created).valueOf() - new Date(b.created).valueOf());

  return (
    <div className="d-flex flex-column justify-content-between" style={{height: '100%',}}>
      <h2>{currentChat}</h2>
      <div className="messages">
        {sortedMessages.map((message, index) => (
          <div key={index} className={message.sender === currentUser ? "d-flex justify-content-end" : "d-flex justify-content-start" }>
            <Messages className={message.sender === currentUser ? "mb-2 p-2 bg-info text-white rounded-pill" :  "mb-2 p-2 rounded-pill"}  key={index}>{message.sender} : {message.body}</Messages>
          </div>
        ))}
      </div>
      <div className="send-message d-flex">
        <input value={messageBody} className="text-entry form-control rounded-pill"
        placeholder="Escribe un mensaje"
        onChange={e => setMessageBody(e.target.value)}></input>
        <button className="btn btn-inherit font-weight-bold" onClick={()=> sendMessage(currentChat, messageBody)}>Enviar</button>
      </div>
    </div>
  )
}

export default ChatWindow;