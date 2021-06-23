import { Container } from "./HomeStyles";
import { useEffect, useContext } from "react";
import axios from "axios";

import UserContext from "../../contexts/userContext";

export default function Historic() {
    const { user } = useContext(UserContext);

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        }

        const request = axios.get("http://localhost:4000/historic", config);

        request.then(success => alert("sucesso"));
        request.catch(error => alert("Algo deu errado, tente mais tarde!"));
    },[]);
    
    return(
        <Container>
            <p>
                Não há registros de<br/>entrada ou saída
            </p>
        </Container>
    );  
};