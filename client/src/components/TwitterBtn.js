import React from 'react';
import {Button} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';


export default function TwitterBtn(){
    return(
        <>
            <Button size="large" style={{width: '85%', marginTop: '20px', marginBottom: '30px', backgroundColor: '#55ACEE', color: '#FFFFFF'}} variant='contained' endIcon={<TwitterIcon />}>Entrar com Twitter</Button>
        </>
    )
}