import React from 'react'
import { useForm } from "react-hook-form";
import './cadastrarUsuario.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

const schema = yup.object({
  USUARIO: yup.string().required(),
  SENHA: yup.string().min(8).required(),
}).required();

function CadastrarUsuario({link}) {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  }); 

  function onSubmit(userData){
    console.log(userData)
  } 

  const [usuario, setUsuario] = useState();
  const [senha, setSenha] = useState();
  
  const onChangeUsuario = event => setUsuario(event.target.value);
  const onChangeSenha = (event) => setSenha(event.target.value);
  
  function irParaCadastroCliente() {
    navigate("/cadastroCliente")
  }

  return (
    
    <div className="principal cadastro-usuario-background-imagem">
    <p className="principal-cadastrar-usuario space-5 negrito">Cadastrar Usuário</p>
    <div className="cadastro-usuario-formulario background-cor-padrao">
   
    <form className="conteudoForm" onSubmit={handleSubmit(onSubmit)}>
      
      <div className='cadastro-usuario'>
      <p className="cadastro-usuario-label cadastro-usuario-texto1 space-20 jso negrito">USUÁRIO</p>
        <input className="cadastro-usuario-input background-cor-padrao space-20" type="name" value={usuario} onChange={onChangeUsuario} { ... register("USUARIO", { required: true })}/>
        {errors.USUARIO && <span>PREENCHA O CAMPO</span>}
      </div>

      <div className='cadastro-senha'>
      <p className="cadastro-usuario-label cadastro-usuario-texto2 space-20 jso negrito">SENHA</p>
        <input className="cadastro-usuario-input background-cor-padrao space-5" type="password" value={senha} onChange={onChangeSenha} { ... register("SENHA", { required: true })}/>
        {errors.SENHA && <span>PREENCHA O CAMPO</span>}
      </div>
      <div>
        <button className="cadastro-usuario-submit negrito link jso" onClick={() => CadastrarUsuario(usuario, senha, link, irParaCadastroCliente)}>CADASTRAR</button>
      </div>
    </form>
    
    <div className="cadastro-usuario-rodape">
        <h1> UFRRJ SOFTWARES  - 2022 </h1>
    </div>
    </div>
    </div>    
  );
}

export default CadastrarUsuario;