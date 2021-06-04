import React from 'react';
import {Grid} from '@material-ui/core';


export default function LoginMain(){
        return(
            <Grid className="login-main" container style={{width: '95%'}}>
                <label className="email-label">Insira seu e-mail</label><br></br>
                <input required id="email-login" placeholder="steve@apple.com" className="input-login" type="email"></input>
                <div id="senha-div">
                    <p id="inserir-senha">Insira sua senha</p>
                    <p id="esqueceu-senha">Esqueceu a senha?<a>Clique aqui</a></p>
                </div>
                    <input required id="senha-login" placeholder="•••••••••••••" className="input-login" type="password"></input>
            </Grid>
        )
}
