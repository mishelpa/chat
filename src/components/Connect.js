import React, { useState } from 'react';
import styled from 'styled-components'

const Title = styled.h1`
  color: #110F29;
  text-align: center;
`; 

const FormUser = styled.div`
  width: 60%;
`;

const ImgUser = styled.img`
  max-height: 100%;`
const Connect = ({connect}) => {

  const [ username, setUserName] = useState('');
  return (
    <section className="container-fluid">
      <div className="row">
        <div className="col-md-6 col-12 px-0">
          <ImgUser className = "img-fluid" src="https://previews.123rf.com/images/prettyvectors/prettyvectors1902/prettyvectors190200004/117030328-two-people-man-and-woman-character-talking-to-a-smart-phone-online-communication-email-message-conce.jpg"/>
        </div>
        <div className="col-md-6 col-12 my-5 d-flex flex-column justify-content-around align-items-center">
          <Title>ID Business Intelligence</Title>
          <FormUser className="d-flex flex-column">
            <label className="font-weight-bold"> Nombre:  </label>
            <input type="text" className="form-control mb-3" placeholder="Ingresa tu nombre" value={username}
            onChange={e=> setUserName(e.target.value)}/>
            <button className="btn btn-dark" onClick={()=> connect(username)} disabled={!username}>Ingresar</button>
          </FormUser>
          <p>@Copyright 2020</p>
        </div>
      </div>
    </section>
  )
}

export default Connect;