import React from 'react'
import "./procurarProduto.css";
import polygon from '../../img/Polygon.svg'
import lupa from '../../img/lupa.svg'

function ProcurarProduto() {
  return(
    <div className="procurar-produto-background-imagem principal">
    <div className="procurar-produto-container1" >
      <div className="procurar-produto-conteudo-cabeçalho">
        <div className="procurar-produto-cabeçalho-esquerdo">
          <h1 className="negrito">PAINEL gerente</h1>
        </div>

        <div className="procurar-produto-cabeçalho-direito linha link">
          <h1 className="negrito">RETORNAR</h1>
          <img className="procurar-produto-seta" src={polygon} alt="" />
        </div>
      </div>

      <div className="procurar-produto-container2">
        <div className="procurar-produto-procurar-produto">
          <div className="procurar-produto-botoes-form linha">
            <div className="procurar-produto-menu-superior-botao botao-form-cadastrar alinha-centro">
              <p className="procurar-produto-menu-superior-botao-texto negrito">LISTAR TUDO</p>
            </div>
            <div className="procurar-produto-menu-superior-botao botao-form-cadastrar alinha-centro linha">
              {/* arrumar o input com a imagem no css e aqui no html */}
              <input className="procurar-produto-input negrito texto-centro" placeholder="PROCURAR PRODUTO"></input>
              <img className="procurar-produto-lupa" src={lupa} alt ="" />
            </div>
            <div className="procurar-produto-menu-superior-botao botao-form-cadastrar alinha-centro">
              <p className="procurar-produto-menu-superior-botao-texto negrito">EDITAR PRODUTO</p>
            </div>
            <div className="procurar-produto-menu-superior-botao botao-form-cadastrar alinha-centro">
              <p className="procurar-produto-menu-superior-botao-texto negrito">CADASTRAR PRODUTOS</p>
            </div>
          </div>

{/* barra de busca, mostra o resultado da pesquisa */}
          <div className="procurar-produto-form-cadastro">
            <div className="procurar-produto-form-titulo linha space-10">
              <h1 className="negrito"> você buscou por: &nbsp;</h1>
              <h1 className="roxo negrito"> "Harry Potter e a Pedra Filosofal"</h1>
            </div>

            {/* conteúdo da div: ID, título, status */}
            <div className="linha">
              <div className="procurar-produto-id linha negrito alinha-centro coluna">
                <h2 className="space-20">ID</h2>
                  <p className="negrito">131</p>
              </div>
              <div className="procurar-produto-titulo linha negrito alinha-centro coluna">
                <h2 className="space-20">TÍTULO</h2>
                  <p className="roxo negrito">Harry Potter e a Pedra Filosofal</p>
              </div>
              <div className="procurar-produto-status linha negrito alinha-centro coluna">
                <h2 className="space-20">STATUS</h2>
                  <p className="negrito">ALOCADO</p>
              </div>

                {/* front dos botões de editar e devolver, precisa formatar direito o botão e retirar o espaço no final
                dos botões */}

              <div className="procurar-produto-botao linha negrito alinha-centro coluna">
                <h2 className>&nbsp;</h2>
                  <div className="linha texto-centro">
                    <div className="procurar-produto-botao-formatacao procurar-produto-separar-editar link">EDITAR</div>
                    <div className="procurar-produto-botao-formatacao procurar-produto-separar-status link">DEVOLVER</div>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div className="procurar-produto-outros-painel">
          <div className="procurar-produto-outros-titulo">
            <h1>OUTROS</h1>
          </div>
          <div className="procurar-produto-outros-botoes">
            <div className="procurar-produto-outros-botao botao-form-cadastrar link">
              <p>CLIENTES</p>
            </div>
            <div className="link">
              <p>CADASTRAR</p>
            </div>
            <div className="link">
              <p>BUSCAR CLIENTES</p>
            </div>
            <div className="link">
              <p>LOCAÇÃO</p>
            </div>
            <div className="link">
              <p>DEVOLUÇÃO</p>
            </div>
            <div className="space-40 link">
              <p>MULTAS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ProcurarProduto;