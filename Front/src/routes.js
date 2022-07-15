import { Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Menu from "./components/menu/menu";
import SenhaSegura from "./components/senhaSegura/senhaSegura";
import CadastrarProduto from "./components/cadastrarProduto/cadastrarProduto";
import LoginAna from "./components/loginAna";
import MoldeTeste from "./components/molde/molde"

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
        </Routes>
    )
}