import React, { useState } from 'react'
import { Form , Col , Row } from 'react-bootstrap'
import { Button } from '@material-ui/core'
import { Client , Hbar , TokenCreateTransaction , PublicKey  } from '@hashgraph/sdk';
import firebase from '../utils/firebase';


import './CreateToken.css'

export default function CreateToken() {

    const AccId = '0.0.301906'
    const PblKey = '302a300506032b657003210044c714812aec04be8c2c2704d4f0432f49b2f2b3350aa69fdc9b9715de9a8d9a';
    const PrKey = '302e020100300506032b65700422042092d0f20b0324b71b55bf397a85c214bbb66e98c8869911fb30dd7b6a0d60b7a4'

    
    const accountId = '0.0.303460'
    const publicKey = "302a300506032b65700321002ee57aad815e3597b7815728315e51bf42fbd867e32b9deb40d1f483cfc9ea6e"
    const privateKey = "302e020100300506032b6570042204201026b742d1ee8cb5a0141652191e0b63ec92719c53ab8ed59d98e6fc8f21ce45"


    const [Tkn , SetTkn] = useState({
        
        Name:"",
        Sym:"",
        Desc:"",
        Amt:"",
        Price:"",
        PbAdd:"",
        Skylink:"",
        TknId:"",
    
    });


    const inputEvent = (e) => {
        /* console.log(e.target.value); */
        /* SetTkn(e.target.value) */

        const value = e.target.value;
        const name = e.target.name;

        /* console.log(name) */
        SetTkn((pv) => {
            if( name === 'Name'){
                return{
                    Name:value,
                    Sym:pv.Sym,
                    Desc:pv.Desc,
                    Amt:pv.Amount,
                    Price:pv.Price,
                }
            }
            else if( name === 'Sym'){
                return{
                    Name:pv.Name,
                    Sym:value,
                    Desc:pv.Desc,
                    Amt:pv.Amount,
                    Price:pv.Price,
                }
            }
            else if( name === 'Desc'){
                return{
                    Name:pv.Name,
                    Sym:pv.Sym,
                    Desc:value,
                    Amt:pv.Amount,
                    Price:pv.Price,
                }
            }
            else if( name === 'Amt'){
                return{
                    Name:pv.Name,
                    Sym:pv.Sym,
                    Desc:pv.Desc,
                    Amt:value,
                    Price:pv.Price,
                }
            }
            else if( name === 'Price'){
                return{
                    Name:pv.Name,
                    Sym:pv.Sym,
                    Desc:pv.Desc,
                    Amt:pv.Amount,
                    Price:value,
                }
            }
            
        })

        console.log(Tkn.Price)
        console.log(Tkn.Amt)
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        
        console.log(Tkn)

        const client = Client.forTestnet();
        client.setOperator(AccId, PrKey);
        const transaction = await new TokenCreateTransaction()
                        .setTokenName(Tkn.Name)
                        .setTokenSymbol(Tkn.Sym)
                        .setTreasuryAccountId(AccId)
                        .setInitialSupply(Tkn.Amt)
                        .execute(client);
       
        console.log(transaction)

        //Sign the transaction with the token adminKey and the token treasury account private key
        /* const signTx = await ( await transaction.sign(PblKey)).sign(PrKey);

        //Sign the transaction with the client operator private key and submit to a Hedera network
        const txResponse = await signTx.execute(client);  */
            
        //Get the receipt of the transaction
        const receipt = await transaction.getReceipt(client);

        //Get the token ID from the receipt
        const tokenId = receipt.tokenId;



    

        console.log(tokenId)
        console.log("The new token ID is " + tokenId);
        SetTkn({
            TknId:(tokenId.toString())
        })


        firebase.firestore().collection('Tickets').doc().set({
            
            Name:Tkn.Name,
            Symbol:Tkn.Sym,
            Amount:Tkn.Amt,
            Description:Tkn.Desc,
            Price:Tkn.Price,
            TokenId:(tokenId.toString()),
            Creator:PblKey,
            
        
        })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });

        /* const TicketsRef = firebase.database().ref("Tick");


        
        const Tick = {
                Name:Tkn.Name,
                Symbol:Tkn.Sym,
                Amount:Tkn.Amt,
                Description:Tkn.Desc,
                TokenId:(tokenId.toString()),
                Creator:PblKey,
        }


        TicketsRef.push(Tick); */
        
        SetTkn({
            Name:"",
            Sym:"",
            Desc:"",
            Amt:"",
            Price:""
        });
       
    }

    return (
        <div className="bb">
            <div className="kl">
            <fieldset>
                <Form>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label id="lo" column sm={2}>
                    Name of the Event
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control name="Name" onChange={inputEvent} type="text" value={Tkn.Name} placeholder="Name" />
                    </Col>
                </Form.Group>

                {/* <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                    Password
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group> */}

                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                    Symbol
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control name="Sym" onChange={inputEvent} type="text" value={Tkn.Sym} placeholder="Symbol" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                    Description
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control name="Desc" onChange={inputEvent} type="text" value={Tkn.Desc} placeholder="Description" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                    Amount
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Group name="Amt" onChange={inputEvent} type="text" value={Tkn.Amt} placeholder="Amount" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                    Price
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Group name="Price" onChange={inputEvent} type="text" value={Tkn.Price} placeholder="Price" />
                    </Col>
                </Form.Group>

                {/* <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                    Public Address
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control onChange={inputEvent} type="text" value={Tkn.PbAdd} placeholder="Public Address" />
                    </Col>
                </Form.Group> */}

                


                <Form.Group>
                    <Form.File id="FormControlFile" label="Insert Image pls" />
                </Form.Group>
                <>
                    <Form.Group as={Row}>
                    <Form.Label className="gf" as="legend" column sm={2}>
                        Type of Token
                    </Form.Label>
                    <Col id="jh" sm={10}>
                        <Form.Check
                        type="radio"
                        label="Normal Token"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        />
                        <Form.Check
                        type="radio"
                        label="NFT "
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        />
                    </Col>
                    </Form.Group>
                </>
                {/* <Form.Group as={Row} controlId="formHorizontalCheck">
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Form.Check label="Remember me" />
                    </Col>
                </Form.Group> */}

                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Button onClick={onSubmit} variant="contained" color="primary" type="submit">Create</Button>
                    </Col>
                </Form.Group>
                </Form>

            </fieldset>
                
            </div>
            
        </div>
    )
}
