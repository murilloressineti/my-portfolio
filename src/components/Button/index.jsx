import { Container } from "./styles";

import arrowIcon from "../../assets/icons/arrow.svg";

export function Button({ title, href }) {
  return (
    <Container>
      <a href={href} target="blank">
        {title}
        <span>
          <img src={arrowIcon} alt="Arrow" />
        </span>
      </a>
    </Container>
  );
}
