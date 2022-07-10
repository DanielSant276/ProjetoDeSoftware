import "./senhaSegura.css";
import linhasimg from "../../img/linhas.svg"
import olhoimg from "../../img/olho.svg"

function SenhaSegura() {
  return (
    <div className="senha-segura-principal">
      <div className="senha-segura-container">
        <div className="senha-segura-box1">
          <div className="senha-segura-imgSenhaSegura">
            <img className="senha-segura-linhasImg" src={linhasimg} alt="" />
            <img className="senha-segura-olhoImg" src={olhoimg} alt="" />
          </div>
          <div className="senha-segura-fraseAtencao" >
            <h1>ATENÇÃO!</h1>
          </div>
        </div>
        <div className="senha-segura-box2">
          <h1 className="senha-segura-titulo space-40">UTILIZE SENHAS SEGURAS</h1>
        </div>
        <div className="senha-segura-box3">
          <p>
            * Sua senha deve possuir de 8 à 16 caracteres<br />
            * Sua senha deve incluir caractéres especiais<br />
            ( “@”,” #”,”_”,”!” )<br />
            * Sua senha deve incluir letras MAIUSCÚLAS<br />
            * Sua senha deve incluir NÚMEROS (0 à 10)
          </p>
        </div>
      </div>
    </div>
  );
}

export default SenhaSegura;