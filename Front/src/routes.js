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
            <Route path="/" exact element={<Login link={link} />} /> {/* feito a integração como back, verificar a sanitização de input */}
            <Route path="/menu" element={<Menu link={link} />} /> {/* Tem que verificar a parte de mais acessados e os links do topo */}
            <Route path="/senhaSegura" element={<SenhaSegura link={link} />} /> {/* ver ainda se vai entrar ou não */}
            <Route path="/cadastrarProduto" element={<CadastrarProduto link={link} />} /> {/* Tem que verificar a parte de mais acessados e os links do topo  */}
            <Route path="/molde" element={<MoldeTeste link={link} />} />
            <Route path="/multas" element={<Multas link={link} />} />
            <Route path="/multasInfo" element={<MultasInfo link={link} />} />
            <Route path="/moldeCadastro" element={<MoldeCadastro link={link} />} />
            <Route path="/cadastroCliente" element={<CadastrarCliente link={link} />} />
            <Route path="/editarProduto" element={<EditarProduto link={link} />} />
            <Route path="/alterarSenha" element={<AlterarSenha link={link}/>} /> {/*tem que criar o update do login*/}
            <Route path="/procurarProduto" element={<ProcurarProduto link={link}/>} /> { /*feito a integração como back, verificar a sanitização de input, essa tela ta meio esquisita, talvez tirar a parte de alocado/devolver e inserir a parte para deletar*/}
            <Route path="/cadastrarUsuario" element={<CadastrarUsuario link={link}/>} /> {/*feito a integração como back, verificar a sanitização de input*/}
        </Routes>
    )
}