import React, { useState } from 'react';
import SelectUser from './SelectUser';

const CreateChat = ({createChat, users}) => {
  
  const [chatName, setChatName] = useState('');
  const [recipient, setRecipient] = useState(users[0]);

  return (
    <div className="panel">
      <label>Nombre: </label>
      <input type="text" className="form-control mb-3" placeholder="Ingresa un nombre para el grupo"
      onChange={e=> setChatName(e.target.value)} value={chatName}/>
      <label>Elija miembros (Ctrl + click) :</label>
      <SelectUser users={users} setRecipient={setRecipient}/>
      <div className="d-flex justify-content-end">
        <button className="btn btn-dark" onClick={()=> createChat(recipient, chatName, 'chats')} disabled={!chatName || !recipient }>Crear</button>
      </div>
    </div>
  )
}

export default CreateChat;