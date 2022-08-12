import { useState } from "react";
import "../login/login.css";
import { login } from "../../controller/login.js";
import { useNavigate } from 'react-router-dom';

function Login({ link }) {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState();
  const [senha, setSenha] = useState();

  const onChangeUsuario = event => setUsuario(event.target.value);
  const onChangeSenha = (event) => setSenha(event.target.value);

  function irParaMenu() {
    navigate("/menu")
  }

  return (
    <div className="principal login-background-imagem">
      <p className="principal-bem-vindo space-5 negrito">Bem-vindo,</p>
      <div className="login-formulario background-cor-padrao">
        <div className="space-40" name="form">
          <div className="login-campo">
            <p className="login-label login-texto1 space-20 jso negrito">USUÁRIO</p>
            <input className="login-input background-cor-padrao space-20" type="name" value={usuario} onChange={onChangeUsuario} />
          </div>
          <div className="login-campo">
            <p className="login-label login-texto2 space-20 jso negrito">SENHA</p>
            <input className="login-input background-cor-padrao space-5" type="password" value={senha} onChange={onChangeSenha} />
            <p className="login-esqueceu-senha laranja negrito link">esqueceu sua senha?</p>
          </div>
        </div>
        <button className="login-submit link jso negrito" onClick={() => login(usuario, senha, link, irParaMenu)}>ENTRAR</button>
      </div>
      <div className="login-rodape">
        <h1> UFRRJ SOFTWARES  - 2022 </h1>
      </div>
    </div>
  );
}

export default Login;
