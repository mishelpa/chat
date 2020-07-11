import {useState, useEffect} from 'react';
import {saveDataBase, getDataBase} from '../../conexion/database';
import { v4 as uuid } from 'uuid';

const useChats = (userId) => {

  const [currentChat, setCurrentChat] = useState(null);
  const [myActivateChats, setMyActivateChats] = useState([]);
  const [myPrivateChats, setMyPrivateChats] = useState([]);
  const [currentChatMessages, setCurrentChatMessages] = useState([]);
  const [currentChatUsers, setCurrentChatUsers] = useState([]);
  
  useEffect(()=> {
    getDataBase(`/users/${userId}/chats`, res => {
      setMyActivateChats(Object.keys(res));
    });
  
    getDataBase(`/users/${userId}/chatPrivate`, res => {
      setMyPrivateChats(Object.keys(res));
    });

    getDataBase(`/chats/${currentChat}/messages`, res => {
      setCurrentChatMessages(Object.values(res));
    });

    getDataBase(`/chats/${currentChat}/users`, res => {
      setCurrentChatUsers(Object.values(res));
    });

  }, [currentChat, userId]);
  
  const sendMessage = (chatName, body) => {
    const messageId = uuid();
    saveDataBase(`/chats/${chatName}/messages/${messageId}`, {
      body, sender: userId, created: new Date().toISOString(),
    })
  };
  
  const createChat = (recipient, chatName, url) => {
    saveDataBase(`users/${userId}/${url}/${chatName}`, chatName);
    saveDataBase(`/${url}/${chatName}/messages`, {});
    saveDataBase(`/${url}/${chatName}/users/${userId}`, userId);
    setCurrentChat(chatName);
    recipient.forEach(rec => {
      saveDataBase(`users/${rec}/${url}/${chatName}`, chatName);
      saveDataBase(`/${url}/${chatName}/users/${rec}`, rec);
    })
  }
  
  return {
    sendMessage,
    createChat,
    currentChat,
    myActivateChats,
    myPrivateChats,
    currentChatMessages,
    currentChatUsers,
    setCurrentChat
  };
  };

  export default useChats;