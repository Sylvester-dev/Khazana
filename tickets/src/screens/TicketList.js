import React , {useState , useEffect} from 'react'
import TicketCard from '../component/TicketCard'
import firebase from "../utils/firebase";

import './TicketList.css'

const event = [
  {
    title: 'La La Land',
    poster: 'https://i.imgur.com/po7UezG.jpg',
    genre: 'Drama/Romance',
    
  },
  
]

  

export default function TicketList() {

  const [T, SetT] = useState("");

  useEffect(() => {
    firebase
      .firestore()
      .collection("User")
      .onSnapshot((snapshot) => {
        SetT(snapshot.docs.map((doc) => doc.data()));
        console.log(T);
      });
  }, []);
    return (
       <div className="hh">
            {event.map((event, index) => 
                    <>
                      
                    </>
                )}
        </div>
    )
}
