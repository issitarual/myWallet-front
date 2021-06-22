import { Header } from "./HomeStyles";
import { EnterOutline } from 'react-ionicons'

export default function HomeHeader(){
    return(
        <Header>
            <h1>Olá, {"fulano"}</h1>
            <EnterOutline
                color={'#fff'} 
                height="25px"
                width="25px"
            />
        </Header>
    );
};
