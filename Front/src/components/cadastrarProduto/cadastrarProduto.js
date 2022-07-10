import React from 'react'
import './cadastrarProduto.css';
import polygon from '../../img/Polygon.svg'

function CadastrarProduto() {
  return (
    <div className="principal">
      <div className='container1' >
        <div className='conteudoCabeçalho'>
          <div className='cabeçalhoEsquerdo'>
            <h1>PAINEL  gerente</h1>
          </div>
          <div className='cabeçalhoDireito'>
            <h1>RETORNAR</h1>
            <img src={polygon} alt=""></img>
          </div>

        </div>
        <div className='container2'>
          <div className='cadastrarProduto'>
            <div className='botoesForm'>
              <div className='botaoListar botaoFormCadastrar'>
                <p>LISTAR TUDO</p>
              </div>
              <div className='botaoProcurar botaoFormCadastrar'>
                <p>PROCURAR PRODUTO</p>
              </div>
              <div className='botaoEditar botaoFormCadastrar'>
                <p>EDITAR PRODUTO</p>
              </div>
              <div className='botaoCadastrar botaoFormCadastrar'>
                <p>CADASTRAR PRODUTOS</p>
              </div>
            </div>
            <div className='formCadastro'>
              <div className='formTitulo'>
                <h1>CADASTRAR PRODUTO</h1>
              </div>
              <div className='formulario'>
                <div className='inputEsquerdo'>
                  <label className='labelFormCadastrar' >TÍTULO</label>
                  <input className='inputFormCadastrar' type="text" ></input>

                  <label className='labelFormCadastrar'>GÊNERO</label>
                  <input className='inputFormCadastrar' type="text" ></input>

                  <label className='labelFormCadastrar'>EDIÇÃO</label>
                  <input className='inputFormCadastrar' type="text" ></input>

                  <label className='labelFormCadastrar'>NÚMERO DE EXEMPLARES</label>
                  <input className='inputFormCadastrar' type="text" ></input>

                </div>
                <div className='inputDireito'>

                  <label className='labelFormCadastrar'>QUANTIDADE DE PÁGINAS</label>
                  <input className='inputFormCadastrar' type="text" ></input>

                  <label className='labelFormCadastrar'>AUTOR</label>
                  <input className='inputFormCadastrar' type="text" ></input>

                  <label className='labelFormCadastrar'>DESCRIÇÃO</label>
                  <input className='inputFormCadastrar' type="text" ></input>

                  <label className='labelFormCadastrar'>LANÇAMENTO</label>
                  <input className='inputFormCadastrar' type="text" ></input>

                </div>
              </div>
            </div>
          </div>
          <div className='outrosPainel'>
            <div className='outrosTitulo'>
              <h1>OUTROS</h1>
            </div>
            <div className='outrosBotoes'>
              <div>
                <p>CLIENTES</p>
              </div>
              <div>
                <p>CADASTRAR</p>
              </div>
              <div>
                <p>BUSCAR CLIENTES</p>
              </div>
              <div>
                <p>LOCAÇÃO</p>
              </div>
              <div>
                <p>DEVOLUÇÃO</p>
              </div>
              <div>
                <p>MULTAS</p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CadastrarProduto;