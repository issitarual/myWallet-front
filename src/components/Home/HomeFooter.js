import { Footer } from "./HomeStyles";
import { AddCircleOutline, RemoveCircleOutline } from 'react-ionicons'
import { Link, useHistory } from "react-router-dom";

export default function HomeFooter(){
    let history = useHistory();
    return(
        <Footer>
            <button onClick={() => history.push("/add")}>
                <AddCircleOutline
                    color={'#fff'} 
                    height="25px"
                    width="25px"
                />
                Nova<br/>entrada               
            </button>
            <button onClick={() => history.push("/remove")}>
                <RemoveCircleOutline
                    color={'#fff'} 
                    height="25px"
                    width="25px"
                />
                Nova<br/>saída
            </button>
        </Footer>
    );
};