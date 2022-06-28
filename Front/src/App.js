import './App.css';

function App() {
  return (
      <div class="formulario">
        <form name="form" class="conteudoForm" >
            <div>
                <label>USUÁRIO</label>
                <input type="name"/>
            </div>
            <div>
                <label>SENHA</label>
                <span  id="enderecoErro"></span>
                <input type="password"/>
            </div>
        </form>   
        <button class="submit" onclick="todasFunc()">Enviar</button>   
    </div>
  );
}

export default App;
