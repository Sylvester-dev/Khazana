import React, {useState} from 'react';
import {Box ,Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { PrivateKey , Client , Hbar , AccountCreateTransaction, PublicKey } from '@hashgraph/sdk';
import { Card,Image } from "react-bootstrap";
import firebase from '../utils/firebase';
import img1 from '../images/undraw_travel_together_re_kjf2.png';
import img2 from '../images/undraw_reading_0re1.png';
import img3 from '../images/undraw_security_o890.png';


import './Login.css'


export default function Login() {


/*    const myAccountId = "0.0.303460";
    const myPrivateKey =
      "302e020100300506032b6570042204201026b742d1ee8cb5a0141652191e0b63ec92719c53ab8ed59d98e6fc8f21ce45"; */
    
    const myAccountId = "0.0.255748";
      const myPrivateKey =
        "302e020100300506032b6570042204208abde9468b7b2956797e2cf62714a43630be78351989a6c6de2400003199f185";



      const [PrKey, SetPrKey] = useState("");
      const [PbKey, SetPbKey] = useState("");
      const [AccId, SetAccId] = useState("");

    const al = async () => {

        const client = Client.forTestnet();
        client.setOperator(myAccountId, myPrivateKey);


        const privateKey = await PrivateKey.generate();
        const publicKey = privateKey.publicKey;
        console.log("private = 0x" + privateKey);
        /* console.log(privateKey.toString()); */
        console.log("public = 0x" + publicKey);

        const transaction = new AccountCreateTransaction()
                            .setKey(privateKey.publicKey)
                            .setInitialBalance(new Hbar(50))
                            

        //Sign the transaction with the client operator private key and submit to a Hedera network
        const txResponse = await transaction.execute(client);

        //Request the receipt of the transaction
        const receipt = await txResponse.getReceipt(client);

        //Get the account ID
        const newAccountId = receipt.accountId;

        /* client.setOperator(newAccountId, privateKey); */

        console.log("The new account ID is " +newAccountId);




        /* const TicketsRef = firebase.firestore().collection('User');


        
        const Tick = {
                Name:Tkn.Name,
                Symbol:Tkn.Sym,
                Amount:Tkn.Amt,
                Description:Tkn.Desc,
                TokenId:(tokenId.toString()),
                Creator:PblKey,
        }


        TicketsRef.push(Tick); */

        


        firebase.firestore().collection('User').doc((publicKey.toString())).set({
            
                PbKey:(publicKey.toString()),
                PKey:(privateKey.toString()),
                AccId:(newAccountId.toString()),
                AccTickets:[],
                CreatedTickets:[],
            
        
        })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });


        SetPrKey(privateKey.toString());
        SetPbKey(publicKey.toString());
        SetAccId(newAccountId.toString());
        
        /* alert("PrivateKey = 0x" + privateKey +'  '+ "PublicKey = 0x" + publicKey + '  ' + 'Account Id = ' + newAccountId) */
    }
    return (
      <div id="te">
        {" "}
        <h1>LOGIN</h1>
        <h4>PrivateKey - {PrKey} </h4>
        <h4>PublicKey - {PbKey} </h4>
        <h4>Account Id - {AccId}</h4>
        <div className="screen">
          {/*         <Button className ="f" variant="info" >Login with Private Key</Button>{' '}
            <Button className ="f" variant="success"  >Login with Mnemonic</Button>{' '}
            <Button className ="f" variant="primary"  >Make an Account</Button>{' '}  */}

          <Card id="ll">
            <Card.Img variant="top" id="pi" src={img3} />
            <Card.Body>
              <Card.Title id="ti">Login With:</Card.Title>
              <Link id="pl" to="/privatekey">
                <Button id="jl" variant="contained" color="primary">
                  Private Key
                </Button>
              </Link>
            </Card.Body>
          </Card>
          <Card id="ll">
            <Card.Img variant="top" id="pi" src={img2} />
            <Card.Body>
              <Card.Title id="ti">Login With:</Card.Title>

              <Link id="pl" to="/mnemonic">
                <Button id="jl" variant="contained" color="primary">
                  Mnemonic
                </Button>
              </Link>
            </Card.Body>
          </Card>
          <Card id="ll">
            <Card.Img variant="top" id="pi" src={img1} />
            <Card.Body>
              <Card.Title id="ti">Login With:</Card.Title>

              <Button onClick={al} id="jl" variant="contained" color="primary">
                Make an Account
              </Button>
            </Card.Body>
          </Card>

          {/* <Link id="pl" to="/privatekey">
                <Button id="jl" variant="contained" color="secondary">Login with Private Key</Button>
            </Link>

            <Link id="pl" to="/mnemonic">
                <Button id="jl" variant="contained" color="secondary">Login with Mnemonic</Button>
            </Link>    
            
            
            <Button onClick={al} id="jl" variant="contained" color="secondary">Make an Account</Button> */}
        </div>
      </div>
    );
}
