import React, { useState , useContext} from "react";
import { Card, OverlayTrigger, Tooltip, Image } from "react-bootstrap";
import { Button, Stepper } from "@material-ui/core";
import {
  Client,
  TransferTransaction,
  TokenAssociateTransaction,
  PrivateKey,
} from "@hashgraph/sdk";
import { LoginContext } from "../screens/LoginContext";
import firebase from "../utils/firebase";

/* 
const SellerAccId = "0.0.301906";
const SellerPblKey =
  "0x302a300506032b657003210044c714812aec04be8c2c2704d4f0432f49b2f2b3350aa69fdc9b9715de9a8d9a";
const SellerPrKey =
  "0x302e020100300506032b65700422042092d0f20b0324b71b55bf397a85c214bbb66e98c8869911fb30dd7b6a0d60b7a4";

const tokenId = "0.0.303341";

const accountId = "0.0.303460";
const publicKey =
  "302a300506032b65700321002ee57aad815e3597b7815728315e51bf42fbd867e32b9deb40d1f483cfc9ea6e";
const privateKey =
  "302e020100300506032b6570042204201026b742d1ee8cb5a0141652191e0b63ec92719c53ab8ed59d98e6fc8f21ce45";
 */
let a;
export default function DNFTCard(props) {

  const [H, setH] = useState("");
  const  [ Acc , setAcc ] = useState("");
  const [Per , setPer] = useState('');

  const { prKey } = useContext(LoginContext);
  /* console.log(prKey); */
  const NPrKey = PrivateKey.fromString(prKey);

  const NPblKey = NPrKey.publicKey;
/*   console.log(NPblKey.toString());
 */
  firebase
    .firestore()
    .collection("User")
    .doc(NPblKey.toString())
    .get()
    .then((doc) => {
      /* console.log(doc.data()); */
      const NAccId = doc.data().AccId;
      /* console.log(NAccId); */
      setH(NAccId);
    });

    localStorage.setItem('H' , H)
    

  const [Numb, SetNumb] = useState("");

  firebase
    .firestore()
    .collection("DNFT")
    .doc(props.K.TokenId)
    .get()
    .then((doc) => {
      setAcc(doc.data().AccountId);
      setPer(doc.data().PRK);
      localStorage.setItem("Acc", doc.data().AccountId);
      localStorage.setItem("Per", doc.data().PRK);
      /* console.log(doc.data().AccountId); */
    });

  const numb = async (e) => {
    a = e.target.value;
    console.log(a)
    localStorage.setItem('N' , a)
    SetNumb(e.target.value);
    console.log(Numb)
     console.log(localStorage.getItem("N"));
  };

  
  const buy = async () => {
    const client = Client.forTestnet();
    client.setOperator(H, NPrKey);
   
     const transaction = await new TokenAssociateTransaction()
      .setAccountId(H)
      .setTokenIds([props.K.TokenId])
      .freezeWith(client);

    //Sign with the private key of the account that is being associated to a token
    const signTx = await transaction.sign(PrivateKey.fromString(prKey));

    //Submit the transaction to a Hedera network
    const txResponse = await signTx.execute(client);

    //Request the receipt of the transaction
    const receipt = await txResponse.getReceipt(client);

    //Get the transaction consensus status
    const transactionStatus = receipt.status;

    console.log(
      "The transaction consensus status " + transactionStatus.toString()
    ); 

    


      
      

    const tx = await new TransferTransaction()
      .addTokenTransfer(props.K.TokenId, Acc, -(localStorage.getItem("N")))
      .addTokenTransfer(props.K.TokenId, H, localStorage.getItem("N"))
      .freezeWith(client);

    //Sign with the sender account private key
    const sign = await tx.sign(PrivateKey.fromString(Per));

    //Sign with the client operator private key and submit to a Hedera network
    const txResponse1 = await sign.execute(client);

    //Request the receipt of the transaction
    const receipt1 = await txResponse1.getReceipt(client);

    //Obtain the transaction consensus status
    const transactionStatus1 = receipt1.status;

    console.log(
      "The transaction consensus status " + transactionStatus1.toString()
    );

    const txn = await new TransferTransaction()
      .addHbarTransfer(Acc, localStorage.getItem("N") * props.K.Price)
      .addHbarTransfer(H, -(localStorage.getItem("N") * props.K.Price))

      .freezeWith(client);

    //Sign with the sender account private key
    const sign2 = await txn.sign(PrivateKey.fromString(prKey));

    //Sign with the client operator private key and submit to a Hedera network
    const txResponse2 = await sign2.execute(client);

    //Request the receipt of the transaction
    const receipt2 = await txResponse2.getReceipt(client);

    //Obtain the transaction consensus status
    const transactionStatus2 = receipt2.status;

    console.log(
      "The transaction consensus status " + transactionStatus1.toString()
    );

    alert("Buying Complete");
    SetNumb('')
  };

  return (
    <div id="mcc">
      <Card id="cc">
        <Card.Img
          id="pic"
          variant="top"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.F-IJbSlaGkoaH8X5IqBqZgHaHa%26pid%3DApi&f=1"
        />

        <Card.Body>
          <Card.Title id="kl">{props.K.Name}</Card.Title>

          <Card.Text id="gg"><strong>Description:</strong> {props.K.Description}</Card.Text>
          <div id="ot">
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip id="button-tooltip-2">{props.K.Creator}</Tooltip>
              }
            >
              {({ ref, ...triggerHandler }) => (
                <Button
                  id="bt1"
                  variant="light"
                  {...triggerHandler}
                  className="d-inline-flex align-items-center"
                >
                  <Image
                    id="cim"
                    ref={ref}
                    roundedCircle
                    src="https://www.microsoft.com/en-us/research/wp-content/themes/microsoft-research-theme/assets/images/svg/icon-people-circle.svg"
                    height="20px"
                    width="20px"
                  />
                  <span className="ml-1">Hover to see Creator</span>
                </Button>
              )}
            </OverlayTrigger>
            
          </div>

          {/* <Card.Text id="gg">
                              {props.K.Creator}
                            </Card.Text> */}
          <Card.Text id="gl">Amount: {props.K.Amount}</Card.Text>
          <div id="ot">
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip id="button-tooltip-2">{props.K.Symbol}</Tooltip>
              }
            >
              {({ ref, ...triggerHandler }) => (
                <Button
                  id="bt1"
                  variant="light"
                  {...triggerHandler}
                  className="d-inline-flex align-items-center"
                >
                  <Image
                    id="cim"
                    ref={ref}
                    roundedCircle
                    src="https://www.microsoft.com/en-us/research/wp-content/themes/microsoft-research-theme/assets/images/svg/icon-people-circle.svg"
                    height="20px"
                    width="20px"
                  />
                  <span className="ml-1">Hover to see Symbol</span>
                </Button>
              )}
            </OverlayTrigger>
            
          </div>
          {/* <Card.Text id="gl">Symbol: {props.K.Symbol }</Card.Text> */}
          <Card.Text id="gl">Price: {props.K.Price}</Card.Text>

          <div id="jkl">
            <input
              value={Numb}
              onChange={numb}
              id="in"
              type="number"
              placeholder="Number of Ticket"
            ></input>
            <Button onClick={buy} variant="contained" color="primary">
              Buy
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
