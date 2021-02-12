import React , {useContext , useState} from 'react'
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
  
  /* window.localStorage.setItem("Pr",prKey);
  var pr = localStorage.getItem("Pr"); */

  if (!localStorage.getItem("Pr")) {
    var pr = window.localStorage.setItem("Pr", prKey);
  }

  /* const [P,SetP] = useState('') */
  /* SetP(prKey);
  console.log(P) */

  return (
    <>
      <h1>Profile</h1>
      <h2>Private key : {pr}</h2>
      <h3>{pr}</h3>
      

    </>
  )
}

export default Profile