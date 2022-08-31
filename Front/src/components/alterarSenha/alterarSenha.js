import React, { useState } from 'react'
import "../alterarSenha/alterarSenha.css";
import { trocarSenha } from "../../controller/alterarSenha";

function AlterarSenha({ link }) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [repeteSenha, repeteSenhaSenha] = useState("");

  const onChangeUsuario = event => setUsuario(event.target.value);
  const onChangeSenha = event => setSenha(event.target.value);
  const onChangeRepeteSenha = event => repeteSenhaSenha(event.target.value);

  return (
    <div className="principal alterar-senha-background-imagem">
      <p className="alterar-senha space-5 negrito">Alterar senha</p>
      <div className="alterar-senha-formulario espaco-entre alinha-centro">
        <div className="alterar-senha-campo">
          <p className="alterar-senha-label alterar-senha-texto1 jso negrito space-10">Login</p>
          {/* usuário precisa ficar fixo para não dar problema ao trocar a senha, o melhor seria só ter o valor de nova e antiga senha */}
          <input className="alterar-senha-input background-cor-padrao space-20" value={usuario} onChange={onChangeUsuario} />
        </div>
        <div className="alterar-senha-campo">
          <p className="alterar-senha-label alterar-senha-texto2 jso negrito space-10">NOVA SENHA</p>
          <input className="alterar-senha-input background-cor-padrao space-20" type="password" value={senha} onChange={onChangeSenha} />
        </div>

        <div className="alterar-senha-campo">
          <p className="alterar-senha-label alterar-senha-texto3 space-20 jso negrito space-10">CONFIRMAR NOVA SENHA</p>
          <input className="alterar-senha-input background-cor-padrao space-20" type="password" value={repeteSenha} onChange={onChangeRepeteSenha} />
        </div>
        <div className="alterar-senha-auxiliar coluna">
          <button className="alterar-senha-submit link jso negrito alinha-centro" onClick={() => trocarSenha(usuario, senha, repeteSenha, link)}>ALTERAR SENHA</button>
        </div>

      </div>

      <div className="alterar-senha-rodape">
        <h1> UFRRJ SOFTWARES  - 2022 </h1>
      </div>
    </div>
  );
}

export default AlterarSenha;