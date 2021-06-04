import React from 'react';
import LoginMain from './LoginMain';
import EntrarBtn from './EntrarBtn';
import FacebookBtn from './FacebookBtn';
import TwitterBtn from './TwitterBtn';
import {Grid} from '@material-ui/core';
import Apple from '../img/apple-logo.png';

export default function BoxWhite(props){
    return (
      <Grid className="box" container direction='column' alignItems='center' justify='center' style={{borderRadius: '15px', maxWidth: '500px', minHeight: '60vh'}}>
          <img className="logo" src={Apple} alt="logo"></img>
          <h3 className="bem-vindo"><span>{props.titulo}</span><br/> 
          <b>{props.nome}</b></h3>
          <LoginMain />
          <EntrarBtn URL='/login' />
          <p className="ou-texto">OU</p>
          <FacebookBtn />
          <TwitterBtn />
      </Grid>
    );
  }


  
  
        




