import { Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Menu from "./components/menu/menu";
import SenhaSegura from "./components/senhaSegura/senhaSegura";
import CadastrarProduto from "./components/cadastrarProduto/cadastrarProduto";
import MoldeTeste from "./components/molde/molde";
import Multas from "./components/multas/multas";
import MultasInfo from "./components/multasInfo/multasInfo";
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
            <Route path="/" exact element={<Login link={link} />} /> {/* Reconfigurado */}
            <Route path="/menu" element={<Menu link={link} />} /> {/* Tem que arrumar, talvez trocar a imagem do cabeçalho */}
            <Route path="/senhaSegura" element={<SenhaSegura link={link} />} /> {/* Reconfigurado */}
            <Route path="/cadastrarProduto" element={<CadastrarProduto link={link} />} /> {/*  */}
            <Route path="/molde" element={<MoldeTeste link={link} />} />
            <Route path="/multas" element={<Multas link={link} />} />
            <Route path="/multasInfo" element={<MultasInfo link={link} />} />
            <Route path="/moldeCadastro" element={<MoldeCadastro link={link} />} />
            <Route path="/cadastroCliente" element={<CadastrarCliente link={link} />} />
            <Route path="/editarProduto" element={<EditarProduto link={link} />} />
            <Route path="/alterarSenha" element={<AlterarSenha link={link}/>} />            
            <Route path="/procurarProduto" element={<ProcurarProduto link={link}/>} />
            <Route path="/cadastrarUsuario" element={<CadastrarUsuario link={link}/>} />
        </Routes>
    )
}