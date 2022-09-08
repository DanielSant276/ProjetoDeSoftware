import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./procurarProduto.css";
import polygon from "../../img/Polygon.svg";
import lupa from "../../img/lupa.svg";
import { deletarLivro, receberLivros } from "../../controller/procurarProduto";

function ProcurarProduto({ link }) {
  
  useEffect(() => {
    receberLivros(setLivros, link);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const [livros, setLivros] = useState([]);
  const [busca, setBusca] = useState("");
  
  const navigate = useNavigate();
  const onChangeBusca = event => setBusca(event.target.value);

  function paginaEditar(id) {
    navigate("/editarProduto", { state: id })
  }
  function irParaMenu(){
    navigate("/menu")
  }

  return (
    <div className="procurar-produto-background-imagem principal">
      <div className="procurar-produto-container1" >
        <div className="procurar-produto-conteudo-cabeçalho">
          <div className="procurar-produto-cabeçalho-esquerdo">
            <h1 className="negrito">PAINEL gerente</h1>
          </div>

          <div className="procurar-produto-cabeçalho-direito linha link">
            <h1 className="negrito">RETORNAR</h1>
            <img className="procurar-produto-seta" src={polygon} alt="" onClick={() => irParaMenu()} />
          </div>
        </div>

        <div className="procurar-produto-container2">
          <div className="procurar-produto-procurar-produto">
            <div className="procurar-produto-botoes-form linha">
              <div className="procurar-produto-menu-superior-botao botao-form-cadastrar alinha-centro">
                <p className="procurar-produto-menu-superior-botao-texto negrito">LISTAR TUDO</p>
              </div>
              <div className="procurar-produto-menu-superior-botao botao-form-cadastrar alinha-centro linha">
                {/* arrumar o input com a imagem no css e aqui no html */}
                <input className="procurar-produto-input negrito texto-centro" placeholder="PROCURAR PRODUTO" value={busca} onChange={onChangeBusca}></input>
                <img className="procurar-produto-lupa" src={lupa} alt="" />
              </div>
              <div className="procurar-produto-menu-superior-botao botao-form-cadastrar alinha-centro">
                <p className="procurar-produto-menu-superior-botao-texto negrito">EDITAR PRODUTO</p>
              </div>
              <div className="procurar-produto-menu-superior-botao botao-form-cadastrar alinha-centro">
                <p className="procurar-produto-menu-superior-botao-texto negrito">CADASTRAR PRODUTOS</p>
              </div>
            </div>

            {/* barra de busca, mostra o resultado da pesquisa */}
            <div className="procurar-produto-form-cadastro procurar-produto-rolagem">
              <div className="procurar-produto-form-titulo linha space-10">
                {(busca !== "") &&
                  <div className="linha">
                    <h1 className="negrito"> você buscou por: &nbsp;</h1>
                    <h1 className="roxo negrito">"{busca}"</h1>
                  </div>
                }
              </div>

              <div className="procurar-produto-label linha negrito space-20">
                <label className="procurar-produto-id">ID</label>
                <label className="procurar-produto-titulo roxo">TÍTULO</label>
                <label className="procurar-produto-botao"></label>
                <label className="procurar-produto-botao"></label>
              </div>

              <div className="procurar-produto-label linha negrito space-20">
                <label className="procurar-produto-id">1</label>
                <label className="procurar-produto-titulo roxo">testeteste</label>
                <input className="procurar-produto-botao procurar-produto-botao-formatacao" type="submit" value="EDITAR"/>
                <input className="procurar-produto-botao procurar-produto-botao-formatacao" type="submit" value="DELETAR"/>               
              </div>

              {/* conteúdo da div: ID, título, status */}
              
              {/* <div className="linha">
                <h2 className="space-20 espaco-teste-1">ID</h2>
                <h2 className="space-20 espaco-teste-2">TÍTULO</h2>
                <div className="espaco-teste3"></div>
                <div className="espaco-teste3"></div>
              </div> */}
{/* 
              {livros.map((item) =>
                (item.tituloProduto.toUpperCase().startsWith(busca.toUpperCase()) || busca === "") &&
                <div className="linha">
                  <div className="procurar-produto-id negrito alinha-centro coluna">
                    <p className="negrito">{item.idProduto}</p>
                  </div>
                  <div className="procurar-produto-titulo linha negrito alinha-centro coluna">
                    <p className="roxo negrito">{item.tituloProduto}</p>
                  </div> */}
                  {/* <div className="procurar-produto-status linha negrito alinha-centro coluna">
                      <h2 className="space-20">STATUS</h2>
                      <p className="negrito">ALOCADO</p>
                    </div> */}

                  {/* front dos botões de editar e devolver, precisa formatar direito o botão e retirar o espaço no final
                dos botões */}

                  {/* <div className="procurar-produto-botao linha negrito alinha-centro coluna">
                    <h2 className>&nbsp;</h2>
                    <div className="linha texto-centro">
                      <div className="procurar-produto-botao-formatacao procurar-produto-separar-editar link" onClick={() => paginaEditar(item.idProduto)}>EDITAR</div>
                      <div className="procurar-produto-botao-formatacao procurar-produto-separar-status link" onClick={() => deletarLivro(item.idProduto, link)}>DELETAR</div>
                    </div>
                  </div>
                </div>
              )} */}
            </div>
          </div>

          <div className="procurar-produto-outros-painel">
            <div className="procurar-produto-outros-titulo">
              <h1>OUTROS</h1>
            </div>
            <div className="procurar-produto-outros-botoes">
              <div className="procurar-produto-outros-botao botao-form-cadastrar link">
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

export default ProcurarProduto;