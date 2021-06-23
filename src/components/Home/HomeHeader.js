import { Header } from "./HomeStyles";
import { EnterOutline } from 'react-ionicons';
import { useContext } from "react";
import { useHistory } from "react-router";
import axios from "axios";

import UserContext from "../../contexts/userContext";

export default function HomeHeader(){
    let history = useHistory();

    const { user } = useContext(UserContext);
    return(
        <Header>
            <h1>Olá, {user.name}</h1>
            <EnterOutline onClick={logOut}
                color={'#fff'} 
                height="25px"
                width="25px"
            />
        </Header>
    );
    function logOut() {
        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        }
        const request = axios.post("http://localhost:4000/sign-out",{}, config)

        request.then( succes => {
            localStorage.clear();
            history.push("/");  
        })
        request.catch( error => alert("Ocorreu um erro, tente novamente!"));              
    }
};
