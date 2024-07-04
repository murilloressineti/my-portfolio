import { Container } from "./styles";
import downloadIcon from "../../assets/icons/download.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import githubIcon from "../../assets/icons/github.svg";
import curriculoPDF from "../../assets/curriculo-murillo-front-end.pdf"

export function InitialIcons() {
  const handleDownload = () => {
    window.open(curriculoPDF, "_blank")
  } 

  return (
    <Container>
      <button className="download" onClick={handleDownload}>
        Baixar Currículo <img src={downloadIcon} alt="Download" />
      </button>

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
    </Container>
  );
}
