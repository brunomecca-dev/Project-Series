import React from 'react';

function NavBar({ setPaginaAtual }) {
  return (
    <nav>
      <ul>
        <li><a href="#inicial" onClick={() => setPaginaAtual('inicial')}>Página Inicial</a></li>
        <li><a href="#sobre" onClick={() => setPaginaAtual('sobre')}>Sobre</a></li>
        <li><a href="#cadastrar" onClick={() => setPaginaAtual('cadastrar')}>Cadastrar Séries</a></li>
        <li><a href="#lista" onClick={() => setPaginaAtual('lista')}>Lista de Séries</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;