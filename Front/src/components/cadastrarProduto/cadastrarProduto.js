import React from "react";
import "./cadastrarProduto.css";
import polygon from "../../img/Polygon.svg";

function CadastrarProduto() {
  return (
    <div className="cadastrar-produto-background-imagem principal">
      <div className="cadastrar-produto-container1" >
        <div className="cadastrar-produto-conteudo-cabeçalho">
          <div className="cadastrar-produto-cabeçalho-esquerdo">
            <h1 className="negrito">PAINEL gerente</h1>
          </div>

          <div className="cadastrar-produto-cabeçalho-direito linha link">
            <h1 className="negrito">RETORNAR</h1>
            <img className="cadastrar-produto-seta" src={polygon} alt="" />
          </div>
        </div>

        <div className="cadastrar-produto-container2">
          <div className="cadastrar-produto-cadastrar-produto">
            <div className="cadastrar-produto-botoes-form linha">
              <div className="cadastrar-produto-menu-superior-botao botao-form-cadastrar alinha-centro">
                <p className="cadastrar-produto-menu-superior-botao-texto negrito">LISTAR TUDO</p>
              </div>
              <div className="cadastrar-produto-menu-superior-botao botao-form-cadastrar alinha-centro">
                <p className="cadastrar-produto-menu-superior-botao-texto negrito">PROCURAR PRODUTO</p>
              </div>
              <div className="cadastrar-produto-menu-superior-botao botao-form-cadastrar alinha-centro">
                <p className="cadastrar-produto-menu-superior-botao-texto negrito">EDITAR PRODUTO</p>
              </div>
              <div className="cadastrar-produto-menu-superior-botao botao-form-cadastrar alinha-centro">
                <p className="cadastrar-produto-menu-superior-botao-texto negrito">CADASTRAR PRODUTOS</p>
              </div>
            </div>

            <div className="cadastrar-produto-form-cadastro">
              <div className="cadastrar-produto-form-titulo">
                <h1 className="negrito roxo">CADASTRAR PRODUTO</h1>
              </div>

              <div className="cadastrar-produto-formulario">
                <div className="cadastrar-produto-form-apenas linha">
                  <div className="cadastrar-produto-input-esquerdo">
                    <label className="label-form-cadastrar" >TÍTULO</label>
                    <input className="input-form-cadastrar" type="text" />

                    <label className="label-form-cadastrar">GÊNERO</label>
                    <input className="input-form-cadastrar" type="text" />

                    <label className="label-form-cadastrar">EDIÇÃO</label>
                    <input className="input-form-cadastrar" type="text" />

                    <label className="label-form-cadastrar">NÚMERO DE EXEMPLARES</label>
                    <input className="input-form-cadastrar" type="text" />
                  </div>

                  <div className="cadastrar-produto-input-direito">
                    <label className="label-form-cadastrar">QUANTIDADE DE PÁGINAS</label>
                    <input className="input-form-cadastrar" type="text" ></input>

                    <label className="label-form-cadastrar">AUTOR</label>
                    <input className="input-form-cadastrar" type="text" ></input>

                    <label className="label-form-cadastrar">DESCRIÇÃO</label>
                    <input className="input-form-cadastrar" type="text" ></input>

                    <label className="label-form-cadastrar">LANÇAMENTO</label>
                    <input className="input-form-cadastrar" type="text" ></input>

                  </div>
                </div>

                <div className="cadastrar-produto-cadastrar-botao link">
                  <p className="cadastrar-produto-cadastrar-botao-text negrito">CADASTRAR</p>
                </div>
              </div>
            </div>
          </div>

          <div className="cadastrar-produto-outros-painel">
            <div className="cadastrar-produto-outros-titulo">
              <h1>OUTROS</h1>
            </div>
            <div className="cadastrar-produto-outros-botoes">
              <div className="cadastrar-produto-outros-botao botao-form-cadastrar link">
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

export default CadastrarProduto;