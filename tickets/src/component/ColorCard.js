import React, { useState } from "react";
import { Card, OverlayTrigger, Tooltip, Image } from "react-bootstrap";
import { Button } from "@material-ui/core";
import {
  Client,
  TransferTransaction,
  TokenAssociateTransaction,
  PrivateKey,
} from "@hashgraph/sdk";


let a;
export default function ColorCard(props) {
  /* const buy = async () => {
    const client = Client.forTestnet();
    client.setOperator(SellerAccId, SellerPrKey);

    
    const g = await new TopicMessageQuery()
      .setTopicId(newTopicId)
      .setStartTime(0)
      .subscribe(client, (message) =>
        console.log(Buffer.from(message.contents, "utf8").toString())
      );

    console.log(g);
    
  }; */

    var color =
      "rgb(" +
      props.K.Description[0] +
      "," +
      props.K.Description[1] +
      "," +
      props.K.Description[2] +
      ")";
      /* console.log(color) */
    const styleObj = {
      backgroundColor: color,
    };

  return (
    <div id="mcc" style={styleObj}>
      <Card id="cc">
        <div id="cpad" style={styleObj}></div>
        <Card.Body>
          <Card.Title id="kl">Topic Id : {props.K.Name}</Card.Title>

          <Card.Text id="gl">{props.K.Creator} </Card.Text>
          <Card.Text id="gl"> Token Id = {props.K.TokenId}</Card.Text>
          <div id="jkl"></div>
        </Card.Body>
      </Card>
    </div>
  );
}
