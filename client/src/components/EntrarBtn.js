import React, { useState } from 'react';
import {Button} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const EntrarBtn = (props) => {

    const [tipo, setTipo] = useState('error')

    const valid = () => {

        let alerta = document.getElementById('alerta')
        alerta.style.display = 'block'
    
        fetch(props.URL, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            email: document.getElementById('email-login').value,
            senha: document.getElementById('senha-login').value
            })
        })
            .then(response => response.json())
            .then(json => {
                document.getElementById('mensagem').innerHTML = json.msg
                if(json.logado === 1){
                    setTipo('success')
                }else{
                    setTipo('error')
                }

            } 
            )
    }

    return(
        <>
            <Alert id="alerta" style={{marginTop: '20px', width: '80%', height: '40px', textAlign: 'center'}} severity={tipo}><p id="mensagem"></p></Alert>
            <Button id="entrar-btn" onClick={valid} size="large" style={{width: '85%', marginTop: '20px'}} fullWidth variant='contained' color='Primary'>Entrar</Button>
        </>
    )
}

export default EntrarBtn;