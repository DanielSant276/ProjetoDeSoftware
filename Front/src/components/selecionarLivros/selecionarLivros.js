import React, { useEffect, useState } from 'react';
import "./selecionarLivros.css";
import polygon from '../../img/Polygon.svg'
import lupa from '../../img/lupa.svg';
import { useNavigate } from 'react-router-dom';
import { receberLivros } from "../../controller/receberLivros.js";

function SelecionarLivro({ link }) {
  const navigate = useNavigate();

  function irParaMenu() {
    navigate("/menu")
  }

  useEffect(() => {
    receberLivros(setLivros, link)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [livros, setLivros] = useState([]);
  const [selecionado, setSelecionado] = useState([]);
  const [busca, setBusca] = useState("");

  const onChangeBusca = event => setBusca(event.target.value);

  useEffect(() => {
    console.log(livros);
  }, [livros])

  const handleChangeCheckBox = event => {
    let selecao = selecionado;
    if (event.target.checked) {
      selecao.push(event.target.value);
      setSelecionado(selecao);
    }
    else {
      const index = selecao.indexOf(event.target.value);
      selecao.splice(index, 1)
      setSelecionado(selecao);
    }
  };

  function enviarParaPrecificar() {
    navigate("/precificarLocacao", { state: { precificarProdutos: selecionado } })
  }

  function irParaListaClientes() {
    navigate("/mostrarClientes");
  }

  function irParaCadastroClientes() {
    navigate("/cadastroCliente");
  }

<<<<<<< Updated upstream
        <div className="cadastrar-produto-container2">
          <div className="cadastrar-produto-cadastrar-produto">
            <div className="cadastrar-produto-botoes-form linha">
              <div className="cadastrar-produto-menu-superior-botao botao-form-cadastrar alinha-centro">
                <p className="cadastrar-produto-menu-superior-botao-texto negrito">LISTAR TUDO</p>
              </div>
              <div className="cadastrar-produto-menu-superior-botao botao-form-cadastrar alinha-centro linha">
                <input className="selecionar-livros-busca negrito" placeholder="PROCURAR PRODUTO"></input>
                <img className="procurar-produto-lupa" src={lupa} alt="" />
              </div>
              <div className="cadastrar-produto-menu-superior-botao botao-form-cadastrar alinha-centro">
                <p className="cadastrar-produto-menu-superior-botao-texto negrito">EDITAR PRODUTO</p>
              </div>
              <div className="cadastrar-produto-menu-superior-botao botao-form-cadastrar alinha-centro">
                <p className="cadastrar-produto-menu-superior-botao-texto negrito">CADASTRAR PRODUTOS</p>
              </div>
=======
  return (
    <>
      <div className="cadastrar-produto-background-imagem principal">
        <div className="cadastrar-produto-container1" >
          <div className="cadastrar-produto-conteudo-cabeçalho">
            <div className="cadastrar-produto-cabeçalho-esquerdo">
              <h1 className="negrito">PAINEL gerente</h1>
>>>>>>> Stashed changes
            </div>

            <div className="cadastrar-produto-cabeçalho-direito linha link">
              <h1 className="negrito">RETORNAR</h1>
              <img className="cadastrar-produto-seta" src={polygon} alt="" onClick={() => irParaMenu()} />
            </div>
          </div>

          <div className="cadastrar-produto-container2">
            <div className="cadastrar-produto-cadastrar-produto">
              <div className="cadastrar-produto-botoes-form linha">
                <div className="cadastrar-produto-menu-superior-botao botao-form-cadastrar alinha-centro link" onClick={() => { irParaListaClientes() }}>
                  <p className="cadastrar-produto-menu-superior-botao-texto negrito">LISTAR CLIENTES</p>
                </div>
                <div className="cadastrar-produto-menu-superior-botao botao-form-cadastrar alinha-centro" value={busca} onChange={onChangeBusca}>
                  <p className="cadastrar-produto-menu-superior-botao-texto negrito">PROCURAR PRODUTO</p>
                </div>
                <div className="cadastrar-produto-menu-superior-botao botao-form-cadastrar alinha-centro link" onClick={() => { irParaCadastroClientes() }}>
                  <p className="cadastrar-produto-menu-superior-botao-texto negrito">CADASTRAR CLIENTE</p>
                </div>
              </div>

              <div className="selecionar-livros-form-cadastro">
                {(busca !== "") &&
                  <div className="selecionar-livros-form-titulo linha">
                    <h1 className="negrito">Você buscou por: &nbsp;</h1>
                    <h1 className="roxo negrito">"{busca}"</h1>
                  </div>
                }
                <div className="selecionar-livros-label linha negrito space-20">
                  <label className="selecionar-livros-checkbox"></label>
                  <label className="selecionar-livros-id">ID</label>
                  <label className="selecionar-livros-titulo alinha-centro">TÍTULO</label>
                  <label className="selecionar-livros-autor">AUTOR</label>
                  <label className="selecionar-livros-genero">GÊNERO</label>
                  <label className="selecionar-livros-disponivel">DISPONÍVEL</label>
                </div>

                <div className="selecionar-livros-input"> {/* div para permitir o scroll*/}
                  {livros.map((item) =>
                    (item[0].tituloProduto.toUpperCase().startsWith(busca.toUpperCase()) || item[1][0][0].nome.toUpperCase().startsWith(busca.toUpperCase()) || busca === "") &&
                    <div className="linha space-10" key={item[0].idProduto}> {/* div de entrada de dados */}
                      <input className="selecionar-livros-checkbox" type="checkbox" value={item[0].idProduto} onChange={handleChangeCheckBox} />
                      <p className="selecionar-livros-id">{item[0].idProduto}</p>
                      <p className="selecionar-livros-titulo">{item[0].tituloProduto}</p>
                      <p className="selecionar-livros-autor">{item[0].autor}</p>
                      <p className="selecionar-livros-genero">{item[1][0][0].nome}</p>
                      <p className="selecionar-livros-disponivel">{item[0].numExemplares - item[0].qtdLocados}</p>
                    </div>
                  )}
                </div>

                <div className="selecionar-livros-cadastrar-botao link"> {/* botao de selecionar no final */}
                  <p className="selecionar-livros-cadastrar-botao-text negrito" onClick={() => enviarParaPrecificar()}>SELECIONAR</p>
                </div>
              </div>
            </div>

            <div className="cadastrar-produto-outros-painel">
              <div className="cadastrar-produto-outros-titulo">
                <h1>OUTROS</h1>
              </div>
              <div className="cadastrar-produto-outros-botoes" onClick={() => { alert("ainda por implementar") }}>
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
    </>
  )
}

export default SelecionarLivro;