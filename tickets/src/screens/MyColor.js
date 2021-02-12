import React, { useState, useEffect , useContext } from "react";
import firebase from "../utils/firebase";
import ColorCard from "../component/ColorCard";

import { LoginContext } from "./LoginContext";
import { Client, AccountBalanceQuery, PrivateKey } from "@hashgraph/sdk";

export default function MyColor() {


    let NAccId;
    
    const { prKey } = useContext(LoginContext);
    
    const NPrKey = PrivateKey.fromString(prKey);

    const NPblKey = NPrKey.publicKey;
    

    firebase
    .firestore()
    .collection("User")
    .doc(NPblKey.toString())
    .get()
    .then((doc) => {
        
        NAccId = doc.data().AccId;

        localStorage.setItem("H", NAccId);
    });



  const [K, SetK] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("Color")
      .onSnapshot((snapshot) => {
        SetK(snapshot.docs.map((doc) => doc.data()));

        console.log(K);
      });
  }, []);

  return (
    <div id="hh">
      {K.map((K, index) => (
        <>
          <ColorCard K={K} />
        </>
      ))}
    </div>
  );
}
