import { Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Menu from "./components/menu/menu";
import CadastrarProduto from "./components/cadastrarProduto/cadastrarProduto";
import Locacao from "./components/locacao/locacao";
import CadastrarCliente from "./components/cadastroCliente/cadastroCliente";
import EditarProduto from "./components/editarProduto/EditarProduto";
import ProcurarProduto from "./components/procurarProduto/procurarProduto";
import CadastrarUsuario from "./components/cadastrarUsuario/cadastrarUsuario";
import AlterarSenha from "./components/alterarSenha/alterarSenha";
import SelecionarLivro from "./components/selecionarLivros/selecionarLivros";
import MostrarClientes from "./components/mostrarClientes/mostrarClientes";
import PrecificarLocacao from "./components/precificarLocacao/precificarLocacao";
// import Precificar from "./components/precificar/precificar";
// import SenhaSegura from "./components/senhaSegura/senhaSegura";
// import MoldeTeste from "./components/molde/molde";
// import MoldeCadastro from "./components/moldeCadastro/MoldeCadastro";


const link = "http://localhost:5000"

export default function Rotas() {
  return (
    <Routes>
      {/* path=/qualquerCoisa element{funcaoRenderizar} */}
      <Route path="/" exact element={<Login link={link} />} /> {/* verificar a sanitização de input */}
      <Route path="/menu" element={<Menu link={link} />} /> {/* Feito, pedir para o daniel conferir depois */}
      <Route path="/cadastrarProduto" element={<CadastrarProduto link={link} />} /> {/* verificar a sanitização de input  */}
      <Route path="/cadastroCliente" element={<CadastrarCliente link={link} />} /> {/* verificar a sanitização do nome do dependente */}
      <Route path="/alterarSenha" element={<AlterarSenha link={link} />} /> {/* verificar a sanitização de input */}
      <Route path="/cadastrarUsuario" element={<CadastrarUsuario link={link} />} /> {/* verificar a sanitização de input */}
      <Route path="/editarProduto" element={<EditarProduto link={link} />} /> {/* não permitir números negativos nos inputs exemplares e quantidade de páginas */}
      <Route path="/selecionarLivros" element={<SelecionarLivro link={link} />} /> {/* Feito, pedir para o daniel conferir depois */}
      <Route path="/procurarProduto" element={<ProcurarProduto link={link} />} /> { /* feito, verificar a sanitização de input */}
      <Route path="/mostrarClientes" element={<MostrarClientes link={link} />} /> { /**/}
      <Route path="/precificarLocacao" element={<PrecificarLocacao link={link} />} /> { /**/}

      <Route path="/locacao" element={<Locacao link={link} />} /> { /*  */}
      {/* <Route path="/precificar" element={<Precificar link={link} />} /> Essa tela irá virar tela de precificar locacao */}
    </Routes>
  )
}