import React,{useState , useEffect , useContext} from 'react';
import './color.css';
import { Button } from '@material-ui/core';
import { LoginContext } from "./LoginContext";
import {
  Client,
  TokenCreateTransaction,
  PublicKey,
  PrivateKey,
  TopicCreateTransaction,
  TopicMessageSubmitTransaction,
} from "@hashgraph/sdk";
import firebase from "../utils/firebase";

function Color() {

  const [r , setR] = useState('00');
  const [g , setG] = useState('00');
  const [b , setB] = useState('00');
  const inputEventR = (e) => {
    // console.log(e.target.value); 
    setR(e.target.value);
}
  const inputEventG = (e) => {
    // console.log(e.target.value);
    setG(e.target.value);
}
  const inputEventB = (e) => {
    // console.log(e.target.value); 
    setB(e.target.value);
}
 
localStorage.setItem("r",r);
var r1 = localStorage.getItem("r");
localStorage.setItem("g",g);
var g1 = localStorage.getItem("g");
localStorage.setItem("b",b);
var b1 = localStorage.getItem("b");
// console.log(r1);

  /* var red = document.getElementById('red').value;
   console.log(red);
  var green = document.getElementById('green').value;
  var blue = document.getElementById('blue').value; */
  var color = 'rgb('+r+','+g+','+b+')';
  console.log(color);
  /* document.body.style.backgroundColor = color;
  document.getElementById('oo').style.backgroundColor=color; */


  const styleObj = {
    backgroundColor:color
  }

  const [Tkn, SetTkn] = useState({
    Name: "",
    Sym: "",
    Desc: "",
    Amt: "",
    Price: "",
    PbAdd: "",
    TknId: "",
    PRK: "",
  });


  const [H, setH] = useState('')
  const { prKey } = useContext(LoginContext);
  console.log(prKey)
  const NPrKey = PrivateKey.fromString(prKey);
  
  const NPblKey = NPrKey.publicKey;
  console.log(NPblKey.toString());




    firebase
      .firestore()
      .collection("User")
      .doc(NPblKey.toString())
      .get()
      .then((doc) =>
          {
         /*  console.log(doc.data()); */
          const NAccId = doc.data().AccId; 
          /* console.log(NAccId) */
          setH(NAccId)
        }
      )


    const Cl = async () => {


    
    const client = Client.forTestnet();
        client.setOperator(H, NPrKey);

        const transaction = new TopicCreateTransaction().setSubmitKey(NPrKey);

        //Sign with the client operator private key and submit the transaction to a Hedera network
        const txResponse = await transaction.execute(client);

        //Request the receipt of the transaction
        const receipt = await txResponse.getReceipt(client);

        //Get the topic ID
        const newTopicId = receipt.topicId;

       /*  console.log(newTopicId.toString()) */

        const l = await new TopicMessageSubmitTransaction({
          topicId: newTopicId,
          message: (
            r + ' ' + g + ' ' + b
            
        )
        }).execute(client);


        console.log([r,g,b])

        const loltxn = await new TokenCreateTransaction()
          .setTokenName(newTopicId.toString())
          .setTokenSymbol(newTopicId.toString())
          .setTreasuryAccountId(H)
          .setInitialSupply(1)
          .freezeWith(client);

        
        //Get the receipt of the transaction

        const txn = await loltxn.sign((NPrKey));

        const signtxn = await txn.execute(client);
        /* console.log(txn); */

        const lolreceipt = await signtxn.getReceipt(client);

        //Get the token ID from the receipt
        const tokenId = lolreceipt.tokenId;

        console.log(tokenId.toString());

        firebase
          .firestore()
          .collection("Color")
          .doc(newTopicId.toString())
          .set({
            Name: newTopicId.toString(),
            Symbol: newTopicId.toString(),
            Amount: 1,
            Description: [r, g, b],
            TokenId: tokenId.toString(),
            Creator: NPblKey.toString(),
            PRK: NPrKey.toString(),
          })
          .then(() => {
            console.log("Document successfully written!");
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });

        SetTkn({
          Name: "",
          Sym: "",
          Desc: "",
          Amt: "",
          Price: "",
        });

       

  }

// document.getElementById('red').addEventListener('input',myColor);
// document.getElementById('green').addEventListener('input',myColor);
// document.getElementById('blue').addEventListener('input',myColor);
  return (
    <div id="oo" style={styleObj}>
      <div className="main">
        Choose your RGB
        <h1 id="box">
          {r},{g},{b}
        </h1>
        Red:
        <input
          type="range"
          id="red"
          onChange={inputEventR}
          value={r}
          min="0"
          max="255"
        />
        Green:
        <input
          type="range"
          id="green"
          onChange={inputEventG}
          value={g}
          min="0"
          max="255"
        />
        Blue:
        <input
          type="range"
          id="blue"
          onChange={inputEventB}
          value={b}
          min="0"
          max="255"
        />
        <Button onClick={Cl} variant="contained" color="primary" type="submit">
          Make Token
        </Button>
      </div>
    </div>
  );
}

export default Color