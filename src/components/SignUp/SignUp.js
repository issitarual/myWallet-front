import { Container } from "../loginAndSingupStyles";
import { useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

export default function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    return(
        <Container>
            <h1>MyWallet</h1>
            <form onSubmit={console.log("hey")}>
                <input 
                    type = "text" 
                    placeholder = "Nome" 
                    value = {name} 
                    onChange = {e => setName(e.target.value)}
                    required
                />
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
                <input 
                    type = "password" 
                    placeholder = "Confirme a senha" 
                    value = {confirmPassword} 
                    onChange = {e => setConfirmPassword(e.target.value)}
                    required
                />
                <button type="button">
                    Cadastrar
                </button>
            </form>
            <Link to="/">
                <p>
                    Já tem uma conta? Entre agora!
                </p>
            </Link>
        </Container>
    );
};