import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import "./EditarProduto.css";
import polygon from '../../img/Polygon.svg'
import { pegaInfo, editar } from "../../controller/editarProduto.js";
import { receberGeneros } from "../../controller/cadastrarProduto"
import { useNavigate } from 'react-router-dom';

function EditarProduto({ link }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    receberGeneros(setGeneroOpcoes, link);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    let produtoID = location.state;

    pegaInfo(link, produtoID, setInfo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [id, setId] = useState();
  const [titulo, setTitulo] = useState();
  const [autor, setAutor] = useState();
  const [genero, setGenero] = useState(0);
  const [descricao, setDescricao] = useState();
  const [lancamento, setLancamento] = useState();
  const [edicao, setEdicao] = useState();
  const [paginas, setPaginas] = useState();
  const [numExemplares, setNumExemplares] = useState();

  const [generosOpcoes, setGeneroOpcoes] = useState([]);

  const onChangeTitulo = event => setTitulo(event.target.value);
  const onChangeAutor = event => setAutor(event.target.value);
  const onChangeGenero = event => setGenero(event.target.value);
  const onChangeDescricao = event => setDescricao(event.target.value);
  const onChangeLancamento = event => setLancamento(event.target.value);
  const onChangeEdicao = event => setEdicao(event.target.value);
  const onChangePaginas = event => setPaginas(event.target.value);
  const onChangeNumExemplares = event => setNumExemplares(event.target.value);

  function setInfo(data) {
    console.log(data);
    setId(data.id);
    setTitulo(data.titulo);
    setAutor(data.autor);
    setGenero(data.generos - 1);
    setDescricao(data.descricao);
    setLancamento(data.lancamento);
    setEdicao(data.edicao);
    setPaginas(data.paginas);
    setNumExemplares(data.numExemplares);
  }

  function montaObj() {
    let dados = {
      id: id,
      titulo: titulo,
      autor: autor,
      generos: parseInt(genero) + 1,
      descricao: descricao,
      lancamento: lancamento,
      edicao: edicao,
      paginas: paginas,
      numExemplares: numExemplares
    }

    console.log(dados.generos);

    editar(dados, link)
  }
  
  function irParaMenu() {
    navigate("/menu")
  }

  return (
    <div className="editar-produto-background-imagem principal">
      <div className="editar-produto-container1" >
        <div className="editar-produto-conteudo-cabeçalho">
          <div className="editar-produto-cabeçalho-esquerdo">
            <h1 className="negrito">PAINEL gerente</h1>
          </div>

          <div className="editar-produto-cabeçalho-direito linha link">
            <h1 className="negrito">RETORNAR</h1>
            <img className="editar-produto-seta" src={polygon} alt="" onClick={() => irParaMenu()}/>
          </div>
        </div>

        <div className="editar-produto-container2">
          <div className="editar-produto-editar-produto">
            <div className="editar-produto-botoes-form linha">
              <div className="editar-produto-menu-superior-botao botao-form-cadastrar alinha-centro">
                <p className="editar-produto-menu-superior-botao-texto negrito">LISTAR TUDO</p>
              </div>
              <div className="editar-produto-menu-superior-botao botao-form-cadastrar alinha-centro">
                <p className="editar-produto-menu-superior-botao-texto negrito">PROCURAR PRODUTO</p>
              </div>
              <div className="editar-produto-menu-superior-botao botao-form-cadastrar alinha-centro">
                <p className="editar-produto-menu-superior-botao-texto negrito">EDITAR PRODUTO</p>
              </div>
              <div className="editar-produto-menu-superior-botao botao-form-cadastrar alinha-centro">
                <p className="editar-produto-menu-superior-botao-texto negrito">editar PRODUTOS</p>
              </div>
            </div>

            <div className="editar-produto-form-cadastro">
              <div className="editar-produto-form-titulo">
                <h1 className="negrito roxo">EDITAR PRODUTO</h1>
              </div>

              <div className="editar-produto-formulario">
                <div className="editar-produto-form-apenas linha">
                  <div className="editar-produto-input-esquerdo">
                    <label className="label-form-editar" >ID</label>
                    <input className="input-form-cadastrar" value={id} pattern="[0-9]+$" type="text" disabled />

                    <label className="label-form-editar">TÍTULO</label>
                    <input className="input-form-cadastrar" value={titulo} onChange={onChangeTitulo} pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$" type="text" />

                    <label className="label-form-editar">GÊNERO</label>
                    <select id='genero-editar-produto' className='input-form-cadastrar' value={genero} onChange={onChangeGenero}>
                      <option disabled value={""}>Selecione</option>
                      {generosOpcoes.map((nome, valor) =>
                        <option value={valor}>{nome}</option>
                      )}
                    </select>
                    <div className="linha">
                      <label className="label-form-editar editar-produto-input-dividido" >EDIÇÃO</label>
                      <label className="label-form-editar editar-produto-input-dividido">QUANTIDADE DE PÁGINAS</label>
                    </div>

                    <div className="linha">
                      <input className="input-form-dividido" value={edicao} onChange={onChangeEdicao} type="text" />
                      <input className="input-form-dividido" value={paginas} onChange={onChangePaginas} type="number" />
                    </div>
                  </div>

                  <div className="editar-produto-input-direito">

                    <label className="label-form-editar">AUTOR</label>
                    <input className="input-form-cadastrar" value={autor} onChange={onChangeAutor} type="text" ></input>

                    <label className="label-form-editar">QUANTIDADE DE EXEMPLARES</label>
                    <input className="input-form-cadastrar" value={numExemplares} onChange={onChangeNumExemplares} type="number" />

                    {/* é apenas o ano */}
                    <label className="label-form-editar">LANÇAMENTO</label>
                    <input className="input-form-cadastrar" value={lancamento} onChange={onChangeLancamento} type="text" />

                    <label className="label-form-editar">DESCRIÇÃO</label>
                    <textarea className='text-area-editar' value={descricao} onChange={onChangeDescricao}></textarea>

                  </div>
                </div>

                <div className="editar-produto-editar-botao link">
                  <p className="editar-produto-editar-botao-text negrito" onClick={() => montaObj()}>CONFIRMAR</p>
                </div>
              </div>
            </div>
          </div>

          <div className="editar-produto-outros-painel">
            <div className="editar-produto-outros-titulo">
              <h1>OUTROS</h1>
            </div>
            <div className="editar-produto-outros-botoes">
              <div className="editar-produto-outros-botao botao-form-cadastrar link">
                <p>CLIENTES</p>
              </div>
              <div className="link">
                <p>editar</p>
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

export default EditarProduto;