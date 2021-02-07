import React, { useState , useEffect } from 'react'
import { Card,OverlayTrigger,Tooltip,Image} from 'react-bootstrap'
import { Button } from '@material-ui/core';
import { Client , TransferTransaction , TokenAssociateTransaction , PrivateKey} from '@hashgraph/sdk';
import firebase from '../utils/firebase';



import './Event.css'


const event = [
  {
    title: 'La La Land',
    poster: 'https://i.imgur.com/po7UezG.jpg',
    genre: 'Drama/Romance',
    amount: '5',
    
  },
  
  
]

    const SellerAccId = '0.0.301906';
    const SellerPblKey = '0x302a300506032b657003210044c714812aec04be8c2c2704d4f0432f49b2f2b3350aa69fdc9b9715de9a8d9a';
    const SellerPrKey = '0x302e020100300506032b65700422042092d0f20b0324b71b55bf397a85c214bbb66e98c8869911fb30dd7b6a0d60b7a4';

    const tokenId = '0.0.303341';

    const accountId = '0.0.303460'
    const publicKey = "302a300506032b65700321002ee57aad815e3597b7815728315e51bf42fbd867e32b9deb40d1f483cfc9ea6e"
    const privateKey = "302e020100300506032b6570042204201026b742d1ee8cb5a0141652191e0b63ec92719c53ab8ed59d98e6fc8f21ce45"



   

export default function Event() {


  const [K , SetK] = useState([]);

  useEffect(() => {

    firebase.firestore().collection('Tickets').onSnapshot(snapshot => {

      SetK(snapshot.docs.map(doc => doc.data()));
      console.log(K);

    })
    
  }, [])

  const buy = async () => {

    const client = Client.forTestnet();
    client.setOperator(SellerAccId, SellerPrKey);



    const transaction = await new TokenAssociateTransaction()
        .setAccountId(accountId)
        .setTokenIds([tokenId])
        .freezeWith(client);

    //Sign with the private key of the account that is being associated to a token 
    const signTx = await transaction.sign(PrivateKey.fromString(privateKey));

    //Submit the transaction to a Hedera network    
    const txResponse = await signTx.execute(client);

    //Request the receipt of the transaction
    const receipt = await txResponse.getReceipt(client);
        
    //Get the transaction consensus status
    const transactionStatus = receipt.status;

    console.log("The transaction consensus status " +transactionStatus.toString());
      
    const tx = await new TransferTransaction()
     .addTokenTransfer(tokenId, SellerAccId, -10)
     .addTokenTransfer(tokenId, accountId, 10)
     .freezeWith(client);

    //Sign with the sender account private key
    const sign = await tx.sign(PrivateKey.fromString(SellerPrKey));
        
    //Sign with the client operator private key and submit to a Hedera network
    const txResponse1 = await sign.execute(client);
        
    //Request the receipt of the transaction
    const receipt1 = await txResponse1.getReceipt(client);
        
    //Obtain the transaction consensus status
    const transactionStatus1 = receipt1.status;

    console.log("The transaction consensus status " +transactionStatus1.toString());


    const txn = await new TransferTransaction()
     .addHbarTransfer(SellerAccId, 10)
     .addHbarTransfer(accountId, -10)
     
     .freezeWith(client);

    //Sign with the sender account private key
    const sign2 = await txn.sign(PrivateKey.fromString(privateKey));
        
    //Sign with the client operator private key and submit to a Hedera network
    const txResponse2 = await sign2.execute(client);
        
    //Request the receipt of the transaction
    const receipt2 = await txResponse2.getReceipt(client);
        
    //Obtain the transaction consensus status
    const transactionStatus2 = receipt2.status;

    console.log("The transaction consensus status " +transactionStatus1.toString());

 
  
  }
    return (
        <div id="hh">
            {K.map((K, index) => 
                    <>
                      <div id="mcc">    
                      <Card id="cc">
                        <Card.Img id ="pic" variant="top" src="https://www.svgrepo.com/show/9708/rocket-ship.svg"  />
                        <Card.Body>
                            <Card.Title id="kl">{K.Name}</Card.Title>

                            <Card.Text id="gg"> Description: {K.Desc}</Card.Text>
                             <div id="ot">
                             <OverlayTrigger
                                  placement="bottom"
                                  overlay={<Tooltip id="button-tooltip-2">{K.Creator}</Tooltip>}
                                >
                                  {({ ref, ...triggerHandler }) => (
                                    <Button id="bt1"
                                      variant="light"  
                                      {...triggerHandler}
                                      className="d-inline-flex align-items-center"
                                    >
                                      <Image
                                        id="cim"
                                        ref={ref}
                                        roundedCircle
                                        src="https://www.microsoft.com/en-us/research/wp-content/themes/microsoft-research-theme/assets/images/svg/icon-people-circle.svg" height="20px" width="20px"
                                      />
                                      <span className="ml-1">Hover to see Creator</span>
                                    </Button>
                                  )}
                                </OverlayTrigger>, 
                             </div>
                      
                            {/* <Card.Text id="gg">
                              {K.Creator}
                            </Card.Text> */}
                            <Card.Text id="gl">Amount: {K.Amount}</Card.Text>
                            <Card.Text id="gl">Price: {K.Price}</Card.Text>
                            <div  id="jkl">
                             <input  id="in" type="number" placeholder="Number of Ticket"></input>
                             <Button onClick={buy} variant="contained" color="primary">Buy</Button>
                            </div>
                            
                        </Card.Body>
                        </Card>
                      </div>  
                    </>
                )}
        </div>
    )
}




{/* <div className="hh">
            {event.map((event, index) => 
                    <>
                      <div className="cardlist">    
                      <Card className="gh" style={{ width: '18rem' }}>
                        <Card.Img className ="pic" variant="top" src={event.poster} />
                        <Card.Body>
                            <Card.Title className="kl">{event.title}</Card.Title>
                            <Card.Text className="gg">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Card.Text className="gl">{event.amount}</Card.Text>
                            <Button onClick={buy} id="jkl" variant="contained" color="primary">Buy</Button>
                        </Card.Body>
                        </Card>
                      </div>  
                    </>
                )}
        </div> */}