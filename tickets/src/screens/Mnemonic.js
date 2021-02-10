import React , { useState } from 'react'
import {Box , Button } from '@material-ui/core'
import { Mnemonic, PrivateKey } from '@hashgraph/sdk'
import './PrivateKey.css'


export default function Mne() {

    const [Mn , SetMn ] = useState('');
    

    const inputEvent = (e) => {
        console.log(e.target.value);
        SetMn(e.target.value)
    }


    const onSubmit = async (e) => {
        e.preventDefault();
        const mnemonic = await Mnemonic.fromString(Mn);
        console.log(mnemonic)
        /* const privateKey = PrivateKey.fromMnemonic(Mn); */
        const privateKey = await mnemonic.toPrivateKey();
        console.log(privateKey);
        const publicKey = privateKey.publicKey;
        console.log(publicKey.toString());
        SetMn('');
       
    }


    return (
        <div className="screen1">
            <form >
                <Box className ="box" component="div" m={1}>
                <input onChange={inputEvent} id="inn" type="text" placeholder="Enter Mnemonic Phrase" className="pkinput" value={Mn}/>
                <Button onClick={onSubmit} type="submit" className ="l" variant="contained" color="primary" title="hh">Login</Button>
                </Box>
            </form>
        </div>
        
    )
}
