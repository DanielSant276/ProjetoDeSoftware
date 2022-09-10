import React from 'react'
import "./precificarLocacao.css";
import polygon from "../../img/Polygon.svg";
import { useNavigate } from 'react-router-dom';

function PrecificarLocacao({}) {

  //const navigate = useNavigate();

  //function irParaMenu() {
    //navigate("/menu")
  //}

  // console.log(isOpen);

  return(
    <>
    {true && (
      <div className="precificar-locacao-background-imagem principal">
        <div className="precificar-locacao-container1" >
          <div className="precificar-locacao-conteudo-cabeçalho">
            <div className="precificar-locacao-cabeçalho-esquerdo">
              <h1 className="negrito">PAINEL gerente</h1>
            </div>

              <div className="precificar-locacao-cabeçalho-direito linha link">
                <div className="linha alinha-centro link" /*onClick={() => irParaMenu()}*/>
                  <h1 className="negrito">RETORNAR</h1>
                  <img className="precificar-locacao-seta" src={polygon} alt="" />
                </div>
              </div>
          </div>

          <div className="precificar-locacao-container2">
            <div className="precificar-locacao-precificar-locacao">
                <div className="precificar-locacao-botoes-form linha">
                  <div className="precificar-locacao-menu-superior-botao botao-form-cadastrar alinha-centro">
                    <p className="precificar-locacao-menu-superior-botao-texto negrito">LISTAR TUDO</p>
                  </div>
                  <div className="precificar-locacao-menu-superior-botao botao-form-cadastrar alinha-centro">
                    <p className="precificar-locacao-menu-superior-botao-texto negrito">BUSCAR CLIENTE</p>
                  </div>
                  <div className="precificar-locacao-menu-superior-botao botao-form-cadastrar alinha-centro">
                    <p className="precificar-locacao-menu-superior-botao-texto negrito">CADASTRAR CLIENTE</p>
                  </div>
                  <div className="precificar-locacao-menu-superior-botao botao-form-cadastrar alinha-centro">
                    <p className="precificar-locacao-menu-superior-botao-texto negrito">XXXXXXXXXX</p>
                  </div>
                </div>

                <div className="precificar-locacao-form-cadastro">
                <div className="precificar-locacao-form-titulo">
                  <h1 className="negrito laranja">PRECIFICAR LOCAÇÃO</h1>
                </div>

                
                <div className="precificar-locacao-formulario">
                  <div className="precificar-locacao-form-apenas">
                    <div className="precificar-locacao-botoes-form linha">
                      <div className="precificar-locacao-form alinha-centro">
                        <p className="precificar-locacao-form-botao-texto negrito">VALOR LOCAÇÃO</p>
                      </div>
                      <div className="precificar-locacao-form alinha-centro">
                        <p className="precificar-locacao-form-esquerdo-texto negrito">DATA LOCAÇÃO</p>
                      </div>
                      <div className="precificar-locacao-form alinha-centro">
                        <p className="precificar-locacao-form-botao-texto negrito">DATA DEVOLUÇÃO</p>
                      </div>
                      <div className="precificar-locacao-form-botao alinha-centro">
                        <p className="precificar-locacao-form-botao-texto negrito">ADICIONAR UMA SEMANA AO PRAZO</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="precificar-locacao-outros-painel">
              <div className="precificar-locacao-outros-titulos">
                <h1>OUTROS</h1>
              </div>
              <div className="precificar-locacao-outros-botoes">
                <div className="precificar-locacao-outros-botao botao-form-cadastrar link">
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
    )}
    </>
  );
}

export default PrecificarLocacao;