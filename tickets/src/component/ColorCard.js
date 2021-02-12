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
    <div id="mcc1" style={styleObj}>
      <Card id="ccc">
        <div id="cpad" style={styleObj}></div>
        <Card.Body>
          <Card.Title id="kl">Topic Id : {props.K.Name}</Card.Title>

          <div id="ot1">
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
          <Card.Text id="gl"> Token Id = {props.K.TokenId}</Card.Text>
          <div id="jkl"></div>
        </Card.Body>
      </Card>
    </div>
  );
}
