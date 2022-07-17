import React from 'react'
import '../menu/menu.css'
import triangulo from '../../img/triangulo-menu.svg'

function Menu() {
  return (
    <header className="menu-header menu-background-imagem">
      <section className="menu-section alinha-centro space-20">
        <div className="menu-botoes linha alinha-centro ">
          <a className="menu-pai link">
            <div className="menu-botao-forma alinha-centro">
              <p className="menu-botao-texto negrito">Painel</p>
            </div>
          </a>
          <a className="menu-pai link">
            <div className="menu-botao-forma alinha-centro">
              <p className="menu-botao-texto negrito">Configuração</p>
            </div>
          </a>
          <a className="menu-pai link">
            <div className="menu-botao-forma alinha-centro">
              <p className="menu-botao-texto negrito">Cadastro</p>
            </div>
          </a>
        </div>
      </section>
      {/* texto de boas vindas */}
      <div className="space-20">
        <p className="menu-texto negrito space-10">Bem vindo,</p>
        <p className="menu-texto negrito">__GERENTE___.</p>
      </div>
      {/* texto de mais acessados e o shape */}
      <div className="menu-mais-acessados linha space-20">
        <img className="menu-triangulo" src={triangulo} alt="" />
        <p className="negrito">MAIS ACESSADOS</p>
      </div>
      {/* botões roxos no meio */}
      <a className="link">
        <div className="menu-funcionalidades menu-buscar-livro space-40">
          <p className="negrito texto-centro">BUSCAR LIVRO</p>
        </div>
      </a>
      <a className="link">
        <div className="menu-funcionalidades menu-cadastrar-funcionario space-40">
          <p className="negrito texto-centro">CADASTRAR FUNCIONÁRIO</p>
        </div>
      </a>
      <a className="link">
        <div className="menu-funcionalidades menu-quadro-multas">
          <p className="negrito texto-centro">QUADRO DE MULTAS</p>
        </div>
      </a>
    </header>
  )
}

export default Menu;