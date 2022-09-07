import React, { useState } from 'react';
import '../menu/menu.css';
import imagem from '../../img/Polygon.svg';
import Locacao from '../locacao/locacao';
import { useNavigate } from 'react-router-dom';

function Menu({ link }) {
  const navigate = useNavigate();

  const [usuario] = useState("Nome do Gerente");

  // const [modal, setModal] = useState(0);
  // const [modalIsOpen, setModalIsOpen] = useState(false);


  function irParaConsultas() {   //Painel de lista de livros
    navigate("/procurarProduto")
  }
  
  function irParaCadastrarUsuario() {   // Configuração de criar novos atendentes
    navigate("/cadastrarUsuario")
  }
  
  function irParaCadastro() {   //Cadastro = De novos clientes
    navigate("/cadastroCliente")
  }

  function irParaBuscarLivros() {
    navigate("/procurarProduto")
  }

  function irParaMultas() {
    navigate("/precificar")
  }

  function irParaCadastrarFunc() {
    navigate("/cadastrarUsuario")
  }


  return (
    <div className='menu-background-imagem'>
      <div className='menu-cabeçalho linha space-40'>
        <div className='menu-cabeçalho-esquerdo'>
        </div>
        <div className='menu-botoes linha alinha-centro espaco-entre'>
          <div className='menu-botao-painel margem-direita  alinha-centro negrito' onClick={() => irParaConsultas()}>
            <p>PAINEL</p>
          </div>
          <div className='menu-botao-painel margem-direita alinha-centro negrito' onClick={() => irParaCadastrarUsuario()}>
            <p>CONFIGURAÇÃO</p>
          </div>
          <div className='menu-botao-painel negrito alinha-centro' onClick={() => irParaCadastro()}>
            <p>CADASTRO</p>
          </div>
        </div>
        <div className='menu-cabeçalho-direito'>
        </div>
      </div>
      <div className='menu-bem-vindo negrito space-20'>
        <h1 className='space-10'>Bem vindo, &nbsp; </h1>
        <h1>{usuario}</h1>
      </div>
      <div className='menu-mais-acessados linha negrito'>
        <img src={imagem} alt=""></img>
        <h1>MAIS ACESSADOS</h1>
      </div>
      <div className='menu-botoes-principais espaco-entre alinha-centro'>
        {/* implementar um switch entre os modais, por enquanto, abre o mesmo;
            achar o erro de css que faz a página ficar desconfigurada e sem os tamanhos certos */}
        <div className='menu-botao-principal-1 alinha-centro menu-botao-principal menu-box-sahedow negrito space-20' onClick={() => irParaBuscarLivros()}>
          <p>BUSCAR LIVRO</p>
        </div>
        <div className='menu-botao-principal-2 alinha-centro menu-botao-principal menu-box-sahedow negrito space-20' onClick={() => irParaCadastrarFunc() }>
          <p>CADASTRAR FUNCIONÁRIO</p>
        </div>
        <div className='menu-botao-principal-3 alinha-centro menu-botao-principal menu-box-sahedow negrito' onClick={() => irParaMultas() }>
          <p>QUADRO DE MULTAS</p>
        </div>

      </div>
    </div>
  )
}

export default Menu;