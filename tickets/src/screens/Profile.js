import React , {useContext} from 'react'
import {LoginContext} from "./LoginContext";
import {
  Client,
  TokenCreateTransaction,
  PublicKey,
  PrivateKey,
  TopicCreateTransaction,
  TopicMessageSubmitTransaction,
} from "@hashgraph/sdk";


function Profile() {
  const {prKey} = useContext(LoginContext);
  

  
  return (
    <>
      <h1>Profile</h1>
      <h2>Private key : {prKey}</h2>
      

    </>
  )
}

export default Profile