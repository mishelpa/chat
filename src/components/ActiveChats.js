import React from 'react';
import MaterialTable from 'material-table';

const ActiveChats = ({ myActivateChats, setCurrentChat, myPrivateChats}) => {

  const arrActivateChats = myActivateChats.map(activate => {
    return {'group': activate}})

  const arrPrivateChats = myPrivateChats.map(chat => {
    return {'private': chat}
  })

  const tableActivate = {
    columns: [
      { title: 'GRUPOS', field: 'group' ,  headerStyle: {
        color: '#7774E1'},
      }],
    data: arrActivateChats,
  }

  const tablePrivate = {
    columns: [
      { title: 'INDIVIDUAL', field: 'private' ,  headerStyle: {
        color: '#7774E1'},
      }],
    data: arrPrivateChats,
  }

  return(
    <section>
    <MaterialTable
      title=""
      columns= {tableActivate.columns}
      data={tableActivate.data}
      onRowClick={((evt, selectedRow) => setCurrentChat(selectedRow.group))}
      localization={{
        toolbar:{
          searchPlaceholder:'Buscar Grupo' 
        }
      }}
      options={{
        searchFieldAlignment: 'left',
        paging: false
      }}
    />
    <hr/>
    <MaterialTable
    title=""
    columns= {tablePrivate.columns}
    data={tablePrivate.data}
    onRowClick={((evt, selectedRow) => setCurrentChat(selectedRow.private))}
    localization={{
      toolbar:{
        searchPlaceholder:'Buscar Individual' 
      }
    }}
    options={{
      searchFieldAlignment: 'left',
      paging: false
    }}
  />
</section>
)};

export default ActiveChats;
