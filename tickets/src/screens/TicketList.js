import React, { useState, useEffect, useContext } from "react";
import TicketCard from '../component/TicketCard'
import firebase from "../utils/firebase";
import useKey from "../hooks/useKey";
import {
  Client,
  AccountBalanceQuery,
  PrivateKey
} from "@hashgraph/sdk";
import { LoginContext } from "./LoginContext";


import './TicketList.css'


/* const SellerAccId = "0.0.301906";
const SellerPblKey =
  "302a300506032b657003210044c714812aec04be8c2c2704d4f0432f49b2f2b3350aa69fdc9b9715de9a8d9a";
const SellerPrKey =
  "0x302e020100300506032b65700422042092d0f20b0324b71b55bf397a85c214bbb66e98c8869911fb30dd7b6a0d60b7a4";
 */

export default function TicketList() {
  



  const [T, SetT] = useState([]);
  // const [V, SetV] = useState(''); 

  // const [Key, SetKey] = useKey("");

  let NAccId;
  /* const [H, setH] = useState(""); */
  const { prKey } = useContext(LoginContext);
  //console.log(prKey);
  const NPrKey = PrivateKey.fromString(prKey);

  const NPblKey = NPrKey.publicKey;
  /* console.log(NPblKey.toString()); */
   

  firebase
    .firestore()
    .collection("User")
    .doc(NPblKey.toString())
    .get()
    .then((doc) => {
     /*  console.log(doc.data()); */
       NAccId = doc.data().AccId;
      /* console.log(NAccId); */
      /* setH(NAccId);
      console.log(H) */
      localStorage.setItem('H' , NAccId)
    });
    
      

  
    useEffect(async() => {
      

      console.log(localStorage.getItem("H"));
      const hala = localStorage.getItem("H");
      const client = Client.forTestnet();

          client.setOperator(hala, prKey);

          const query = await new AccountBalanceQuery()
            .setAccountId(hala)
            .execute(client);

          const a = query.tokens;

          for (const [key, value] of a) {


            /* console.log(key.toString(), value.toString()); */

            firebase
              .firestore()
              .collection("User")
              .doc(NPblKey.toString())
              .update({
                AccTickets: firebase.firestore.FieldValue.arrayUnion(
                  key.toString() + ":" + value.toString() + " "
                ),
              })
              .then(() => {
                console.log("Document successfully written!");
              })
              .catch((error) => {
                console.error("Error writing document: ", error);
              });

              
            /* SetT(key.toString())
            SetV(value.toString()) */
            /* t = key.toString();
            v = value.toString();
            
            console.log(t) */
            
          }

          // firebase
          //   .firestore()
          //   .collection("User")
          //   .doc(SellerPblKey)
          //   .get().then((doc) => {
          //     console.log(doc.data())
          //   })


            firebase.firestore().collection('User').doc(NPblKey.toString())
            .get().then((doc) => {

              SetT(doc.data().AccTickets)
              /* console.log(T)
              console.log(doc.data()) */
              
              
              /* doc.data().AccTickets.forEach(function (f) {
                  console.log(f);
                  
              }) */
              
            }) 


    }, [])
          
    
   
      
      

  
  return (
           <div className="hh">
            {T.map((T,index) => 
                    <>
                        <TicketCard T={T} />  
                        
                    </>
                )}
        </div> 

          // <>
          //   <div><TicketCard T={T} /></div>
          // </> 
        );
  
    
}