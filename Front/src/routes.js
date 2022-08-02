import { Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Menu from "./components/menu/menu";
import SenhaSegura from "./components/senhaSegura/senhaSegura";
import CadastrarProduto from "./components/cadastrarProduto/cadastrarProduto";
import LoginAna from "./components/loginAna";
import MoldeTeste from "./components/molde/molde";
import Multas from "./components/multas/multas";
import MultasInfo from "./components/multasInfo/multasInfo";
import MoldeCadastro from "./components/moldeCadastro/MoldeCadastro";
import CadastrarCliente from "./components/cadastroCliente/cadastroCliente";
import EditarProduto from "./components/editarProduto/EditarProduto";

export default function Rotas() {
    return (
        <Routes>
            {/* path=/qualquerCoisa element{funcaoRenderizar} */}
            <Route path="/" exact element={<Login />} /> {/* Reconfigurado */}
            <Route path="/menu" element={<Menu />} /> {/* Tem que arrumar, talvez trocar a imagem do cabeçalho */}
            <Route path="/senhaSegura" element={<SenhaSegura />} /> {/* Reconfigurado */}
            <Route path="/cadastrarProduto" element={<CadastrarProduto />} /> {/*  */}
            <Route path="/loginAna" element={<LoginAna />} /> {/*  */}
            <Route path="/molde" element={<MoldeTeste />} />
            <Route path="/multas" element={<Multas />} />
            <Route path="/multasInfo" element={<MultasInfo />} />
            <Route path="/moldeCadastro" element={<MoldeCadastro />} />
            <Route path="/cadastroCliente" element={<CadastrarCliente/>} />
            <Route path="/editarProduto" element={<EditarProduto/>} />
        </Routes>
    )
}
