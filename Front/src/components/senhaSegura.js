import './App.css';
import linhasimg from "./img/linhas.svg"
import olhoimg from "./img/olho.svg"

function App() {

  return (

    <div className='principal'>
      <div className='container'>
        <div className='box1'>
          <div className='imgSenhaSegura'>
            <img className='linhasImg' src={linhasimg} alt=""/>
            <img className='olhoImg' src={olhoimg} alt=""/>
          </div>
          <div className='fraseAtencao' >
            <h1>ATENÇÃO!</h1>
          </div>
        </div>
        <div className='box2'>
          <h1 className='titulo space-40'>UTILIZE SENHAS SEGURAS</h1>
        </div>
        <div className='box3'>
            <p>* Sua senha deve possuir de 8 à 16 caracteres</p>
            <p>*Sua senha deve incluir caractéres especiais </p>
            <p>( “@”,” #”,”_”,”!” )</p>
            <p>*Sua senha deve incluir letras MAIUSCÚLAS</p>
            <p>*Sua senha deve incluir NÚMEROS (0 à 10)</p>
        </div>
      </div>
    </div>
     
  );
}

export default App;
