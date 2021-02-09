import React , {useState , useEffect} from 'react'
import TicketCard from '../component/TicketCard'
import firebase from "../utils/firebase";
import {
  Client,
  AccountBalanceQuery,
} from "@hashgraph/sdk";

import './TicketList.css'


const SellerAccId = "0.0.301906";
const SellerPblKey =
  "0x302a300506032b657003210044c714812aec04be8c2c2704d4f0432f49b2f2b3350aa69fdc9b9715de9a8d9a";
const SellerPrKey =
  "0x302e020100300506032b65700422042092d0f20b0324b71b55bf397a85c214bbb66e98c8869911fb30dd7b6a0d60b7a4";

let t;
let v;

export default function TicketList() {

  const [T, SetT] = useState("");
  const [V, SetV] = useState(''); 

  /* const [Key, SetKey , AddKey , DelKey] = useKey(""); */

  
      useEffect( async() => {
          const client = Client.forTestnet();

          client.setOperator(SellerAccId, SellerPrKey);

          const query = await new AccountBalanceQuery()
            .setAccountId(SellerAccId)
            .execute(client);

          const a = query.tokens;

          for (const [key, value] of a) {


            console.log(key.toString(), value.toString());
            SetT(key.toString())
            SetV(value.toString())
            t = key.toString();
            v = value.toString();

            
            console.log(t)
            
          }

          
 
    
    
  }, [])
     
      
      

  
  return (
          /*  <div className="hh">
            {T.map((T, index) => 
                    <>
                      <TicketCard T={T} />
                    </>
                )}
        </div> */

          <>
            <div>{t}</div>
            
          </>
        );
  
    
}
