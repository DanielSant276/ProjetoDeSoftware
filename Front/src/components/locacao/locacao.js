import React from 'react'
import "./locacao.css";
import polygon from "../../img/Polygon.svg";
import lupa from "../../img/lupa.svg";
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
                  <div className="locacao-menu-superior-botao botao-form-cadastrar alinha-centro linha">
                    <input className="locacao-input negrito texto-centro" placeholder="BUSCAR CLIENTES"></input>
                    <img className="procurar-produto-lupa" src={lupa} alt="" />
                  </div>
                  <div className="locacao-menu-superior-botao botao-form-cadastrar alinha-centro">
                    <p className="locacao-menu-superior-botao-texto negrito">CADASTRAR CLIENTE</p>
                  </div>
                  
                </div>

                <div className="locacao-form-cadastro">
                <div className="locacao-form-titulo">
                  <h1 className="negrito roxo">LOCAÇÃO</h1>
                </div>

                
                <div className="locacao-formulario">
                  <div className="locacao-form-apenas">
                    <div className="locacao-botoes-form linha">
                      <div className="locacao-form alinha-centro">
                        <p className="locacao-form-botao-texto negrito">ID LOCAÇÃO</p>
                      </div>
                      <div className="locacao-form alinha-centro">
                        <p className="locacao-form-esquerdo-texto negrito">TÍTULO</p>
                      </div>
                      <div className="locacao-form alinha-centro">
                        <p className="locacao-form-botao-texto negrito">STATUS</p>
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