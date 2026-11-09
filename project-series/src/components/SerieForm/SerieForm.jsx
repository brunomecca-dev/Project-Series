import React, { useState, useEffect } from 'react';

function SerieForm({ salvarSerie, serieEmEdicao }) {
  const [formData, setFormData] = useState({
    titulo: '', temporadas: '', dataLancamento: '',
    diretor: '', produtora: '', categoria: '', dataAssistido: ''
  });

  // Se houver uma série em edição, preenche o formulário com os dados dela
  useEffect(() => {
    if (serieEmEdicao) {
      setFormData(serieEmEdicao);
    } else {
      setFormData({
        titulo: '', temporadas: '', dataLancamento: '',
        diretor: '', produtora: '', categoria: '', dataAssistido: ''
      });
    }
  }, [serieEmEdicao]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    salvarSerie(formData); // Envia os dados para o App.jsx guardar
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>{serieEmEdicao ? 'Editar série' : 'Cadastrar séries'}</h2>
      
      <form onSubmit={handleSubmit} style={{ display: 'inline-block', textAlign: 'right' }}>
        <div style={{ marginBottom: '5px' }}>
          <label>Título: </label>
          <input type="text" name="titulo" value={formData.titulo} onChange={handleChange} required />
        </div>
        <div style={{ marginBottom: '5px' }}>
          <label>Número de Temporadas: </label>
          <input type="number" name="temporadas" value={formData.temporadas} onChange={handleChange} required />
        </div>
        <div style={{ marginBottom: '5px' }}>
          <label>Data de Lançamento: </label>
          <input type="date" name="dataLancamento" value={formData.dataLancamento} onChange={handleChange} required />
        </div>
        <div style={{ marginBottom: '5px' }}>
          <label>Diretor: </label>
          <input type="text" name="diretor" value={formData.diretor} onChange={handleChange} required />
        </div>
        <div style={{ marginBottom: '5px' }}>
          <label>Produtora: </label>
          <input type="text" name="produtora" value={formData.produtora} onChange={handleChange} required />
        </div>
        <div style={{ marginBottom: '5px' }}>
          <label>Categoria: </label>
          <input type="text" name="categoria" value={formData.categoria} onChange={handleChange} required />
        </div>
        <div style={{ marginBottom: '5px' }}>
          <label>Data em que assistiu: </label>
          <input type="date" name="dataAssistido" value={formData.dataAssistido} onChange={handleChange} required />
        </div>
        <div style={{ textAlign: 'center', marginTop: '15px' }}>
          <button type="submit">{serieEmEdicao ? 'Salvar Alterações' : 'Cadastrar Série'}</button>
        </div>
      </form>
    </div>
  );
}

export default SerieForm;