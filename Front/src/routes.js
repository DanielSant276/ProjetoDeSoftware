import { Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Menu from "./components/menu/menu"

export default function Rotas() {
    return (
        <Routes>
        {/* path=/qualquerCoisa element{funcaoRenderizar} */}
            <Route path="/" exact element={<Login/>} />
            <Route path="/menu" element={<Menu/>} />
        </Routes>

    )
}