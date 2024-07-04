import { Container } from "./styles";

import paperPlane from "../../assets/form/paper-plane.svg";

export function Form() {
  return (
    <Container action="https://api.staticforms.xyz/submit" method="post" id="my-form">
      <fieldset>
        <legend>
          <h2>Mande uma mensagem para mim!</h2>
        </legend>

        <div className="input-wrapper">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome e sobrenome"
            required
          />
        </div>

        <div className="input-wrapper">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu e-mail "
            required
          />
        </div>

        <div className="input-wrapper">
          <textarea
            name="message"
            id="message"
            placeholder="Sua mensagem..."
            required
          ></textarea>
        </div>

        <button type="submit">
          Enviar Mensagem <img src={paperPlane} alt="paperPlane" />
        </button>
        <input type="hidden" name="redirectTo" value="https://murilloressineti.com.br/"/>
        <input type="hidden" name="accessKey" value="6cd41307-a7c3-41c4-bd87-230cae59d44e"/>
      </fieldset>
    </Container>
  );
}
