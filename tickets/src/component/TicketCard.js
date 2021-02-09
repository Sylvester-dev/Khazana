import React from 'react'
import { Card, Form } from "react-bootstrap";
import { Button, Input } from "@material-ui/core";
import {
  Client,
  TransferTransaction,
  TokenAssociateTransaction,
  PrivateKey,
} from "@hashgraph/sdk";



const SellerAccId = "0.0.301906";
const SellerPblKey =
  "0x302a300506032b657003210044c714812aec04be8c2c2704d4f0432f49b2f2b3350aa69fdc9b9715de9a8d9a";
const SellerPrKey =
  "0x302e020100300506032b65700422042092d0f20b0324b71b55bf397a85c214bbb66e98c8869911fb30dd7b6a0d60b7a4";


export default function TicketCard(props) {
    return (
      <div className="cardlist">
        <Card className="gh" style={{ width: "18rem" }}>
          <Card.Img className="pic" variant="top" src={props.T.poster} />
          <Card.Body id="cb">
            <Card.Title className="kl">{props.T.title}</Card.Title>
            <Card.Text className="gg">
              <strong>Description: </strong> Stay on top of the changing U.S.
              and global markets with our market summary page. Dive deeper with
              our rich data, rate tables and tools.
            </Card.Text>
            <Card.Text id="gl">Price : {props.T}</Card.Text>

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
