import { Container, Icons } from "./styles";
import downloadIcon from "../../assets/footer/download.svg";
import linkedinIcon from "../../assets/footer/linkedin.svg";
import githubIcon from "../../assets/footer/github.svg";

export function Footer() {
  return (
    <Container>
      <Icons>
        <a href="https://www.linkedin.com/in/murilloressineti/" target="blank">
          <button className="linkedin">
            <img src={linkedinIcon} alt="LinkedIn" />
          </button>
        </a>
        <a href="https://github.com/murilloressineti/" target="blank">
          <button className="github">
            <img src={githubIcon} alt="GitHub" />
          </button>
        </a>
        <button className="download">
          <img src={downloadIcon} alt="Download" />
        </button>
      </Icons>

      <p>Copyright ©2024 | Murillo Ressineti | Todos os direitos reservados.</p>
    </Container>
  );
}
