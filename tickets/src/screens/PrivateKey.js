import React , { useState } from 'react'
import {Box , Button } from '@material-ui/core'
import { PrivateKey , Mnemonic} from '@hashgraph/sdk'


import './PrivateKey.css'


export default function PK() {

    const [PrKey , SetPrKey ] = useState('');
    

    const inputEvent = (e) => {
        /* console.log(e.target.value); */
        SetPrKey(e.target.value)
    }

    /* media milk rally thought afford gas monitor close box slow employ marine quality jacket orbit trigger cancel try above weird save prepare snow slim */
    
    
    const onSubmit = async (e) => {
        e.preventDefault();
        const privateKey = PrivateKey.fromString(PrKey); 
        console.log(privateKey.toString());   
        const publicKey = privateKey.publicKey;
        console.log(publicKey.toString());
        SetPrKey('')
        /* const mnemonic = await Mnemonic.generate(); */
        /* var i;
        for(i=0;i<24;i++){
            console.log(mnemonic.words[i])
        } */
        
        
    }

    return (
        <div className="screen">
            
                <Box className ="box" component="div" m={1}>
                <input type="text" className="pkinput" onChange={inputEvent} value={PrKey}/>
                <Button onClick={onSubmit} type="submit" id ="l" variant="contained" color="primary" title="hh">Login with Private Key</Button>
                </Box>
            
        </div>
    )
}
