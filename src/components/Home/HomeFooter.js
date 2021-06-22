import { Footer } from "./HomeStyles";
import { AddCircleOutline, RemoveCircleOutline } from 'react-ionicons'
import { Link } from "react-router-dom";

export default function HomeFooter(){
    return(
        <Footer>
            <button>
                <AddCircleOutline
                    color={'#fff'} 
                    height="25px"
                    width="25px"
                />
                Nova<br/>entrada               
            </button>
            <button>
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