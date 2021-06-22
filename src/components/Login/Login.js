import styled from 'styled-components';
import { useState } from "react";
import axios from "axios";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return(
        <Container>
            <h1>MyWallet</h1>
            <form onSubmit={()=>console.log("hey")}>
                <input 
                    type = "email" 
                    placeholder = "E-mail" 
                    value = {email} 
                    onChange = {e => setEmail(e.target.value)}
                    required
                />
                <input 
                    type = "password" 
                    placeholder = "Senha" 
                    value = {password} 
                    onChange = {e => setPassword(e.target.value)}
                    required
                />
                <button type="button">
                    Entrar
                </button>
            </form>
            <p>
                Primeira vez? Cadastre-se!
            </p>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100vh - 50px);
    justify-content: center;
    h1{
        font-family: 'Saira Stencil One', cursive;
        font-size: 32px;
        text-align: center;
        color: #fff;
        margin-bottom: 25px;
    }
    form{
        display: flex;
        flex-direction: column;
    }
    input{
        height: 58px;
        background-color: #fff;
        border-radius: 5px;
        border: none;
        font-family: 'Raleway', sans-serif;
        color: #333;
        padding: 11px;
        margin-bottom: 13px;
        ::-webkit-input-placeholder  { 
                color: #000; 
        }
    }
    input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
    }
    button{
        height: 46px;
        background-color: #A76AD6;
        border-radius: 5px;
        border: none;
        font-family: 'Raleway', sans-serif;
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
    }
    p{
        font-family: 'Raleway', sans-serif;
        font-size: 15px;
        text-align: center;
        color: #fff;  
        margin-top: 36px;
        cursor: pointer;
    }
    p:hover{
        text-decoration: underline;
    }
`;