import React, { useState } from 'react';
import '../menu/menu.css';
import imagem from '../../img/Polygon.svg';
import Modal from 'react-modal';
import Multas from '../multas/multas';

function Menu() {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  
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

  const afterOpenModal = () => {

  }
  
  const closeModal = () => {
    setModalIsOpen(false);
  }

  return (
    <div className='principal menu-background-imagem'>
      <div className='menu-cabeçalho linha'>
        <div className='menu-cabeçalho-esquerdo'>
        </div>
        <div className='menu-botoes linha alinha-centro'>
          <div className='menu-botao-painel margem-direita  alinha-centro negrito'>
            <p>PAINEL</p>
          </div>
          <div className='menu-botao-painel margem-direita alinha-centro negrito'>
            <p>CONFIGURAÇÃO</p>
          </div>
          <div className='menu-botao-painel negrito alinha-centro'>
            <p>CADASTRO</p>
          </div>
        </div>
        <div className='menu-cabeçalho-direito'>
        </div>
      </div>
      <div className='menu-bem-vindo negrito'>
        <h1 className='space-10'>Bem vindo,</h1>
        <h1>__GERENTE__.</h1>
      </div>
      <div className='menu-mais-acessados linha negrito space-10'>
        <img src={imagem} alt=""></img>
        <h1>MAIS ACESSADOS</h1>
      </div>
      <div className='menu-botoes-principais espaco-entre'>
        {/* implementar um switch entre os modais, por enquanto, abre o mesmo;
            achar o erro de css que faz a página ficar desconfigurada e sem os tamanhos certos */}
        <div className='menu-botao-principal-1 alinha-centro menu-botao-principal menu-box-sahedow negrito' onClick={openModal}>
          <p>BUSCAR LIVRO</p>
        </div>
        <div className='menu-botao-principal-2 alinha-centro menu-botao-principal menu-box-sahedow negrito' onClick={openModal}>
          <p>CADASTRAR FUNCIONÁRIO</p>
        </div>
        <div className='menu-botao-principal-3 alinha-centro menu-botao-principal menu-box-sahedow negrito' onClick={openModal}>
          <p>QUADRO DE MULTAS</p>
        </div>

      </div>
      <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={styleModal}
      handleClick = {closeModal}
    >
    <Multas
      isOpen = {modalIsOpen}
      handleClick = {closeModal}
      />
    </Modal>

    </div>
  )
}

export default Menu;