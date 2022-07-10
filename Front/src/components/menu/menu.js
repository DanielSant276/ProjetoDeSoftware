import React from 'react'
import '../menu/menu.css'

function Menu() {
  return (
    <header className="menu-header menu-background-imagem alinha-centro">
      <section className="menu-section">
        <div className="menu-botoes">
          
          <ul className="menu-lista">
            <li className="menu-botao">
              <span className="menu-span">Menu 1</span>
            </li>
            <li className="menu-botao">
              <span className="menu-span">Menu 1</span>
            </li>
            <li className="menu-botao">
              <span className="menu-span">Menu 1</span>
            </li>
          </ul>
        </div>
      </section>
    </header>
  )
}

export default Menu;