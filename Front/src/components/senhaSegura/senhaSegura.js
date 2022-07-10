import "./senhaSegura.css";
import linhasImg from "../../img/linhas.svg"
import olhoImg from "../../img/olho.png"

function SenhaSegura() {
  return (
    <div className="principal senha-segura-background-imagem">
      <div className="senha-segura-container">
        <div className="senha-segura-box1 linha">
          <img className="senha-segura-linhas-img" src={linhasImg} alt="" />
          <img className="senha-segura-olho-img" src={olhoImg} alt="" />
          <div className="senha-segura-frase-atencao">
            <h1 className="laranja negrito">ATENÇÃO!</h1>
          </div>
        </div>
        <div className="senha-segura-box2">
          <h1 className="senha-segura-titulo roxo negrito space-20">UTILIZE SENHAS SEGURAS</h1>
        </div>
        <p className="senha-segura-text texto-centro">
          &bull; Sua senha deve possuir de 8 à 16 caracteres<br />
          &bull; Sua senha deve incluir caractéres especiais ( “@”,” #”,”_”,”!” )<br />
          &bull; Sua senha deve incluir letras MAIUSCÚLAS<br />
          &bull; Sua senha deve incluir NÚMEROS (0 à 10)
        </p>
      </div>
    </div>
  );
}

export default SenhaSegura;