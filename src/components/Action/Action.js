import { Container } from "./ActionStyles";
import { useState } from "react";

export default function Action({type}){
    const [valor, setValor] = useState(null);
    const [description, setDescription] = useState("");
    return(
        <Container>
            <h1>Nova {type === "add"? "Entrada": "Saída"}</h1>
            <form onSubmit={()=>console.log("hey")}>
                <input 
                    type = "text" 
                    placeholder = "Valor" 
                    value = {valor} 
                    onChange = {e => setValor(e.target.value)}
                    required
                />
                <input 
                    type = "text" 
                    placeholder = "Descrição" 
                    value = {description} 
                    onChange = {e => setDescription(e.target.value)}
                    required
                />
                <button type="button">
                    Salvar {type === "add"? "entrada": "saída"}
                </button>
            </form>
        </Container>
    );
};