import React from "react";
import "./multasInfo.css";
import polygon from "../../img/Polygon.svg";

function MultasInfo() {
  return (
    <div className="multas-info-background-imagem principal">
      <div className="multas-info-container1" >
        <div className="multas-info-conteudo-cabeçalho">
          <div className="multas-info-cabeçalho-esquerdo">
            <h1 className="negrito">PAINEL gerente</h1>
          </div>
    
            <div className="multas-info-cabeçalho-direito linha link">
              <h1 className="negrito">RETORNAR</h1>
              <img className="multas-info-seta" src={polygon} alt="" />
            </div>
        </div>
    
            <div className="multas-info-container2">
              <div className="multas-info-multas-info">
                  <div className="multas-info-botoes-form linha">
                    <div className="multas-info-menu-superior-botao botao-form-cadastrar alinha-centro">
                      <p className="multas-info-menu-superior-botao-texto negrito">LISTAR TUDO</p>
                    </div>
                    <div className="multas-info-menu-superior-botao botao-form-cadastrar alinha-centro">
                      <p className="multas-info-menu-superior-botao-texto negrito">BUSCAR CLIENTE</p>
                    </div>
                    <div className="multas-info-menu-superior-botao botao-form-cadastrar alinha-centro">
                      <p className="multas-info-menu-superior-botao-texto negrito">CADASTRAR CLIENTE</p>
                    </div>
                    <div className="multas-info-menu-superior-botao botao-form-cadastrar alinha-centro">
                      <p className="multas-info-menu-superior-botao-texto negrito">XXXXXXXXXX</p>
                    </div>
                  </div>
    
                  <div className="multas-info-form-cadastro">
                  <div className="multas-info-form-titulo">
                    <h1 className="negrito laranja">QUADRO DE MULTAS: informações</h1>
                  </div>
    
                  
                  <div className="multas-info-formulario">
                    <h1 className="negrito">LOCAÇÃO #101</h1>
                      <div className="multas-info-form-apenas linha">        
                          <div className="multas-info-linha1 coluna">
                            <label className="label-form-cadastrar" >ALOCADO POR:</label>
                            <input className="input-form-cadastrar" type="text" />

                            <label className="label-form-cadastrar">ALUGADO POR:</label>
                            <input className="input-form-cadastrar" type="text" />

                            <p className="dependente cinza negrito link">dependente *?*</p>

                          </div> 
                          <div className="multas-info-linha2 coluna">

                            <label className="label-form-cadastrar">ID PRODUTO:</label>
                            <input className="input-form-cadastrar" type="text" />
                            
                            <label className="label-form-cadastrar">DATA DE LOCAÇÃO:</label>
                            <input className="input-form-cadastrar" type="text" />
                          </div>   
                          <div className="multas-info-linha2 coluna">
                            <label className="label-form-cadastrar">VALOR DA MULTA:</label>
                            <input className="input-form-cadastrar" type="text" />
                          </div>
                      </div>
                  </div>
                </div>
              </div>
    
              <div className="multas-info-outros-painel">
                <div className="multas-info-outros-titulos">
                  <h1>OUTROS</h1>
                </div>
                <div className="multas-info-outros-botoes">
                  <div className="multas-info-outros-botao botao-form-cadastrar link">
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
