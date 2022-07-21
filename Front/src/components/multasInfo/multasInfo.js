import React from "react";
import "./multasInfo.css";
import polygon from "../../img/Polygon.svg";

function MultasInfo() {
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
                <p className="cadastrar-produto-menu-superior-botao-texto negrito">BUSCAR CLIENTE</p>
              </div>
              <div className="cadastrar-produto-menu-superior-botao botao-form-cadastrar alinha-centro">
                <p className="cadastrar-produto-menu-superior-botao-texto negrito">CADASTRAR CLIENTE</p>
              </div>
              <div className="cadastrar-produto-menu-superior-botao botao-form-cadastrar alinha-centro">
                <p className="cadastrar-produto-menu-superior-botao-texto negrito">XXXXXXXX</p>
              </div>
            </div>

            <div className="cadastrar-produto-form-cadastro">
              <div className="cadastrar-produto-form-titulo">
                <h1 className="negrito laranja">QUADRO DE MULTAS: informações</h1>
              </div>

              <div className="cadastrar-produto-formulario">
                <div className="cadastrar-produto-form-apenas linha">
                  <div className="cadastrar-produto-form-titulo2">
                    <h1 className="negrito">LOCAÇÃO #101</h1>
                  </div>
                  <div className="cadastrar-produto-input-linha1 linha">
                    
                    <label className="label-form-cadastrar" >ALOCADO POR:</label>
                    <input className="input-form-cadastrar" type="text" />

                    <label className="label-form-cadastrar">ID PRODUTO:</label>
                    <input className="input-form-cadastrar" type="text" />     

                    <label className="label-form-cadastrar">ALUGADO POR:</label>
                    <input className="input-form-cadastrar" type="text" />
                  </div>

                  <div className="cadastrar-produto-input-linha2 linha">
                    <label className="label-form-cadastrar">DATA DA LOCAÇÃO:</label>
                    <input className="input-form-cadastrar" type="text" />

                    <label className="label-form-cadastrar">VALOR DA MULTA:</label>
                    <input className="input-form-cadastrar" type="text" ></input>
                  </div>
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

export default MultasInfo;