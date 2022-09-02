import { Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Menu from "./components/menu/menu";
import CadastrarProduto from "./components/cadastrarProduto/cadastrarProduto";
import Locacao from "./components/locacao/locacao";
import Precificar from "./components/multasInfo/multasInfo";
import CadastrarCliente from "./components/cadastroCliente/cadastroCliente";
import EditarProduto from "./components/editarProduto/EditarProduto";
import ProcurarProduto from "./components/procurarProduto/procurarProduto";
import CadastrarUsuario from "./components/cadastrarUsuario/cadastrarUsuario";
import AlterarSenha from "./components/alterarSenha/alterarSenha";
// import SenhaSegura from "./components/senhaSegura/senhaSegura";
// import MoldeTeste from "./components/molde/molde";
// import MoldeCadastro from "./components/moldeCadastro/MoldeCadastro";


const link = "http://localhost:5000"

export default function Rotas() {
  return (
    <Routes>
      {/* path=/qualquerCoisa element{funcaoRenderizar} */}
      <Route path="/" exact element={<Login link={link} />} /> {/* verificar a sanitização de input */}
      <Route path="/menu" element={<Menu link={link} />} /> {/* Tem que verificar a parte de mais acessados e os links do topo */}
      <Route path="/cadastrarProduto" element={<CadastrarProduto link={link} />} /> {/* verificar a sanitização de input  */}
      <Route path="/cadastroCliente" element={<CadastrarCliente link={link} />} /> {/* verificar a sanitização do nome do dependente */}
      <Route path="/alterarSenha" element={<AlterarSenha link={link} />} /> {/* verificar a sanitização de input */}
      <Route path="/cadastrarUsuario" element={<CadastrarUsuario link={link} />} /> {/* verificar a sanitização de input */}
      <Route path="/editarProduto" element={<EditarProduto link={link} />} /> {/* não permitir números negativos nos inputs exemplares e quantidade de páginas */}

      <Route path="/procurarProduto" element={<ProcurarProduto link={link} />} /> { /* verificar a sanitização de input, essa tela ta meio esquisita */}
      {/* Falta tela de mostrar clientes: seguir tela em html mandada por discord, e colocar nome do dependente */}
      {/* Falta tela de selecionar livros: Selecionar, Id, Autor, Disponíveis */}
      <Route path="/locacao" element={<Locacao link={link} />} /> { /*  */}
      <Route path="/precificar" element={<Precificar link={link} />} /> {/* Essa tela irá virar tela de precificar locacao */}
    </Routes>
  )
}