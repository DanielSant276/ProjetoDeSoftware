import "./cadastroCliente.css";
import polygon from '../../img/Polygon.svg'
import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import { mask as masker, unMask } from "remask";


const Input = styled.input`
height: 10%;
width: 88%;
border-radius: 25px;
margin-left: 10px;
border: solid 1px #000000;
background-color: #D9D9D9;
`;


const InputMask = ({ mask, onChange, value, ...props }) => {
    const handleChange = ev => {
      const originalValue = unMask(ev.target.value);
      // const maskedValue = masker(originalValue, mask);
      onChange(originalValue);
    };
  
    const handleValue = masker(value, mask);
  
    return <Input {...props} onChange={handleChange} value={handleValue} />;
  };

const InputNome = () => {
    const [nome, setNome] = useState("");

    const sanitizarNome = (event) => {
      const resultado = event.target.value.replace(
        /[`~!@#$%^&*()_|+\-=?;:'".<>\{\}\[\]\\\/]/gi,
        ""
      );
  
      setNome(resultado);
    };
}




function CadastrarCliente() {
    const [cpf, setCpf] = useState("");
    const [telefone, setTelefone] = useState("");
    const [dependentes, setDependentes] = useState("");
  return(
    <div className="cadastrar-cliente-background-imagem principal">
        <div className="cadastrar-cliente-container1" >
        <div className="cadastrar-cliente-conteudo-cabeçalho">
            <div className="cadastrar-cliente-cabeçalho-esquerdo">
            <h1 className="negrito">PAINEL gerente</h1>
            </div>

            <div className="cadastrar-cliente-cabeçalho-direito linha link">
            <h1 className="negrito">RETORNAR</h1>
            <img className="cadastrar-cliente-seta" src={polygon} alt="" />
            </div>
        </div>

        <div className="cadastrar-cliente-container2">
            <div className="cadastrar-cliente-cadastrar-cliente">
            <div className="cadastrar-cliente-botoes-form linha">
                <div className="cadastrar-cliente-menu-superior-botao botao-form-cadastrar alinha-centro">
                <p className="cadastrar-cliente-menu-superior-botao-texto negrito">LISTAR TUDO</p>
                </div>
                <div className="cadastrar-cliente-menu-superior-botao botao-form-cadastrar alinha-centro">
                <p className="cadastrar-cliente-menu-superior-botao-texto negrito">PROCURAR cliente</p>
                </div>
                <div className="cadastrar-cliente-menu-superior-botao botao-form-cadastrar alinha-centro">
                <p className="cadastrar-cliente-menu-superior-botao-texto negrito">EDITAR cliente</p>
                </div>
                <div className="cadastrar-cliente-menu-superior-botao botao-form-cadastrar alinha-centro">
                <p className="cadastrar-cliente-menu-superior-botao-texto negrito">CADASTRAR clienteS</p>
                </div>
            </div>

            <div className="cadastrar-cliente-form-cadastro">
                <div className="cadastrar-cliente-form-titulo">
                <h1 className="negrito roxo">CADASTRAR cliente</h1>
                </div>
                <div className="cadastrar-cliente-formulario">
                <div className="cadastrar-cliente-form-apenas linha">
                    <div className="cadastrar-cliente-input-esquerdo">
                    <label className="label-form-cadastrar" >NOME</label>

                    {/* leticia mexendo aqui
                     */}
                    <input className="input-form-cadastrar" id="nome" name="nome" type="text" onChangeText={ (nome => {sanitizarNome(nome)} ) } />

                    <label className="label-form-cadastrar">CPF</label>
                    <InputMask className="input-form-cadastrar" name="cpf" type="text" onChange={setCpf} value={cpf} mask={["999.999.999-99"]}></InputMask>

                    <label className="label-form-cadastrar">ENDEREÇO</label>
                    <input className="input-form-cadastrar" type="text" />

                    <label className="label-form-cadastrar">TELEFONE</label>
                    <InputMask className="input-form-cadastrar" name="telefone" type="text" onChange={setTelefone} value={telefone} mask={["(99) 9 9999 9999"]}></InputMask>
                    </div>

                    <div className="cadastrar-cliente-input-direito">
                    <label className="label-form-cadastrar">DEPENDENTES</label>
                    <InputMask className="input-form-cadastrar" name="dependentes" type="text" onChange={setDependentes} value={dependentes} mask={["999"]}></InputMask>

                    </div>
                </div>

                <div className="cadastrar-cliente-cadastrar-botao link">
                    <p className="cadastrar-cliente-cadastrar-botao-text negrito">CONFIRMAR</p>
                </div>
                </div>
            </div>
            </div>

            <div className="cadastrar-cliente-outros-painel">
            <div className="cadastrar-cliente-outros-titulo">
                <h1>OUTROS</h1>
            </div>
            <div className="cadastrar-cliente-outros-botoes">
                <div className="cadastrar-cliente-outros-botao botao-form-cadastrar link">
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

export default CadastrarCliente;