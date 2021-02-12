import React, { useState, useEffect } from "react";
import firebase from "../utils/firebase";
import DNFTCard from "../component/DNFTCard";
import "./Event.css";

export default function DNFT() {
  const [K, SetK] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("DNFT")
      .onSnapshot((snapshot) => {
        SetK(snapshot.docs.map((doc) => doc.data()));

        /* console.log(K); */
      });
  }, []);

  return (
    <div id="hh">
      {K.map((K, index) => (
        <>
          <DNFTCard K={K} />
        </>
      ))}
    </div>
  );
}

{
  /* <div className="hh">
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
        </div> */
}
