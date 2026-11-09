import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import SerieForm from './components/SerieForm/SerieForm';
import SerieList from './components/SerieList/SerieList';
import './App.css';

function App() {
  const [paginaAtual, setPaginaAtual] = useState('inicial');
  
  // Aqui guardamos a lista de séries (com alguns dados iniciais de exemplo)
  const [series, setSeries] = useState([
    { id: 1, titulo: 'La Casa de Papel', temporadas: 3, dataLancamento: '2020-05-20', diretor: 'Álex Pina', produtora: 'Netflix', categoria: 'Drama', dataAssistido: '2021-05-10' },
    { id: 2, titulo: 'Breaking Bad', temporadas: 5, dataLancamento: '2008-01-22', diretor: 'Vince Gilligan', produtora: 'Sony Pictures', categoria: 'Drama', dataAssistido: '2015-01-20' },
    { id: 3, titulo: 'Friends', temporadas: 10, dataLancamento: '1994-09-22', diretor: 'Kevin S. Bright', produtora: 'Warner Bros', categoria: 'Comédia', dataAssistido: '2010-10-10' }
  ]);

  // Estado para saber se estamos a editar alguma série
  const [serieEmEdicao, setSerieEmEdicao] = useState(null);

  // Função para CRIAR ou ATUALIZAR
  const salvarSerie = (novaSerie) => {
    if (novaSerie.id) {
      // Se já tem ID, estamos a editar
      setSeries(series.map(s => (s.id === novaSerie.id ? novaSerie : s)));
    } else {
      // Se não tem ID, é uma série nova (geramos um ID aleatório)
      setSeries([...series, { ...novaSerie, id: Date.now() }]);
    }
    setSerieEmEdicao(null);
    setPaginaAtual('lista'); // Redireciona para a lista
  };

  // Função para APAGAR
  const excluirSerie = (id) => {
    setSeries(series.filter(s => s.id !== id));
  };

  // Função para preparar a EDIÇÃO
  const editarSerie = (serie) => {
    setSerieEmEdicao(serie);
    setPaginaAtual('cadastrar'); // Vai para a tela de formulário
  };

  // Função para limpar o estado de edição ao mudar de página
  const mudarPagina = (pagina) => {
    setSerieEmEdicao(null);
    setPaginaAtual(pagina);
  };

  return (
    <div>
      <NavBar setPaginaAtual={mudarPagina} />

      <main>
        {paginaAtual === 'inicial' && (
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Página Inicial</h1>
            <p><strong style={{ fontSize: '1.2rem', color: '#333' }}>Bem-vindo ao Project Series! 🍿</strong></p>
            <p>O seu catálogo pessoal de maratonas.</p>
            <p style={{ color: '#555' }}>Acompanhe, organize e gerencie suas séries favoritas de um jeito rápido, facil e intuitivo.</p>
          </div>
        )}

        {paginaAtual === 'sobre' && (
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Sobre</h1>
            <p>Este é um projeto de gestão de séries assistidas desenvolvido com React para a disciplina Desenvolvimento de Sistemas Frontend.</p>
            <p>Aqui você pode cadastrar, visualizar, editar e excluir séries assistidas.</p>
          </div>
        )}

        {paginaAtual === 'cadastrar' && (
          <SerieForm 
            salvarSerie={salvarSerie} 
            serieEmEdicao={serieEmEdicao} 
          />
        )}
        
        {paginaAtual === 'lista' && (
          <SerieList 
            series={series} 
            excluirSerie={excluirSerie} 
            editarSerie={editarSerie} 
            setPaginaAtual={setPaginaAtual} 
          />
        )}
      </main>
    </div>
  );
}

export default App;