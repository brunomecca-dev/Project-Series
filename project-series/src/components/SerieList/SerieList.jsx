import React from 'react';

function SerieList({ series, excluirSerie, editarSerie, setPaginaAtual }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Lista de séries</h2>
      
      <div style={{ display: 'inline-block', textAlign: 'left', marginBottom: '20px' }}>
        {series.length === 0 ? (
          <p>Nenhuma série cadastrada.</p>
        ) : (
          series.map((serie) => (
            <div key={serie.id} style={{ borderBottom: '1px solid #eee', padding: '15px 0', display: 'flex', alignItems: 'center', gap: '15px' }}>
              <span>- {serie.titulo}</span>
              <span>- {serie.temporadas} temporadas</span>
              <span>- {serie.dataLancamento}</span>
              <span>- {serie.diretor}</span>
              <span>- {serie.produtora}</span>
              <span>- {serie.categoria}</span>
              <span>- {serie.dataAssistido}</span>
              <button onClick={() => editarSerie(serie)}>Editar</button>
              <button onClick={() => excluirSerie(serie.id)}>Excluir</button>
            </div>
          ))
        )}
      </div>

      <div>
        <button onClick={() => setPaginaAtual('cadastrar')}>Cadastrar nova série</button>
      </div>
    </div>
  );
}

export default SerieList;