import { Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Menu from "./components/menu/menu";
import SenhaSegura from "./components/senhaSegura/senhaSegura";
import CadastrarProduto from "./components/cadastrarProduto/cadastrarProduto";
import LoginAna from "./components/loginAna";

export default function Rotas() {
    return (
        <Routes>
        {/* path=/qualquerCoisa element{funcaoRenderizar} */}
            <Route path="/" exact element={<Login/>} />
            <Route path="/menu" element={<Menu/>} />
            <Route path="/senhaSegura" element={<SenhaSegura/>} />
            <Route path="/cadastrarProduto" element={<CadastrarProduto/>} />
            <Route path="/loginAna" element={<LoginAna/>} />
        </Routes>
    )
}