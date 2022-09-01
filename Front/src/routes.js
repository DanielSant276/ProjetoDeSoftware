import { Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Menu from "./components/menu/menu";
import SenhaSegura from "./components/senhaSegura/senhaSegura";
import CadastrarProduto from "./components/cadastrarProduto/cadastrarProduto";
import MoldeTeste from "./components/molde/molde";
import Locacao from "./components/multas/multas";
import Precificar from "./components/multasInfo/multasInfo";
import MoldeCadastro from "./components/moldeCadastro/MoldeCadastro";
import CadastrarCliente from "./components/cadastroCliente/cadastroCliente";
import EditarProduto from "./components/editarProduto/EditarProduto";
import ProcurarProduto from "./components/procurarProduto/procurarProduto";
import CadastrarUsuario from "./components/cadastrarUsuario/cadastrarUsuario";
import AlterarSenha from "./components/alterarSenha/alterarSenha";


const link = "http://localhost:5000"

export default function Rotas() {
    return (
        <Routes>
            {/* path=/qualquerCoisa element{funcaoRenderizar} */}
            <Route path="/" exact element={<Login link={link} />} /> {/* feito a integração como back, verificar a sanitização de input */}
            <Route path="/menu" element={<Menu link={link} />} /> {/* Tem que verificar a parte de mais acessados e os links do topo */}
            <Route path="/senhaSegura" element={<SenhaSegura link={link} />} /> {/* ver ainda se vai entrar ou não */}
            <Route path="/cadastrarProduto" element={<CadastrarProduto link={link} />} /> {/* Tem que verificar a parte de mais acessados e os links do topo  */}
            {/* <Route path="/molde" element={<MoldeTeste link={link} />} /> */}
            <Route path="/locacao" element={<Locacao link={link} />} /> { /* Tela que mostra as locações de determinado cliente, trocar nome do arquivo e caminho */}
            {/* <Route path="/moldeCadastro" element={<MoldeCadastro link={link} />} /> */}
            <Route path="/cadastroCliente" element={<CadastrarCliente link={link} />} />
            <Route path="/alterarSenha" element={<AlterarSenha link={link}/>} /> {/*feito a integração como back, verificar a sanitização de input*/}
            <Route path="/cadastrarUsuario" element={<CadastrarUsuario link={link}/>} /> {/*feito a integração como back, verificar a sanitização de input*/}

            <Route path="/procurarProduto" element={<ProcurarProduto link={link}/>} /> { /*feito a integração como back, verificar a sanitização de input, essa tela ta meio esquisita, talvez tirar a parte de alocado/devolver e inserir a parte para deletar*/}
            <Route path="/editarProduto" element={<EditarProduto link={link} />} /> {/*ta faltando número de edições exemplares no formulario*/}
            <Route path="/precificar" element={<Precificar link={link} />} /> {/*Essa tela irá virar tela de precificar locacao*/}
            {/* Falta tela de mostrar clientes: seguir tela em html mandada por discord, e colocar nome do dependente */}
            {/* Falta tela de selecionar livros: Selecionar, Id, Autor, Disponíveis */}
        </Routes>
    )
}