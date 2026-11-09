## Nome: `Bruno Mecca`

Para executar este projeto:

1. Entre pasta project-series no terminal:
```
cd projects-series
```

2. Rode npm install para instalar as dependências do projeto:


```
npm install
```

3. E em seguida, npm run dev, para iniciar a execução do projeto (Vite):

```
npm run dev
```

Após execução do projeto, estes são os resultados esperados no navegador:

![Resultado da Página Inicial](./prints/print-inicial.png)

![Resultado da Página Cadastrar Séries](./prints/print-cadastro.png)

![Resultado da Página Lista de Séries](./prints/print-lista.png)


## Introdução

Este projeto contém uma estrutura desenvolvida em React utilizando Vite, com o objetivo de demonstrar a construção de um CRUD estático. A aplicação permite gerenciar o cadastro de séries assistidas, utilizando estados e renderização condicional para simular a navegação entre páginas e a manipulação de dados em memória.

## Componentes

Os componentes estão no diretório `./src/components` e eles possuem as seguintes características:

- NavBar:
  - `props`
    - setPaginaAtual: callback que é chamado quando um link de navegação é clicado, alterando a página renderizada no momento;
  - Descrição: este componente renderiza os links de navegação para mostrar as páginas disponíveis em uma barra superior de forma dinâmica.


- SerieForm:
  - `props`
    - salvarSerie: callback que é chamado no submit do formulário para salvar ou atualizar os dados de uma série no estado global;
    - serieEmEdicao: objeto (ou null) contendo os dados de uma série existente para preencher os campos durante uma edição;
  - Descrição: este componente apresenta o formulário com os campos obrigatórios (Título, Temporadas, etc.) para a criação e atualização de séries.


- SerieList:
  - `props`
    - series: um array com a lista de séries cadastradas para serem mostradas em tela;
    - excluirSerie: callback que é chamado para remover uma série específica do array;
    - editarSerie: callback que é chamado para enviar os dados de uma série para o formulário de edição;
    - setPaginaAtual: callback utilizado pelo botão de atalho para redirecionar o usuário à tela de cadastro;
  - Descrição: este componente lista as séries cadastradas de forma dinâmica e fornece botões interativos ao lado de cada item para a exclusão e edição.


## Conclusão

Este projeto foi construído para cumprir os requisitos da Fase 1 da disciplina de Desenvolvimento de Sistemas Frontend, focando na componentização correta, uso de hooks (useState e useEffect) e interatividade do usuário em aplicações React.
