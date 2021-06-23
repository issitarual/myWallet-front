import { Header } from "./HomeStyles";
import { EnterOutline } from 'react-ionicons';
import { useContext } from "react";
import { useHistory } from "react-router";

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
        localStorage.clear();
        history.push("/");        
    }
};
