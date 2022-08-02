import React from 'react'
import "./EditarProduto.css";
import polygon from '../../img/Polygon.svg'

function EditarProduto() {
  return(
    <div className="editar-produto-background-imagem principal">
        <div className="editar-produto-container1" >
            <div className="editar-produto-conteudo-cabeçalho">
                <div className="editar-produto-cabeçalho-esquerdo">
                <h1 className="negrito">PAINEL gerente</h1>
                </div>

                <div className="editar-produto-cabeçalho-direito linha link">
                <h1 className="negrito">RETORNAR</h1>
                <img className="editar-produto-seta" src={polygon} alt="" />
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
                        <input className="input-form-editar" type="text" />

                        <label className="label-form-editar">TÍTULO</label>
                        <input className="input-form-editar" type="text" />
                        
                        <label className="label-form-editar">GÊNERO</label>
                        <select id='genero-editar-produto'>
                            <option selected disabled value="">Selecione</option>
                            <option>Masculino</option>
                            <option>Feminino</option>
                            <option>Outros</option>
                        </select>

                        <label className="label-form-editar">EDIÇÃO</label>
                        <input className="input-form-editar" type="text" />

                        <label className="label-form-editar">QUANTIDADE DE PÁGINAS</label>
                        <input className="input-form-editar" type="number" />

                        <label className="label-form-editar">LANÇAMENTO</label>
                        <input className="input-form-editar" type="date" />
                        </div>

                        <div className="editar-produto-input-direito">
                        
                            <label className="label-form-editar">AUTOR</label>
                            <input className="input-form-editar" type="text" ></input>

                            <label className="label-form-editar">DESCRIÇÃO</label>
                            <textarea></textarea>

                        </div>
                    </div>

                    <div className="editar-produto-editar-botao link">
                        <p className="editar-produto-editar-botao-text negrito">editar</p>
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