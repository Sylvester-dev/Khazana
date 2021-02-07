import React from 'react'
import { Card,Form } from 'react-bootstrap'
import { Button ,Input } from '@material-ui/core'

import './TicketList.css'

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
    genre: 'Drama/RomanceInput',
    
  },
  
]


export default function TicketList() {
    return (
       <div className="hh">
            {event.map((event, index) => 
                    <>
                      <div className="cardlist">    
                      <Card className="gh" style={{ width: '18rem' }}>
                        <Card.Img className ="pic" variant="top" src={event.poster} />
                        <Card.Body id="cb">
                            <Card.Title className="kl">{event.title}</Card.Title>
                            <Card.Text className="gg">
                            <strong>Description: </strong> Stay on top of the changing U.S. and global markets with our market summary page. Dive deeper with our rich data, rate tables and tools.
                            </Card.Text>
                            <Card.Text id="gl">Price : 1000</Card.Text>
              
                            <Input className="op" placeholder = "Transfer To"></Input>
                            
                            <Button id="jj" variant="contained" color="primary">Transfer</Button>
                            <Button id="jk" variant="contained" color="primary">Sell</Button>
                        
                        </Card.Body>
                        </Card>
                      </div>  
                    </>
                )}
        </div>
    )
}
