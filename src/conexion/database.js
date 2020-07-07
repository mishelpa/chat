import {database} from 'firebase';

export const getDataBase = (dbString, callback) => {
  const ref = database().ref(dbString);
  ref.on('value', snapshot => {
    if(snapshot.val()) {
      callback(snapshot.val());
    }
  });
}

export const saveDataBase = (dbString, val) => {
  database().ref(dbString).set(val);
}