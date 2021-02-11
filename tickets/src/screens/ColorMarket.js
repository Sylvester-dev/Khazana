import React , { useState } from "react";
import { Card, OverlayTrigger, Tooltip, Image } from "react-bootstrap";
import { Button } from "@material-ui/core";
import {Color} from "./Color"
import './ColorMarket.css'
function ColorMarket() {
  var r1 = localStorage.getItem("r1");
  var g1 = localStorage.getItem("g1");
  var b1 = localStorage.getItem("b1");
  var color = 'rgb('+r1+','+g1+','+b1+')';
  console.log(g1);
  return (
  <div id="mcc">
    <Card id="cc">
      <Card.Img
        id="pic3"
        variant="top"
        src="https://tse3.mm.bing.net/th?id=OIP.c2Bw7aR6-xwnUu18iftEVwHaF7&pid=Api&P=0&w=201&h=161"
      />
      <Card.Body>
        <Card.Title id="kl">hello</Card.Title>

        <Card.Text id="gg"> Description: </Card.Text>
        <div id="ot">
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="button-tooltip-2">Create</Tooltip>}
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
          ,
        </div>

        {/* <Card.Text id="gg">
                            {props.K.Creator}
                          </Card.Text> */}
        <Card.Text id="gl">Amount: </Card.Text>
        <Card.Text id="gl">Price:</Card.Text>
        <div id="jkl">
          <input
            // value={Numb}
            // onChange={numb}
            id="in"
            type="number"
            placeholder="Number of Ticket"
          ></input>
          <Button variant="contained" color="primary">
            Buy
          </Button>
        </div>
      </Card.Body>
    </Card>
  </div>
  )
}

export default ColorMarket
