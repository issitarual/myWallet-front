import { TotalContainer, Value } from "./HomeStyles";

export default function Total ({value}) {
    return(
        <TotalContainer>
            <h6>SALDO</h6>
            <Value type={value[0] === "-"? false: true}>{value[0] === "-"? value.replace("-", ""): value}</Value>
        </TotalContainer>
    )
}