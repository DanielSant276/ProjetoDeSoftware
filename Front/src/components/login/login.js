import { useState } from "react";
import "../login/login.css";

function Login() {
  const [usuario, setUsuario] = useState();
  const [senha, setSenha] = useState();

  return (
    <div className="principal login-background-imagem">
      <p className="principal-bem-vindo space-5 negrito">Bem-vindo,</p>
      <div className="login-formulario background-cor-padrao">
        <form className="space-40" name="form">
          <div className="login-campo">
            <p className="login-label login-texto1 space-20 jso negrito">USUÁRIO</p>
            <input className="login-input background-cor-padrao space-20" type="name" value={usuario} onChange={(event) => setUsuario(event.target.value)} />
          </div>
          <div className="login-campo">
            <p className="login-label login-texto2 space-20 jso negrito">SENHA</p>
            <input className="login-input background-cor-padrao space-5" type="password" value={senha} onChange={(event) => setSenha(event.target.value)} />
            <p className="login-esqueceu-senha laranja negrito link">esqueceu sua senha?</p>
          </div>
        </form>
        <button className="login-submit link jso negrito" onClick={() => console.log(`usuario: ${usuario}  senha: ${senha}`)}>ENTRAR</button>
      </div>
      <div className="login-rodape">
        <h1> UFRRJ SOFTWARES  - 2022 </h1>
      </div>
    </div>
  );
}

export default Login;
