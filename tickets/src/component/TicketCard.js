import React , {useEffect} from 'react'
import { Card, Form, ResponsiveEmbed } from "react-bootstrap";
import { Button, Input } from "@material-ui/core";
import {
  Client,
  TransferTransaction,
  TokenAssociateTransaction,
  PrivateKey,
} from "@hashgraph/sdk";
import { QRCode } from "react-qr-svg";
import seedrandom from 'seedrandom';

/* const SellerAccId = "0.0.301906";
const SellerPblKey =
  "0x302a300506032b657003210044c714812aec04be8c2c2704d4f0432f49b2f2b3350aa69fdc9b9715de9a8d9a";
const SellerPrKey =
  "0x302e020100300506032b65700422042092d0f20b0324b71b55bf397a85c214bbb66e98c8869911fb30dd7b6a0d60b7a4"; */


  

  

  

  export default function TicketCard(props) {

    
      // const now = new Date();
      // console.log(now.getMinutes()); 

    var a = props.T.slice(0,10);
    var b = props.T.slice(11);
    return (
      <div className="cardlist">
        <Card className="gh" style={{ width: "18rem" }}>
          {/* <Card.Img className="pic" variant="top" src={props.T.poster} /> */}
          <QRCode
            
            bgColor="#FFFFFF"
            fgColor="#000000"
            level="Q"
            style={{ width: 256, justify: "center", margin: 16 }}
            value={a}
          />
          <Card.Body id="cb">
            <Card.Title className="kl">{props.T.Name}</Card.Title>
            <Card.Text className="gg">
              <strong>Token Id: </strong> {a}
            </Card.Text>
            <Card.Text id="gll">Amount : {b}</Card.Text>

            <Input className="op" placeholder="Transfer To"></Input>

            <Button id="jj" variant="contained" color="primary">
              Transfer
            </Button>
            <Button id="jk" variant="contained" color="primary">
              Sell
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
}