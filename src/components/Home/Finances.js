import { Event, Created, Value, Description } from "./HomeStyles";

export default function Finances({event}) {
    const { created_at, description, name, valor} = event;
    return(
        <Event>
            <Created>
                <p>{created_at}</p>
                <Description>{description}</Description>
            </Created>
            <Value type={name === "entrada"? true: false}>{valor}</Value>
        </Event>
    )
}