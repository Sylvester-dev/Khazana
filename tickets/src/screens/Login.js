import React from 'react';
import {Box ,Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { PrivateKey , Client , Hbar , AccountCreateTransaction, PublicKey } from '@hashgraph/sdk';
import firebase from '../utils/firebase';

import './Login.css'


export default function Login() {


    const myAccountId = ''
    const myPrivateKey = ''

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
                            .setInitialBalance(new Hbar(1000))
                            

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

        const AccRef = firebase.database().ref("Acc");
        const PbKey = publicKey.toString();
        const Acc = {
                PbKey:(publicKey.toString()),
                PKey:(privateKey.toString()),
                AccId:(newAccountId.toString()),
                AccTickets:[],
                CreatedTickets:[],
            
        }
        AccRef.push(Acc);
        alert("PrivateKey = 0x" + privateKey +'  '+ "PublicKey = 0x" + publicKey + '  ' + 'Account Id = ' + newAccountId)
    }
    return (
        <div className="screen">
        <fieldset className="df">
            <Box className ="box" component="div" m={1}>
{/*         <Button className ="f" variant="info" >Login with Private Key</Button>{' '}
            <Button className ="f" variant="success"  >Login with Mnemonic</Button>{' '}
            <Button className ="f" variant="primary"  >Make an Account</Button>{' '}  */}  

            <Link id="pl" to="/privatekey">
                <Button id="jl" variant="contained" color="secondary">Login with Private Key</Button>
            </Link>

            <Link id="pl" to="/mnemonic">
                <Button id="jl" variant="contained" color="secondary">Login with Mnemonic</Button>
            </Link>    
            
            
            <Button onClick={al} id="jl" variant="contained" color="secondary">Make an Account</Button>
            
            </Box>

        </fieldset>
            
        </div>
    )
}
