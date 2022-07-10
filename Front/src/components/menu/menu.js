import React from 'react'
import '../menu/menu.css'

function Menu() {
  return (
    <header id="header">
      <section className="header">
        <div className="header-botoes-menu">
          <ul className="header-lista">
            <li className="header-botao-menu">
              <span className="header-span">Menu 1</span>
            </li>
            <li className="header-botao-menu">
              <span className="header-span">Menu 1</span>
            </li>
            <li className="header-botao-menu">
              <span className="header-span">Menu 1</span>
            </li>
          </ul>
        </div>
      </section>
    </header>
  )
}

export default Menu;