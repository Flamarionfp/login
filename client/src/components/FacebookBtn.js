import React from 'react';
import {Button} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';

export default function FacebookBtn(){
    return(
        <>
           <Button size="large" style={{width: '85%'}} variant='contained' color='Secondary' endIcon={<FacebookIcon />}>Entrar com Facebook</Button>
        </>
    )
}