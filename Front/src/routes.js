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
      <Route path="/" exact element={<Login link={link} />} /> {/* Ajustado */}
      <Route path="/menu" element={<Menu link={link} />} /> {/* Ajustado */}
      <Route path="/cadastroCliente" element={<CadastrarCliente link={link} />} /> {/* Ajustado */}
      <Route path="/mostrarClientes" element={<MostrarClientes link={link} />} /> { /* Ajustado */}
      <Route path="/locacao" element={<Locacao link={link} />} /> { /* Ajustado */}
      <Route path="/selecionarLivros" element={<SelecionarLivro link={link} />} /> {/* Ajustado */}
      <Route path="/precificarLocacao" element={<PrecificarLocacao link={link} />} /> { /* Ajustado, falta ver a parte que a ana mandou*/}
      <Route path="/procurarProduto" element={<ProcurarProduto link={link} />} /> { /* Ajustado */}
      <Route path="/editarProduto" element={<EditarProduto link={link} />} /> {/* Ajustado */}
      <Route path="/cadastrarProduto" element={<CadastrarProduto link={link} />} /> {/* Ajustado */}
      <Route path="/alterarSenha" element={<AlterarSenha link={link} />} /> {/* Ajustado */}
      <Route path="/cadastrarUsuario" element={<CadastrarUsuario link={link} />} /> {/* Ajustado */}
      

      {/* <Route path="/precificar" element={<Precificar link={link} />} /> Essa tela irá virar tela de precificar locacao */}
    </Routes>
  )
}