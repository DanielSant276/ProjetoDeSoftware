import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './App.css';

const schema = yup.object({
  USUARIO: yup.string().required(),
  SENHA: yup.string().min(8).required(),
}).required();

function App() {
<<<<<<< HEAD

  return (
    <div></div>
   
     
=======
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  }); 

  function onSubmit(userData){
    console.log(userData)
  } 
  return (
    
    <div class='loginform'>
    <form class="conteudoForm" onSubmit={handleSubmit(onSubmit)}>
      <h1>Bem vindo,</h1>
      <main class="container">
      <label>
        USUÁRIO
        <input { ... register("USUARIO", { required: true })}/>
        {errors.USUARIO && <span>PREENCHA O CAMPO</span>}
      </label>

      <label>
        SENHA
        <input { ... register("SENHA", { required: true })}/>
        {errors.SENHA && <span>PREENCHA O CAMPO</span>}
      </label>

      <button type='submit'>ENTRAR</button>
      </main>
    </form>
    </div>
    
      /*<div class="formulario">
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
    </div>*/
>>>>>>> 1daaa98e67c12db2c69ac57db601ad8e16f30a10
  );
}

export default App;