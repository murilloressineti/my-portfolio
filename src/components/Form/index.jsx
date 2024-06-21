import { Container } from "./styles";

import paperPlane from "../../assets/form/paper-plane.svg";

export function Form() {
  return (
    <Container>
      <fieldset>
        <legend>
          <h2>Mande uma mensagem para mim!</h2>
        </legend>

        <div class="input-wrapper">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome e sobrenome"
            required
          />
        </div>

        <div class="input-wrapper">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu e-mail "
            required
          />
        </div>

        <div class="input-wrapper">
          <textarea
            name="message"
            id="message"
            placeholder="Sua mensagem..."
            required
          ></textarea>
        </div>

        <button type="submit">Enviar Mensagem <img src={paperPlane} alt="paperPlane" /></button>
      </fieldset>
    </Container>
  );
}
