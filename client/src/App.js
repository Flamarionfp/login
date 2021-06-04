import './App.css';
import React from 'react';
import BoxWhite from './components/BoxWhite';
import { ThemeProvider, createMuiTheme, Grid } from '@material-ui/core';

export default function App(){
      const theme = createMuiTheme({
        palette: {
          primary: {
            main: '#000000',
          },
          secondary: {
            main: '#3B5998',
          },
        },
      });
      return(
          <ThemeProvider theme={theme}>
            <Grid container justify="center" alignItems="center" style={{minHeight: '97vh'}}>
              <BoxWhite titulo="Bem vindo" nome="Steve Jobs"/>
            </Grid>
          </ThemeProvider>
      ) 
}



