import { Container } from "../formsStyles";
import { useState } from "react";
import { Link } from 'react-router-dom';
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
            <Link to="/sign-up">
                <p>
                    Primeira vez? Cadastre-se!
                </p>
            </Link>
        </Container>
    );
};

