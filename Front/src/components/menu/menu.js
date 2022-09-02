import React, { useState } from 'react';
import '../menu/menu.css';
import imagem from '../../img/Polygon.svg';
import Modal from 'react-modal';
import Locacao from '../locacao/locacao';
import { useNavigate } from 'react-router-dom';

function Menu({ link }) {
  const navigate = useNavigate();

  const [usuario] = useState("Nome do Gerente");

  const [modal, setModal] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);


  function irParaConsultas() {
    navigate("/criarUsuario")
  }

  function trocarSenha() {
    navigate("/trocarSenha")
  }

  function irParaCadastro() {
    navigate("/criarUsuario")
  }

  const styleModal = {
    content: {
      width: '80%',
      margin: '0 auto',
      background: 'transparent',
      border: '0',
    },
    overlay: {
      background: 'rgba(0, 0, 0, 0.9)',
      padding: 0,
    },
  };

  const openModal = () => {
    setModalIsOpen(true);
  }

  // ver o pq isso está aberto
  const afterOpenModal = () => {

  }

  const closeModal = () => {
    setModal(0);
    setModalIsOpen(false);
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
          <div className='menu-botao-painel margem-direita alinha-centro negrito' onClick={() => trocarSenha()}>
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
        <div className='menu-botao-principal-1 alinha-centro menu-botao-principal menu-box-sahedow negrito space-20' onClick={() => { openModal(); setModal(1) }}>
          <p>BUSCAR LIVRO</p>
        </div>
        <div className='menu-botao-principal-2 alinha-centro menu-botao-principal menu-box-sahedow negrito space-20' onClick={() => { openModal(); setModal(2) }}>
          <p>CADASTRAR FUNCIONÁRIO</p>
        </div>
        <div className='menu-botao-principal-3 alinha-centro menu-botao-principal menu-box-sahedow negrito' onClick={() => { openModal(); setModal(3) }}>
          <p>QUADRO DE MULTAS</p>
        </div>

      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={styleModal}
        handleClick={closeModal}
      >
        {(modal === 1) ?
          <Locacao
            isOpen={modalIsOpen}
            handleClick={closeModal}
          /> :
          ((modal === 2) ?
            <Locacao
              isOpen={modalIsOpen}
              handleClick={closeModal}
            /> :
            <Locacao
              isOpen={modalIsOpen}
              handleClick={closeModal}
            />
          )
        }
      </Modal>
    </div>
  )
}

export default Menu;