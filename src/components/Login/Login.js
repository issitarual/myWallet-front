import { Container } from "../formsStyles";
import { useState, useContext } from "react";
import { Link, useHistory } from 'react-router-dom';
import Loader from "react-loader-spinner";
import axios from "axios";

import UserContext from "../../contexts/userContext";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [state, setState] = useState(false);

    const { setUser } = useContext(UserContext);

    let history = useHistory();

    if (localStorage.length !== 0){
        const user = JSON.parse(localStorage.getItem("user"));
        setUser(user);
        history.push("/home");
    }

    return(
        <Container>
            <h1>MyWallet</h1>
            <form onSubmit={e=>login(email, password, e)}>
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
                <button type="sumbmit" disabled = {state}>
                    {state? "": "Entrar"}
                    <Loader 
                        visible ={state} 
                        type="ThreeDots" 
                        color="#FFF" 
                        height={15} 
                        width={80} 
                    /> 
                </button>
            </form>
            <Link to="/sign-up">
                <p>
                    Primeira vez? Cadastre-se!
                </p>
            </Link>
        </Container>
    );
    function login(email, password, event) {
        event.preventDefault();
        setState(true);

        if(email.length === 0){
            setState(false);
            return alert("Insira um email");
        }
        else if(password.length < 6){
            setState(false);
            return alert("A senha precisa ter pelo menos 6 dígitos");
        }
        
        const data = {
            "email": email,
            "password": password
        };

        const request = axios.post('http://localhost:4000/sign-in', data);

        request.then(sucess => {
            setUser(sucess.data);
            localStorage.setItem('user', JSON.stringify(sucess.data));
            history.push("/home")
        });
        request.catch(error => {
            alert("Algo deu errado, tente novamente!")
            setState(false);
        })
    }
};

