import React from 'react'
import "./locacao.css";
import polygon from "../../img/Polygon.svg";
import { useNavigate } from 'react-router-dom';

function Locacao({}) {
  const navigate = useNavigate();

  function irParaMenu() {
    navigate("/menu")
  }

  // console.log(isOpen);

  return(
    <>
    {true && (
      <div className="locacao-background-imagem principal">
        <div className="locacao-container1" >
          <div className="locacao-conteudo-cabeçalho">
            <div className="locacao-cabeçalho-esquerdo">
              <h1 className="negrito">PAINEL gerente</h1>
            </div>

              <div className="locacao-cabeçalho-direito linha link">
                <div className="linha alinha-centro link" onClick={() => irParaMenu()}>
                  <h1 className="negrito">RETORNAR</h1>
                  <img className="locacao-seta" src={polygon} alt="" />
                </div>
              </div>
          </div>

          <div className="locacao-container2">
            <div className="locacao-locacao">
                <div className="locacao-botoes-form linha">
                  <div className="locacao-menu-superior-botao botao-form-cadastrar alinha-centro">
                    <p className="locacao-menu-superior-botao-texto negrito">LISTAR TUDO</p>
                  </div>
                  <div className="locacao-menu-superior-botao botao-form-cadastrar alinha-centro">
                    <p className="locacao-menu-superior-botao-texto negrito">BUSCAR CLIENTE</p>
                  </div>
                  <div className="locacao-menu-superior-botao botao-form-cadastrar alinha-centro">
                    <p className="locacao-menu-superior-botao-texto negrito">CADASTRAR CLIENTE</p>
                  </div>
                  <div className="locacao-menu-superior-botao botao-form-cadastrar alinha-centro">
                    <p className="locacao-menu-superior-botao-texto negrito">XXXXXXXXXX</p>
                  </div>
                </div>

                <div className="locacao-form-cadastro">
                <div className="locacao-form-titulo">
                  <h1 className="negrito laranja">QUADRO DE MULTAS</h1>
                </div>

                
                <div className="locacao-formulario">
                  <div className="locacao-form-apenas">
                    <div className="locacao-botoes-form linha">
                      <div className="locacao-form alinha-centro">
                        <p className="locacao-form-botao-texto negrito">LOCAÇÃO</p>
                      </div>
                      <div className="locacao-form alinha-centro">
                        <p className="locacao-form-esquerdo-texto"><i>alocado por</i></p>
                      </div>
                      <div className="locacao-form-botao alinha-centro">
                        <p className="locacao-form-botao-texto negrito">INFORMAÇÕES</p>
                      </div>
                      <div className="locacao-form-botao alinha-centro">
                        <p className="locacao-form-botao-texto negrito">ALTERAR STATUS</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="locacao-outros-painel">
              <div className="locacao-outros-titulos">
                <h1>OUTROS</h1>
              </div>
              <div className="locacao-outros-botoes">
                <div className="locacao-outros-botao botao-form-cadastrar link">
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

export default Locacao;