import { Container } from "./ActionStyles";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";

import UserContext from "../../contexts/userContext";

export default function Action({type}){
    const [valor, setValor] = useState(null);
    const [description, setDescription] = useState("");
    const [state, setState] = useState(false);

    const { user } = useContext(UserContext);
    return( 
        <Container>
            <h1>Nova {type === "add"? "Entrada": "Saída"}</h1>
            <form onSubmit={(e) => financialEvent(e, valor, description)}>
                <input 
                    type = "number" 
                    placeholder = "Valor" 
                    value = {valor} 
                    onChange = {e => setValor(e.target.value)}
                    required
                    disabled = {state}
                />
                <input 
                    type = "text" 
                    placeholder = "Descrição" 
                    value = {description} 
                    onChange = {e => setDescription(e.target.value)}
                    required
                    disabled = {state}
                />
                <button type="submit" disabled = {state}>
                    {state? "": type === "add"? "Salvar entrada": "Salvar saída"}
                    <Loader 
                        visible ={state} 
                        type="ThreeDots" 
                        color="#FFF" 
                        height={15} 
                        width={80} 
                    /> 
                </button>
                <p>
                    <Link to="/home">Voltar</Link>
                </p>
            </form>
        </Container>
    );
    function financialEvent(event, valor, description) {
        event.preventDefault();
        setState(true);
        if(valor <= 0 || valor.length === 0) return alert("Insira um valor!");
        if(description.length === 0) return alert("Insira uma descrição!");

    }
};