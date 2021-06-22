import { Container } from "../formsStyles";
import { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import Loader from "react-loader-spinner";
import axios from "axios";

export default function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [state, setState] = useState(false);

    let history = useHistory();

    return(
        <Container>
            <h1>MyWallet</h1>
            <form onSubmit={(e) => signUp(name, email, password, confirmPassword, e)}>
                <input 
                    type = "text" 
                    placeholder = "Nome" 
                    value = {name} 
                    onChange = {e => setName(e.target.value)}
                    required
                    disabled = {state}
                />
                <input 
                    type = "email" 
                    placeholder = "E-mail" 
                    value = {email} 
                    onChange = {e => setEmail(e.target.value)}
                    required
                    disabled = {state}
                />
                <input 
                    type = "password" 
                    placeholder = "Senha" 
                    value = {password} 
                    onChange = {e => setPassword(e.target.value)}
                    required
                    disabled = {state}
                />
                <input 
                    type = "password" 
                    placeholder = "Confirme a senha" 
                    value = {confirmPassword} 
                    onChange = {e => setConfirmPassword(e.target.value)}
                    required
                    disabled = {state}
                />
                <button type="submit" disabled = {state}>
                    {state? "": "Cadastar"}
                    <Loader 
                        visible ={state} 
                        type="ThreeDots" 
                        color="#FFF" 
                        height={15} 
                        width={80} 
                    /> 
                </button>
            </form>
            <Link to="/">
                <p>
                    Já tem uma conta? Entre agora!
                </p>
            </Link>
        </Container>
    );

    function signUp(name, email, password, confirm, event) {
        event.preventDefault();
        setState(true);

        if(password !== confirm){ 
            setState(false);
            return alert("As senhas são diferentes, tente novamente!");
        }
        else if(!name){ 
            setState(false);
            return alert ("Insira o nome!");
        }
        else if(!email){ 
            setState(false);
            return alert ("Insira o e-mail!");
        }
        else if(password.length < 6){
            setState(false);
            return alert("A senha precisa ter pelo menos 6 caracteres");
        }

        const data = {
            "name": `${name}`,
            "email": `${email}`,
            "password": `${password}`
        }

        const request = axios.post('http://localhost:4000/sign-up', data)

        request.then(response => history.push("/"));
        request.catch(error => {
            alert("Ocorreu um erro, tente novamente!")
            setState(false)
        });

    }
};