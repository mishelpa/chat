import {useState, useEffect} from 'react';
import {saveDataBase, getDataBase} from '../../conexion/database';

const useAuth = () => {
  const [userId, setUserId] = useState(null);
  const [users, setUsers] = useState(null);
  
  useEffect(()=> {
    getUsers();
  }, []);
  
  const connect = (username) => {
    if ( !users || !users.includes(username) ){
      saveDataBase(`/users/${username}`, true);
    }
    
    setUserId(username);
  }
  
  const getUsers = () => {
    getDataBase('/users', res => {
      setUsers(Object.keys(res))
    })
  }
  
  return [userId,setUserId, users, connect];
  }

  export default useAuth;