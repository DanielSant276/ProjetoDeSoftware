import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import "./precificarLocacao.css";
import polygon from "../../img/Polygon.svg";
import { useNavigate } from 'react-router-dom';
import { precificar, dataDefinicao, adicionarMaisUmaSemana, resetarEntrega, enviarParaBack } from '../../controller/precificar';

function PrecificarLocacao({ link }) {
  const location = useLocation();
  const navigate = useNavigate();

  function irParaMenu() {
    navigate("/menu")
  }

  const [produtos, setProdutos] = useState(['1']);

  useEffect(() => {
    let produtoID = location.state.precificarProdutos;

    if (produtoID != undefined) {
      setProdutos(produtoID);
      precificar(produtos, setPreco, setPrecoOriginal);
      dataDefinicao(produtos, setDataAtual, setDataDevolucao, setDataDevolucaoOriginal);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [produtos]);

  const [preco, setPreco] = useState(0);
  const [precoOriginal, setPrecoOriginal] = useState(0);
  const [dataAtual, setDataAtual] = useState("15/09/2022");
  const [dataDevolucao, setDataDevolucao] = useState("15/09/2022");
  const [dataDevolucaoOriginal, setDataDevolucaoOriginal] = useState("15/09/2022");

  function irParaListaClientes() {
    navigate("/mostrarClientes");
  }

  function irParaCadastroClientes() {
    navigate("/cadastroCliente");
  }

  return (
    <>
      {true && (
        <div className="precificar-locacao-background-imagem principal">
          <div className="precificar-locacao-container1" >
            <div className="precificar-locacao-conteudo-cabeçalho">
              <div className="precificar-locacao-cabeçalho-esquerdo">
                <h1 className="negrito">PAINEL gerente</h1>
              </div>

              <div className="precificar-locacao-cabeçalho-direito linha link">
                <div className="linha alinha-centro link" onClick={() => irParaMenu()}>
                  <h1 className="negrito">RETORNAR</h1>
                  <img className="precificar-locacao-seta" src={polygon} alt="" />
                </div>
              </div>
            </div>

            <div className="precificar-locacao-container2">
              <div className="precificar-locacao-precificar-locacao">
                <div className="precificar-locacao-botoes-form linha">
                  <div className="precificar-locacao-menu-superior-botao botao-form-cadastrar alinha-centro link" onClick={() => { irParaListaClientes() }}>
                    <p className="precificar-locacao-menu-superior-botao-texto negrito">LISTAR CLIENTES</p>
                  </div>
                  <div className="precificar-locacao-menu-superior-botao botao-form-cadastrar alinha-centro link" onClick={() => { irParaCadastroClientes() }}>
                    <p className="precificar-locacao-menu-superior-botao-texto negrito">CADASTRAR CLIENTE</p>
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
                          <p className="precificar-locacao-form-botao-texto negrito space-20">VALOR LOCAÇÃO</p>
                          <p className="precificar-locacao-form-botao-texto negrito">R$ {preco}</p>
                        </div>
                        <div className="precificar-locacao-form alinha-centro">
                          <p className="precificar-locacao-form-esquerdo-texto negrito space-20">DATA LOCAÇÃO</p>
                          <p className="precificar-locacao-form-botao-texto negrito">{dataAtual}</p>
                        </div>
                        <div className="precificar-locacao-form alinha-centro">
                          <p className="precificar-locacao-form-botao-texto negrito space-20">DATA DEVOLUÇÃO</p>
                          <p className="precificar-locacao-form-botao-texto negrito">{dataDevolucao}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="precificar-locacao-formulario2">
                    <div className="precificar-locacao-form-apenas2">
                      <div className="precificar-locacao-botoes-form2">
                        <div className="precificar-locacao-container3 linha">
                          <div className="precificar-locacao-form-botao alinha-centro link" onClick={() => adicionarMaisUmaSemana(dataDevolucao, setDataDevolucao, preco, setPreco)}>
                            <p className="precificar-locacao-form-botao-texto preto">+1  SEMANA AO PRAZO</p>
                          </div>
                          <div className="precificar-locacao-form-botao alinha-centro link"  onClick={() => resetarEntrega(setDataDevolucao, dataDevolucaoOriginal, setPreco, precoOriginal)}>
                            <p className="precificar-locacao-form-botao-texto preto">RESETAR</p>
                          </div>
                          <div className="precificar-locacao-form-botao alinha-centro link" onClick={() => { enviarParaBack(dataAtual, dataDevolucao, produtos, preco, link, irParaListaClientes) }}>
                            <p className="precificar-locacao-form-botao-texto preto">FINALZAR A LOCAÇÃO</p>
                          </div>
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
                <div className="precificar-locacao-outros-botoes" onClick={() => { alert("ainda por implementar") }}>
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