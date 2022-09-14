import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import "./precificar.css";
import polygon from "../../img/Polygon.svg";

function Precificar() {
  const location = useLocation();

  useEffect(() => {
    let produtos = location.state.precificarProdutos;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="precificar-info-background-imagem principal">
      <div className="precificar-info-container1" >
        <div className="precificar-info-conteudo-cabeçalho">
          <div className="precificar-info-cabeçalho-esquerdo">
            <h1 className="negrito">PAINEL gerente</h1>
          </div>
    
            <div className="precificar-info-cabeçalho-direito linha link">
              <h1 className="negrito">RETORNAR</h1>
              <img className="precificar-info-seta" src={polygon} alt="" />
            </div>
        </div>
    
            <div className="precificar-info-container2">
              <div className="precificar-info-precificar-info">
                  <div className="precificar-info-botoes-form linha">
                    <div className="precificar-info-menu-superior-botao botao-form-cadastrar alinha-centro">
                      <p className="precificar-info-menu-superior-botao-texto negrito">LISTAR TUDO</p>
                    </div>
                    <div className="precificar-info-menu-superior-botao botao-form-cadastrar alinha-centro">
                      <p className="precificar-info-menu-superior-botao-texto negrito">BUSCAR CLIENTE</p>
                    </div>
                    <div className="precificar-info-menu-superior-botao botao-form-cadastrar alinha-centro">
                      <p className="precificar-info-menu-superior-botao-texto negrito">CADASTRAR CLIENTE</p>
                    </div>
                    <div className="precificar-info-menu-superior-botao botao-form-cadastrar alinha-centro">
                      <p className="precificar-info-menu-superior-botao-texto negrito">XXXXXXXXXX</p>
                    </div>
                  </div>
    
                  <div className="precificar-info-form-cadastro">
                  <div className="precificar-info-form-titulo">
                    <h1 className="negrito laranja">QUADRO DE MULTAS: informações</h1>
                  </div>
    
                  
                  <div className="precificar-info-formulario">
                    <h1 className="negrito">LOCAÇÃO #101</h1>
                      <div className="precificar-info-form-apenas linha">        
                          <div className="precificar-info-linha1 coluna">
                            <label className="label-form-cadastrar" >ALOCADO POR:</label>
                            <input className="input-form-cadastrar" type="text" />

                            <label className="label-form-cadastrar">ALUGADO POR:</label>
                            <input className="input-form-cadastrar" type="text" />

                            <p className="dependente cinza negrito link">dependente *?*</p>

                          </div> 
                          <div className="precificar-info-linha2 coluna">

                            <label className="label-form-cadastrar">ID PRODUTO:</label>
                            <input className="input-form-cadastrar" type="text" />
                            
                            <label className="label-form-cadastrar">DATA DE LOCAÇÃO:</label>
                            <input className="input-form-cadastrar" type="text" />
                          </div>   
                          <div className="precificar-info-linha2 coluna">
                            <label className="label-form-cadastrar">VALOR DA MULTA:</label>
                            <input className="input-form-cadastrar" type="text" />
                          </div>
                      </div>
                  </div>
                </div>
              </div>
    
              <div className="precificar-info-outros-painel">
                <div className="precificar-info-outros-titulos">
                  <h1>OUTROS</h1>
                </div>
                <div className="precificar-info-outros-botoes">
                  <div className="precificar-info-outros-botao botao-form-cadastrar link">
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
    
    
export default Precificar;
