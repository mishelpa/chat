import React from 'react';
import './App.css';
import Connect from './components/Connect';
import ActiveChats from './components/ActiveChats';
import ChatWindow from './components/ChatWindow';
import NavBar from './components/NavBar';
import ListUsers from './components/ListUsers';
import ModalCreate from './components/ModalCreate';
import User from './components/User';
import styled from 'styled-components';
import useAuth from './components/useHooks/useAuth';
import useChats from './components/useHooks/useChats';
const DivApp = styled.div`
background: white;
height: 100vh;
`; 

function App() {

    const [userId, setUserId, users, connect] = useAuth();

    const {
        sendMessage,
        createChat,
        currentChat,
        myActivateChats,
        myPrivateChats,
        currentChatMessages,
        currentChatUsers,
        setCurrentChat
        } = useChats(userId);

    
  return (
    <DivApp className="App">
      { !userId ? <Connect connect={connect} /> : (
        <section>
          <NavBar user={userId} setUserId={setUserId}/>
          <div className="container-fluid mt-4">
            <div className="row">
              <div className="col-md-3 col-12 mb-4">
                <User user={userId}/>
                <ListUsers users={users.filter(user=> user !== userId)} createChat= {createChat} userCurrent={userId}/>
              </div>
              <div className="col-md-3 col-12 mb-4">
                <div className="d-flex justify-content-between">
                  <h3>Chats</h3> 
                  <ModalCreate createChat= {createChat} users={users.filter(user => user !== userId)}/>
                </div>
                <ActiveChats setCurrentChat = {setCurrentChat} myActivateChats= {myActivateChats} myPrivateChats= {myPrivateChats}/>
              </div>
              <div className="col-md-6 col-12 mb-4 container-fluid">
                {currentChat && <ChatWindow sendMessage= {sendMessage} currentUser={userId} currentChat={currentChat} messages={currentChatMessages} users={currentChatUsers}/>}
              </div>
            </div>
          </div>
        </section>
      )}
    </DivApp>
  );
}

export default App;
