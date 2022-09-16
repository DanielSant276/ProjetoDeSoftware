import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import "./locacao.css";
import polygon from "../../img/Polygon.svg";
import lupa from "../../img/lupa.svg";
import { useNavigate } from 'react-router-dom';
import { procuraLocacao, devolverLocacao } from '../../controller/procuraLocacao.js';

function Locacao({ link }) {
  const location = useLocation();
  const navigate = useNavigate();

  function irParaMenu() {
    navigate("/menu")
  }

  const [locacao, setLocacao] = useState([""]);
  const [loading, setLoading] = useState(false);
  const [busca, setBusca] = useState("");

  const onChangeBusca = event => setBusca(event.target.value);

  useEffect(() => {
    let usuarioID = location.state.clienteID;
    procuraLocacao(setLocacao, setLoading, usuarioID, link)
  }, [])

  useEffect(() => {
    console.log(locacao);
  }, [locacao])

  function irParaListaClientes() {
    navigate("/mostrarClientes");
  }

  function irParaCadastroClientes() {
    navigate("/cadastroCliente");
  }

  return (
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
                  <img className="locacao-seta" src={polygon} alt="" onClick={() => irParaMenu()}/>
                </div>
              </div>
            </div>

            <div className="locacao-container2">
              <div className="locacao-locacao">
                <div className="locacao-botoes-form linha">
                  <div className="locacao-menu-superior-botao botao-form-cadastrar alinha-centro link" onClick={() => { irParaListaClientes() }}>
                    <p className="locacao-menu-superior-botao-texto negrito">LISTAR CLIENTES</p>
                  </div>
                  <div className="locacao-menu-superior-botao botao-form-cadastrar alinha-centro linha">
                    <input className="locacao-input negrito texto-centro" placeholder="BUSCAR STATUS" value={busca} onChange={onChangeBusca}></input>
                    <img className="procurar-produto-lupa" src={lupa} alt="" />
                  </div>
                  <div className="locacao-menu-superior-botao botao-form-cadastrar alinha-centro link" onClick={() => { irParaCadastroClientes() }}>
                    <p className="locacao-menu-superior-botao-texto negrito">CADASTRAR CLIENTE</p>
                  </div>

                </div>

                <div className="locacao-form-cadastro">
                  <div className="locacao-form-titulo">
                    {(busca !== "") &&
                      <div className="linha">
                        <h1 className="negrito roxo"> você buscou por: &nbsp;</h1>
                        <h1 className="roxo negrito">"{busca}"</h1>
                      </div>
                    }

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
                        <div className="locacao-form alinha-centro">
                          <p className="locacao-form-botao-texto negrito">MULTA</p>
                        </div>
                      </div>

                      {loading && locacao.map((item) =>
                        (item.locacaoEstado.toUpperCase().startsWith(busca.toUpperCase()) || busca === "") &&
                        <div className="locacao-botoes-form linha">
                          <div className="locacao-form alinha-centro" onClick={() => console.log(item[0])}>
                            <p className="locacao-form-botao-texto negrito">{item.idLocacao}</p>
                          </div>
                          <div className="locacao-form alinha-centro">
                            {item.tituloProdutos.map((titulo) =>
                              <p className="locacao-form-esquerdo-texto negrito">{titulo}</p>
                            )}
                          </div>
                          <div className="locacao-form alinha-centro">
                            <p className="locacao-form-botao-texto negrito">{item.locacaoEstado}</p>
                          </div>
                          <div className="locacao-form alinha-centro">
                            <p className="locacao-form-botao-texto negrito">R$ {parseFloat(item.locacaoMulta).toFixed(2)}</p>
                          </div>
                          <div className="locacao-form alinha-centro link" onClick={() => devolverLocacao(item.idLocacao, link)}>
                            <p className="locacao-form-botao-texto negrito preto">Devolver</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="locacao-outros-painel">
                <div className="locacao-outros-titulos">
                  <h1>OUTROS</h1>
                </div>
                <div className="locacao-outros-botoes" onClick={() => { alert("ainda por implementar") }}>
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