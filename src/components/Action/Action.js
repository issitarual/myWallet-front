import { Container } from "./ActionStyles";
import { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";
import UserContext from "../../contexts/userContext";
import axios from "axios";

export default function Action({type}){
    const [valor, setValor] = useState(null);
    const [description, setDescription] = useState("");
    const [state, setState] = useState(false);

    const { user } = useContext(UserContext);

    let history = useHistory();
    return( 
        <Container>
            <h1>Nova {type === "add"? "Entrada": "Saída"}</h1>
            <form onSubmit={(e) => financialEvent(e, valor, description, type)}>
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
    function financialEvent(event, valor, description, type) {
        event.preventDefault();
        setState(true);
        if(valor <= 0 || valor.length === 0) return alert("Insira um valor!");
        if(description.length === 0) return alert("Insira uma descrição!");

        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        };

        const data = {
            "value": valor,
            "description": description,
            "event_type": type === "add"? "entrada": "saída"
        };
        const request = axios.post("http://localhost:4000/finances", data, config);

        request.then(success => {
            history.push("/home");
        });

        request.catch(error => {
            alert("Algo deu errado, tente novamente!")
            setState(false);
        });
    }
};