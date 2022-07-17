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
          <div className='menu-botao-painel margem-direita  alinha-centro'>
            <p>PAINEL</p>
          </div>
          <div className='menu-botao-painel margem-direita  alinha-centro'>
            <p>CONFIGURAÇÃO</p>
          </div>
          <div className='menu-botao-painel  alinha-centro'>
            <p>CADASTRO</p>
          </div>
        </div>
        <div className='menu-cabeçalho-direito'>
        </div>
      </div>
      <div className='menu-bem-vindo '>
        <h1>Bem Vindo,</h1>
        <h1>__GERENTE__.</h1>
      </div>
      <div className='menu-mais-acessados linha'>
        <img src={imagem} alt=""></img>
        <h1>MAIS ACESSADOS</h1>
      </div>
      <div className='menu-botoes-principais espaco-entre'>
        <div className='menu-botao-principal-1 alinha-centro menu-botao-principal menu-box-sahedow'>
          <p>BUSCAR LIVRO</p>
        </div>
        <div className='menu-botao-principal-2 alinha-centro menu-botao-principal menu-box-sahedow'>
          <p>CADASTRAR FUNCIONÁRIO</p>
        </div>
        <div className='menu-botao-principal-3 alinha-centro menu-botao-principal menu-box-sahedow'>
          <p>QUADRO DE MULTAS</p>
        </div>

      </div>

    </div>
  )
}

export default Menu;