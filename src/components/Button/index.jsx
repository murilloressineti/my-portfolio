import { Container } from "./styles";

import arrow from "../../assets/icons/arrow.svg";

export function Button({title}){
    return(
        <Container>
            {title}
            <span><img src={arrow} alt="Arrow"/></span>
        </Container>
    )
}