import { Container } from "./HomeStyles";
import { useEffect, useContext, useState } from "react";
import axios from "axios";

import UserContext from "../../contexts/userContext";
import Total from "./Total";

export default function Historic() {
    const { user } = useContext(UserContext);
    const [finances, setFinances] = useState([]);

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        }

        const request = axios.get("http://localhost:4000/finances", config);

        request.then(success => setFinances(success.data));
        request.catch(error => alert("Algo deu errado, tente mais tarde!"));
    },[]);

    console.log(finances)
    
    return(
        <Container status={finances.length === 0? false: true}>
            {finances.length === 0?
            <p>
                Não há registros de<br/>entrada ou saída
            </p>:
            <Total value = {finances.total}/>
            }
            

        </Container>
    );  
};