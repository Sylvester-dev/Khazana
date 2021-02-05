import React from 'react'
import { Card } from 'react-bootstrap'
import { Button } from '@material-ui/core';


import './Event.css'




const event = [
  {
    title: 'La La Land',
    poster: 'https://i.imgur.com/po7UezG.jpg',
    genre: 'Drama/Romance',
    
  },
  {
    title: 'La ngd',
    poster: 'https://i.imgur.com/po7UezG.jpg',
    genre: 'Drama/Romance',
    
  },
  {
    title: 'La gnd',
    poster: 'https://i.imgur.com/po7UezG.jpg',
    genre: 'Drama/Romance',
    
  },
  {
    title: 'Lag nd',
    poster: 'https://i.imgur.com/po7UezG.jpg',
    genre: 'Drama/Romance',
    
  },
  {
    title: 'La Lnd',
    poster: 'https://i.imgur.com/po7UezG.jpg',
    genre: 'Drama/Romance',
    
  },
  {
    title: 'La Land',
    poster: 'https://i.imgur.com/po7UezG.jpg',
    genre: 'Drama/Romance',
    
  },
  {
    title: 'La La Land',
    poster: 'https://i.imgur.com/po7UezG.jpg',
    genre: 'Drama/Romance',
    
  },
  {
    title: 'La La Land',
    poster: 'https://i.imgur.com/po7UezG.jpg',
    genre: 'Drama/Romance',
    
  },
  {
    title: 'La La Land',
    poster: 'https://i.imgur.com/po7UezG.jpg',
    genre: 'Drama/Romance',
    
  },
  {
    title: 'La La Land',
    poster: 'https://i.imgur.com/po7UezG.jpg',
    genre: 'Drama/Romance',
    
  },
  {
    title: 'La La Land',
    poster: 'https://i.imgur.com/po7UezG.jpg',
    genre: 'Drama/Romance',
    
  },
  {
    title: 'La La Land',
    poster: 'https://i.imgur.com/po7UezG.jpg',
    genre: 'Drama/Romance',
    
  },
  {
    title: 'La La Land',
    poster: 'https://i.imgur.com/po7UezG.jpg',
    genre: 'Drama/Romance',
    
  },
  
]

export default function Event() {
    return (
        <div className="hh">
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
                            <Button id="jkl" variant="contained" color="primary">Buy</Button>
                        </Card.Body>
                        </Card>
                      </div>  
                    </>
                )}
        </div>
    )
}
