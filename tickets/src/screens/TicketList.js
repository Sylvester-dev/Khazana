import React , {useState , useEffect} from 'react'
import TicketCard from '../component/TicketCard'
import firebase from "../utils/firebase";
import useKey from "../hooks/useKey"
import {
  Client,
  AccountBalanceQuery,
} from "@hashgraph/sdk";

import './TicketList.css'


const SellerAccId = "0.0.301906";
const SellerPblKey =
  "302a300506032b657003210044c714812aec04be8c2c2704d4f0432f49b2f2b3350aa69fdc9b9715de9a8d9a";
const SellerPrKey =
  "0x302e020100300506032b65700422042092d0f20b0324b71b55bf397a85c214bbb66e98c8869911fb30dd7b6a0d60b7a4";

let t;
let v;

export default function TicketList() {

  const [T, SetT] = useState([]);
  // const [V, SetV] = useState(''); 

  // const [Key, SetKey] = useKey("");

  
      useEffect( async () => {
          const client = Client.forTestnet();

          client.setOperator(SellerAccId, SellerPrKey);

          const query = await new AccountBalanceQuery()
            .setAccountId(SellerAccId)
            .execute(client);

          const a = query.tokens;

          for (const [key, value] of a) {


            /* console.log(key.toString(), value.toString()); */

            firebase
              .firestore()
              .collection("User")
              .doc(SellerPblKey)
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


            firebase.firestore().collection('User').doc(SellerPblKey)
            .onSnapshot((doc) => {

              SetT(doc.data().AccTickets)
              console.log(T)
              console.log(doc.data())
              
              
              doc.data().AccTickets.forEach(function (f) {
                  console.log(f);
                  
              })
              
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
