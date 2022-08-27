import React from 'react'
import "../alterarSenha/alterarSenha.css";


function AlterarSenha ({link}) {
    return(
    <>
    <div className="principal alterar-senha-background-imagem">
        <p className="alterar-senha space-5 negrito">Alterar senha</p>
        <div className="alterar-senha-formulario espaco-entre alinha-centro">
                <div className="alterar-senha-campo">
                    <p className="alterar-senha-label alterar-senha-texto1 jso negrito space-10">Login</p>
                    <input className="alterar-senha-input background-cor-padrao space-20"/>
                </div>
                <div className="alterar-senha-campo">
                    <p className="alterar-senha-label alterar-senha-texto2 jso negrito space-10">NOVA SENHA</p>
                    <input className="alterar-senha-input background-cor-padrao space-20" type="password" />
                </div>

            <div className="alterar-senha-campo">
                <p className="alterar-senha-label alterar-senha-texto3 space-20 jso negrito space-10">CONFIRMAR NOVA SENHA</p>
                <input className="alterar-senha-input background-cor-padrao space-20" type="password" />
            </div>
            <div className="alterar-senha-auxiliar coluna">
                <button className="alterar-senha-submit link jso negrito alinha-centro">ALTERAR SENHA</button>
        </div>

    </div>
        
        <div className="alterar-senha-rodape">
            <h1> UFRRJ SOFTWARES  - 2022 </h1>
        </div>
        </div>
    </>
    );
}

export default AlterarSenha;