import React from 'react'
import '../menu/menu.css'
import imagem from '../../img/Polygon.svg'

function Menu() {
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
        <div className='menu-botao-principal-1 alinha-centro menu-botao-principal menu-box-sahedow negrito'>
          <p>BUSCAR LIVRO</p>
        </div>
        <div className='menu-botao-principal-2 alinha-centro menu-botao-principal menu-box-sahedow negrito'>
          <p>CADASTRAR FUNCIONÁRIO</p>
        </div>
        <div className='menu-botao-principal-3 alinha-centro menu-botao-principal menu-box-sahedow negrito'>
          <p>QUADRO DE MULTAS</p>
        </div>

      </div>

    </div>
  )
}

export default Menu;