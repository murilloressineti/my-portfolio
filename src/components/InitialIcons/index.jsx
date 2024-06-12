import { Container } from "./styles";
import downloadIcon from "../../assets/icons/download.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import githubIcon from "../../assets/icons/github.svg";

export function InitialIcons() {
  return (
    <Container>
      <button className="download">
        Baixar Currículo <img src={downloadIcon} alt="Download" />
      </button>
      <button className="linkedin">
        <img src={linkedinIcon} alt="LinkedIn" />
      </button>
      <button className="github">
        <img src={githubIcon} alt="GitHub" />
      </button>
    </Container>
  );
}
