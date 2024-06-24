import { Container } from "./styles";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <Link to={"/"}>
        <h1>Ressineti.dev</h1>
      </Link>
    </Container>
  );
}
