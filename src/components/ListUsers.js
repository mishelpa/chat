/* import React from 'react';

const ListUsers = ({users, createChat, userCurrent}) => {
  return (
    <div className="container-fluid">
      <ul className="list-group">
        {users.map(user => (
          <li key={user} onClick={()=> createChat([user],`${userCurrent}-${user}` , 'chatPrivate')} className="list-group-item">{user}</li>
        ))}
      </ul>
      <ul>
        <li></li>
      </ul>
    </div>
  )
}

export default ListUsers; */

import React from 'react';
import MaterialTable from 'material-table';

export default function ListUsers({users, createChat, userCurrent}) {

  const arrUsers = users.map(user => {
    return {'user': user}})

  const tableUser = {
    columns: [
      { title: 'USUARIOS', field: 'user',headerStyle: { color: '#FF5722',}},
      ],
    data: arrUsers,
  }


  return (
    <section>
      <MaterialTable
        title=""
        columns={tableUser.columns}
        data={tableUser.data}
        onRowClick={((evt, selectedRow) => createChat([selectedRow.user],`${userCurrent}-->${selectedRow.user}` , 'chatPrivate'))}
        localization={{
          toolbar:{
            searchPlaceholder:'Buscar Usuario' 
          }
        }}
        options={{
          searchFieldAlignment: 'left',
          paging: false
        }}
      />
    </section>
  );
}