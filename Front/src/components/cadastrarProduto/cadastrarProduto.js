import React, { useEffect, useState } from "react";
import "./cadastrarProduto.css";
import polygon from "../../img/Polygon.svg";
import { receberGeneros, criarLivro } from "../../controller/cadastrarProduto"

function CadastrarProduto({ link }) {
  useEffect(() => {
    receberGeneros(setGenerosOpcoes, link);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [tipo] = useState("Gerente");

  const [titulo, setTitulo] = useState();
  const [genero, setGenero] = useState(0);
  const [generosOpcoes, setGenerosOpcoes] = useState([""]);
  const [edicao, setEdicao] = useState();
  const [numExemplares, setNumExemplares] = useState();
  const [autor, setAutor] = useState();
  const [qtdPaginas, setQtdPaginas] = useState();
  const [lancamento, setLancamento] = useState();
  const [descricao, setDescricao] = useState();

  const onChangeTitulo = event => setTitulo(event.target.value);
  const onChangeGenero = event => setGenero(event.target.value);
  const onChangeEdicao = event => setEdicao(event.target.value);
  const onChangeNumExemplares = event => setNumExemplares(event.target.value);
  const onChangeAutor = event => setAutor(event.target.value);
  const onChangeQtdPaginas = event => setQtdPaginas(event.target.value);
  const onChangeLancamento = event => setLancamento(event.target.value);
  const onChangeDescricao = event => setDescricao(event.target.value);

  let produto = {
    titulo: titulo,
    autor: autor,
    genero: parseInt(genero) + 1,
    descricao: descricao,
    lancamento: lancamento,
    edicao: edicao,
    paginas: qtdPaginas,
    numExemplares: numExemplares
  }

  // gerar a lógica dos inputs
  function verificarInputs () {
    criarLivro(produto, link)
  }

  return (
    <div className="cadastrar-produto-background-imagem principal">
      <div className="cadastrar-produto-container1" >
        <div className="cadastrar-produto-conteudo-cabeçalho">
          <div className="cadastrar-produto-cabeçalho-esquerdo">
            <h1 className="negrito">PAINEL {tipo.toUpperCase()}</h1>
          </div>

          <div className="cadastrar-produto-cabeçalho-direito linha link">
            <h1 className="negrito">RETORNAR</h1>
            <img className="cadastrar-produto-seta" src={polygon} alt="" />
          </div>
        </div>

        <div className="cadastrar-produto-container2">
          <div className="cadastrar-produto-cadastrar-produto">
            <div className="cadastrar-produto-botoes-form linha">
              <div className="cadastrar-produto-menu-superior-botao botao-form-cadastrar alinha-centro">
                <p className="cadastrar-produto-menu-superior-botao-texto negrito">LISTAR TUDO</p>
              </div>
              <div className="cadastrar-produto-menu-superior-botao botao-form-cadastrar alinha-centro">
                <p className="cadastrar-produto-menu-superior-botao-texto negrito">PROCURAR PRODUTO</p>
              </div>
              <div className="cadastrar-produto-menu-superior-botao botao-form-cadastrar alinha-centro">
                <p className="cadastrar-produto-menu-superior-botao-texto negrito">cadastrar PRODUTO</p>
              </div>
              <div className="cadastrar-produto-menu-superior-botao botao-form-cadastrar alinha-centro">
                <p className="cadastrar-produto-menu-superior-botao-texto negrito">cadastrar PRODUTOS</p>
              </div>
            </div>

            <div className="cadastrar-produto-form-cadastro">
              <div className="cadastrar-produto-form-titulo">
                <h1 className="negrito roxo">CADASTRAR PRODUTO</h1>
              </div>

              <div className="cadastrar-produto-formulario">
                <div className="cadastrar-produto-form-apenas linha">
                  <div className="cadastrar-produto-input-esquerdo">
                    <label className="label-form-cadastrar">TÍTULO</label>
                    <input className="input-form-cadastrar" type="text" value={titulo} onChange={onChangeTitulo} />

                    <label className="label-form-cadastrar">GÊNERO</label>
                    <select id='genero-cadastrar-produto' className='input-form-cadastrar' value={genero} onChange={onChangeGenero} >
                      <option disabled value={""}>Selecione</option>
                      {generosOpcoes.map((nome, valor) =>
                        <option value={valor}>{nome}</option>
                      )}
                    </select>

                    <label className="label-form-cadastrar">EDIÇÃO</label>
                    <input className="input-form-cadastrar" type="text" value={edicao} onChange={onChangeEdicao} />

                    <label className="label-form-cadastrar">NÚMERO DE EXEMPLARES</label>
                    <input className="input-form-cadastrar" type="text" value={numExemplares} onChange={onChangeNumExemplares} />
                  </div>

                  <div className="cadastrar-produto-input-direito">
                    <label className="label-form-cadastrar">AUTOR</label>
                    <input className="input-form-cadastrar" type="text" value={autor} onChange={onChangeAutor} />

                    <label className="label-form-cadastrar">QUANTIDADE DE PÁGINAS</label>
                    <input className="input-form-cadastrar" type="number" value={qtdPaginas} onChange={onChangeQtdPaginas} />

                    <label className="label-form-cadastrar">ANO DE LANÇAMENTO</label>
                    <input className="input-form-cadastrar" type="text" value={lancamento} onChange={onChangeLancamento} />

                    <label className="label-form-cadastrar">DESCRIÇÃO</label>
                    <textarea className='text-area-cadastrar' value={descricao} onChange={onChangeDescricao} />
                  </div>
                </div>

                <div className="cadastrar-produto-cadastrar-botao link" onClick={() => verificarInputs()} >
                  <p className="cadastrar-produto-cadastrar-botao-text negrito">CADASTRAR</p>
                </div>
              </div>
            </div>
          </div>

          <div className="cadastrar-produto-outros-painel">
            <div className="cadastrar-produto-outros-titulo">
              <h1>OUTROS</h1>
            </div>
            <div className="cadastrar-produto-outros-botoes">
              <div className="cadastrar-produto-outros-botao botao-form-cadastrar link">
                <p>CLIENTES</p>
              </div>
              <div className="link">
                <p>cadastrar</p>
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

export default CadastrarProduto;