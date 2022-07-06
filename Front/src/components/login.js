
import { useState } from 'react';
import './App.css';

function App() {

  const [usuario, setUsuario] = useState();
  const [senha, setSenha] = useState();

  return (

    <div className='principal'>
      <div className="formulario space-10">
        <form name="form" className="conteudoForm space-10" >
            <div className="campo1">
                <label className='texto1'>USUÁRIO</label>
                <input type="name" value={usuario} onChange={(event) => setUsuario(event.target.value)}/>
            </div>
            <div className="campo2 ">
                <label className='texto2'>SENHA</label>
                <input type="password" value={senha} onChange={(event) => setSenha(event.target.value)} />
            </div>
        </form>   
        <button className="submit" onClick={() => console.log(`usuario: ${usuario}  senha: ${senha}`)}>ENTRAR</button>  
      </div>
      <div className="rodape">
        <h1>UFRRJ SOFTWARES  - 2022 </h1>
      </div> 
    </div>
      
      
     
  );
}

export default App;
