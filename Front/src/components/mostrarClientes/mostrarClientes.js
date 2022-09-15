import React, { useEffect, useState } from 'react'
import "./mostrarClientes.css";
import polygon from "../../img/Polygon.svg";
import lupa from "../../img/lupa.svg";
import { useNavigate } from 'react-router-dom';
import { receberClientes } from '../../controller/receberClientes';

function MostrarClientes({ link }) {

  const navigate = useNavigate();

  function irParaMenu() {
    navigate("/menu")
  }

  useEffect(() => {
    receberClientes(setClientes, link)
  }, []);

  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    console.log(clientes);
  }, [clientes]);

  return (
    <>
      {true && (
        <div className="mostrar-clientes-background-imagem principal">
          <div className="mostrar-clientes-container1" >
            <div className="mostrar-clientes-conteudo-cabeçalho">
              <div className="mostrar-clientes-cabeçalho-esquerdo">
                <h1 className="negrito">PAINEL gerente</h1>
              </div>

              <div className="mostrar-clientes-cabeçalho-direito linha link">
                <div className="linha alinha-centro link" onClick={() => irParaMenu()}>
                  <h1 className="negrito">RETORNAR</h1>
                  <img className="mostrar-clientes-seta" src={polygon} alt="" />
                </div>
              </div>
            </div>

            <div className="mostrar-clientes-container2">
              <div className="mostrar-clientes-mostrar-clientes">
                <div className="mostrar-clientes-botoes-form linha">
                  <div className="mostrar-clientes-menu-superior-botao botao-form-cadastrar alinha-centro">
                    <p className="mostrar-clientes-menu-superior-botao-texto negrito">LISTAR TUDO</p>
                  </div>
                  {/* input e a lupa */}
                  <div className="mostrar-clientes-menu-superior-botao botao-form-cadastrar alinha-centro linha">
                    <input className="mostrar-clientes-input negrito texto-centro" placeholder="BUSCAR CLIENTES"></input>
                    <img className="procurar-produto-lupa" src={lupa} alt="" />
                  </div>
                  <div className="mostrar-clientes-menu-superior-botao botao-form-cadastrar alinha-centro">
                    <p className="mostrar-clientes-menu-superior-botao-texto negrito">CADASTRAR CLIENTE</p>
                  </div>
                  <div className="mostrar-clientes-menu-superior-botao botao-form-cadastrar alinha-centro">
                    <p className="mostrar-clientes-menu-superior-botao-texto negrito">XXXXXXXXXX</p>
                  </div>
                </div>

                <div className="mostrar-clientes-form-cadastro">
                  <div className="mostrar-clientes-form-titulo">
                    <h1 className="negrito laranja">MOSTRAR CLIENTES</h1>
                  </div>

                  <div className="mostrar-clientes-formulario">
                    <div className="mostrar-clientes-form-apenas">
                      <div className="mostrar-clientes-botoes-form linha">
                        <div className="mostrar-clientes-form alinha-centro">
                          <p className="mostrar-clientes-form-botao-texto negrito">ID</p>
                        </div>
                        <div className="mostrar-clientes-form alinha-centro">
                          <p className="mostrar-clientes-form-esquerdo-texto negrito">TÍTULO</p>
                        </div>
                      </div>
                      {/* {clientes.map((nome) =>
                        <div key={nome.idCliente} className="linha">
                          <p>{nome.clienteNome}</p>
                          <p>{nome.clienteCPF}</p>
                          <div className="mostrar-clientes-form-botao alinha-centro link">
                            <p className="mostrar-clientes-form-botao-texto negrito preto">REALIZAR LOCACAO</p>
                          </div>
                          <div className="mostrar-clientes-form-botao alinha-centro link">
                            <p className="mostrar-clientes-form-botao-texto negrito preto">VERIFICAR LOCAÇÃO</p>
                          </div>
                        </div>
                      )} */}
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

export default MostrarClientes;