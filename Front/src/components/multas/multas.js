import React from 'react'
import "./multas.css";
import polygon from "../../img/Polygon.svg";

function Multas() {
  return(
    <div className="multas-background-imagem principal">
      <div className="multas-container1" >
        <div className="multas-conteudo-cabeçalho">
          <div className="multas-cabeçalho-esquerdo">
            <h1 className="negrito">PAINEL gerente</h1>
          </div>

            <div className="multas-cabeçalho-direito linha link">
              <h1 className="negrito">RETORNAR</h1>
              <img className="multas-seta" src={polygon} alt="" />
            </div>
        </div>

        <div className="multas-container2">
          <div className="multas-multas">
              <div className="multas-botoes-form linha">
                <div className="multas-menu-superior-botao botao-form-cadastrar alinha-centro">
                  <p className="multas-menu-superior-botao-texto negrito">LISTAR TUDO</p>
                </div>
                <div className="multas-menu-superior-botao botao-form-cadastrar alinha-centro">
                  <p className="multas-menu-superior-botao-texto negrito">BUSCAR CLIENTE</p>
                </div>
                <div className="multas-menu-superior-botao botao-form-cadastrar alinha-centro">
                  <p className="multas-menu-superior-botao-texto negrito">CADASTRAR CLIENTE</p>
                </div>
                <div className="multas-menu-superior-botao botao-form-cadastrar alinha-centro">
                  <p className="multas-menu-superior-botao-texto negrito">XXXXXXXXXX</p>
                </div>
              </div>

              <div className="multas-form-cadastro">
              <div className="multas-form-titulo">
                <h1 className="negrito laranja">QUADRO DE MULTAS</h1>
              </div>

              <div className="multas-formulario">
                <div className="multas-form-apenas">
                  <div className="multas-input-esquerdo">
                    <label className="label-form-multas" >LOCAÇÃO</label>
                    <input className="input-form-multas" type="text" />

                    <label className="label-form-multas">ALOCADO POR</label>
                    <input className="input-form-multas" type="text" />

                    <label className="label-form-multas">INFORMAÇÕES</label>

                    <label className="label-form-multas">ALTERAR STATUS</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="multas-outros-painel">
            <div className="multas-outros-titulos">
              <h1>OUTROS</h1>
            </div>
            <div className="multas-outros-botoes">
              <div className="multas-outros-botao botao-form-cadastrar link">
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

export default Multas;