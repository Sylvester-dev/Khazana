import React from 'react'
import { Card, Form } from "react-bootstrap";
import { Button, Input } from "@material-ui/core";


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
            <Card.Text id="gl">Price : 1000</Card.Text>

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
