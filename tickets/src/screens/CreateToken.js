import React, { useState } from 'react'
import { Form , Col , Row } from 'react-bootstrap'
import { Button } from '@material-ui/core'
import { Client  , TokenCreateTransaction , PublicKey  } from '@hashgraph/sdk';
import firebase from '../utils/firebase';
import { SkynetClient } from 'skynet-js'
/* import IPFS from 'ipfs-core' */


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
        TknId:"",
        /* File:"", */ 

    });

    const [File , SetFile] = useState('');


    const inputEvent = (e) => {
        /* console.log(e.target.value); */
        /* SetTkn(e.target.value) */

        const value = e.target.value;
        const name = e.target.name;
        const files = e.target.files;
        
        
        /* console.log(files[0]) */
        

        /* console.log(name) */
        SetTkn((pv) => {
            if( name === 'Name'){
                return{
                    Name:value,
                    Sym:pv.Sym,
                    Desc:pv.Desc,
                    Amt:pv.Amt,
                    Price:pv.Price,
                    File:pv.File
                }
            }
            else if( name === 'Sym'){
                return{
                    Name:pv.Name,
                    Sym:value,
                    Desc:pv.Desc,
                    Amt:pv.Amt,
                    Price:pv.Price,
                    File:pv.File
                }
            }
            else if( name === 'Desc'){
                return{
                    Name:pv.Name,
                    Sym:pv.Sym,
                    Desc:value,
                    Amt:pv.Amt,
                    Price:pv.Price,
                    File:pv.File
                }
            }
            else if( name === 'Amt'){
                return{
                    Name:pv.Name,
                    Sym:pv.Sym,
                    Desc:pv.Desc,
                    Amt:value,
                    Price:pv.Price,
                    File:pv.File
                }
            }
            else if( name === 'Price'){
                return{
                    Name:pv.Name,
                    Sym:pv.Sym,
                    Desc:pv.Desc,
                    Amt:pv.Amt,
                    Price:value,
                    File:pv.File
                }
            }
            else if( name === 'File'){
                return{
                    Name:pv.Name,
                    Sym:pv.Sym,
                    Desc:pv.Desc,
                    Amt:pv.Amt,
                    Price:pv.Price,
                    File:files[0],
                }
            }
            
        })


        /* SetTkn({
            File:(files)
        }) */
        /* console.log(e.target.files)
        console.log(Tkn.File) */
        console.log(Tkn)
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

            
        //Get the receipt of the transaction
        const receipt = await transaction.getReceipt(client);

        //Get the token ID from the receipt
        const tokenId = receipt.tokenId;



        console.log(tokenId)


        console.log("The new token ID is " + tokenId);
        SetTkn({
            TknId:(tokenId.toString())
        })
       

        
        /* const ipfs = new IPFS({host: 'ipfs.infura.io', port: 5001, protocol: 'https'});
        const data = "Writing a test message on the network";
        ipfs.add(Tkn.File, (err, hash) => {
            if(err){
                return console.log(err);
            }
            console.log('https://ipfs.infura.io/ipfs/'+hash);
        }) */

        

        /* const ipfs = await IPFS.create()
        const { cid } = await ipfs.add(Tkn.File)
        console.info(cid) */
        


        firebase.firestore().collection('Tickets').doc(tokenId.toString()).set({
            
            Name:Tkn.Name,
            Symbol:Tkn.Sym,
            Amount:Tkn.Amt,
            Description:Tkn.Desc,
            Price:Tkn.Price,
            TokenId:(tokenId.toString()),
            Creator:PblKey,
            Skylink:File
            
        
        })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });

        /* firebase
          .firestore()
          .collection("User")
          .doc(publicKey)
          .set({
            CreateTickets: tokenId.toString(),
          })
          .then(() => {
            console.log("Document successfully written!");
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
        firebase
          .firestore()
          .collection("User")
          .doc(publicKey)
          .update({
            CreateTickets: firebase.firestore.FieldValue.arrayUnion(tokenId.toString()),
          })
          .then(() => {
            console.log("Document successfully written!");
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
 */
        /* const TicketsRef = firebase.database().ref("Tick");
        firebase.firestore.FieldValue.arrayUnion("greater_virginia")
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
            Price:"",
            File:""
        });
       
    }


    const file = async (e) => {


        /* SetFile(e.target.files[0]); */
        const cl = new SkynetClient("https://siasky.net/");
        console.log(File)
        console.log(cl)
        
        
        const sl = await cl.uploadFile(e.target.files[0]);
        console.log(sl)
        console.log('https://siasky.net/' + sl.skylink.substring(4))
        alert('File uploaded')
        

        SetFile(sl.skylink.substring(4))
        console.log(File)
        
    }

    return (
        <div className="bb">
            <div className="kl">
            <fieldset>
                <Form>
                 <Form.Group as={Row} controlId="formHorizontalEmail" id="fo">
                    <Form.Label id="lo" column sm={2}>
                      Name of the Token
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control name="Name" id="fc" onChange={inputEvent} type="text" value={Tkn.Name} placeholder="Name" />
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

                <Form.Group as={Row} controlId="formHorizontalEmail" id="fo">
                    <Form.Label id="lo" column sm={2}>
                    Symbol
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control name="Sym" id="fc" onChange={inputEvent} type="text" value={Tkn.Sym} placeholder="Symbol (Not for NFT)" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalEmail" id="fo">
                    <Form.Label id="lo" column sm={2}>
                    Description
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control name="Desc" id="fc" onChange={inputEvent} type="text" value={Tkn.Desc} placeholder="Description" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalEmail" id="fo">
                    <Form.Label id="lo" column sm={2}>
                    Amount
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control name="Amt" id="fc" onChange={inputEvent} type="text" value={Tkn.Amt} placeholder="Amount (Not for NFT)" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalEmail" id="fo">
                    <Form.Label id="lo" column sm={2}>
                    Price
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control name="Price" id="fc" onChange={inputEvent} type="text" value={Tkn.Price} placeholder="Price" />
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
                   <Form.Label id="lo" column sm={2}>
                     Insert_File
                    </Form.Label>
                    <Form.File name="File"  onChange={file} id="FormControlFile"/>
                </Form.Group>
                <>
                    {/* <Form.Group as={Row}>
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
                    </Form.Group> */}
                </>
                {/* <Form.Group as={Row} controlId="formHorizontalCheck">
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Form.Check label="Remember me" />
                    </Col>
                </Form.Group> */}

                <Form.Group as={Row}>
                    <Col  sm={{ span: 10, offset: 2 }}>
                    <Button  id="bt" onClick={onSubmit} variant="contained" color="primary" type="submit">Create</Button>
                    <Button  id="bt" className="bt1" onClick={onSubmit} variant="contained" color="primary" type="submit" >NFT</Button>
                    </Col>
         
                </Form.Group>
                </Form>

            </fieldset>
                
            </div>
            
        </div>
    )
}