# Avaliação Final Minsait - .Net e Angular

<h1 align="center" > Sobre o Desafio </h1>

<p align="center">
    Desenvolver um sistema de gerenciamento de livros que atenda as necessidades e ajude a livraria a se modernizar as novas tencologias online. O Atual problema da livraria que possui um grande estoque de livros, os quais não estão cadastrados em nenhum sistema, o que dificulda a identificação dos livros disponiveis e quais precisam de reposição. O sistema vem para permitir que a livraria gerencia melhor o seu estoque na forma de cadastrar novos livros, atualização dos livros cadastrados, exclusão de livros, e busca por diversos criérios como titulo, autor, editora, edição entre outros.
</p>

<h1 align="center" > Aplicação </h1>

O Projeto foi desenvoldido com [Angular CLI](https://github.com/angular/angular-cli) versão 15.1.5. Com o consumo da [API em .Net](https://github.com/Romenildo/Livroteria-back).

<p align="center">
  
  ![.Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  ![TS](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
  ![SCSS](https://img.shields.io/badge/Scss-CC6699?style=for-the-badge&logo=scss&logoColor=white)
 </p>

<p style = "text-align:capitalize">
    A aplicação consiste em duas telas uma de listar os livros, e outra de cadastrar. A de cadastrar possui um formulário de preecnhimento com as informações sobre o livro, como título, subtítulo, autor e os demais, além de uma imagem que pode ser pré-visualizada.      
    Na página de Livros possui a lista de todos os livros cadastrados até o momento, além de uma pequena lista ao lado dos últimos livros recentes adicionados para ter uma maior noção e controle dos mesmos. Além que possui dois filtros diferentes um principal o qual faz a busca por uma palavra e ela pode estar tanto no título, subtítulo, editora ou autor que irá retornar a lista com a busca, e ao lado uma busca mais precisa com controle de ano de publicação, quantidade de páginas, editora, autor, e título tudo para um melhor gerenciamento e controle dos livros cadastrados. 
</p>

 <h1 align="center" > Como executar a aplicação</h1>

Primeiramente como a aplicação é desenvolvida em angular é necessario instalar na máquina o angular CLI que atualmente (23/03/2023) está na versão 15.1.5:
   
- [Angular CLI](https://github.com/angular/angular-cli) 

 Para baixar a aplicação na sua máquina pode ser feito baixando pelo próprio github ou pelo seguinte comando:
```sh
git clone https://github.com/Romenildo/Livroteria-back.git
```

Em seguida dentro da pasta abra o terminar e execute o seguinte comando para que as dependências do projeto angular sejam baixadas na aplicação: 
```sh
   npm install
```
Após baixar as dependencias do projeto angular basta executar o aplicação no ambiente de desenvolvimento que o angular CLI cria, com o comando:
```sh
 ng serve
```
<h1 align="center" > Detalhes sobre a Aplicação </h1>

<h3 align="center"> 
    Inicialmente na tela principal da lista de livros temos a seguinte tela, o qual possui toda a navegação e visualização dos livros.
</h3>

![inicial](https://github.com/Romenildo/Treinamento-GIT/blob/master/imgs/projeto-final/telaInicial.png)

<h3 align="center"> 
    Onde ao clicar na imagem do livro é possivel visualizar mais informações detalhadas sobre a obra, além das opções de excluir e editar o livro.
</h3>

![selecionado](https://github.com/Romenildo/Treinamento-GIT/blob/master/imgs/projeto-final/livroSelecionado.png)

<h3 align="center"> 
    Ao selecionar a opção de editar mostrarar um modal com os cmapos do livro para ser feito a possivel alteração em qualquer campo ou imagem.
</h3>

![editar](https://github.com/Romenildo/Treinamento-GIT/blob/master/imgs/projeto-final/editar.png)

<h3 align="center"> 
    Além disso na tela Inicial também vem com uma lista de controle dos ultimos livros adicionados, para uma melhor organização ao ir adicionando os livros no sistema.
</h3>

![ultimos](https://github.com/Romenildo/Treinamento-GIT/blob/master/imgs/projeto-final/ultimosAdicionados.png)

<h3 align="center"> 
    A tela de filtro além do filtro padrão ao topo da tela Inicial, é diferente pois possui um filtro maios preciso de como deseja ser feito a busca, caso por determinado autor, editora, ano de publicação, ou até mesmo limitar a quantidade de páginas que o livro possui.
</h3>

![filtro](https://github.com/Romenildo/Treinamento-GIT/blob/master/imgs/projeto-final/filtragem.png)

<h3 align="center"> 
    Por fim a tela de cadastrar novos livros no sitema, o qual possui as validações apropriadas e uma pré visualização da capa do livro(caso nao seja adicionado um link, ou o link quebrado a capa do livro retornara uma padrao informando que nao possui imagem)
</h3>

![cadastrar](https://github.com/Romenildo/Treinamento-GIT/blob/master/imgs/projeto-final/cadastrar.png)

<h3 align="center"> 
    Exemplo de um cadastro de livro
</h3>

![cadastrarItem](https://github.com/Romenildo/Treinamento-GIT/blob/master/imgs/projeto-final/cadastraritem.png)


<h3 align="center"> 
    Bonus: é possivel filtrar a partir do filtro clicando no autor ou editora, que o filtro irá se atualizar e retornar todos os livros daquele autor ou editora selecionada.
</h3>

![filtroBonus](https://github.com/Romenildo/Treinamento-GIT/blob/master/imgs/projeto-final/filtroPorautor.png)


<h1 align="center" > Mais detalhes sobre o desafio </h1>

- Utilizar o Angular 12 ou superior, utilizando as dependências, tecnologias e conceitos aprendidos no treinamento e adicionais que julgar melhor;

<h2> Requisitos</h2>

- <b>Criação da interface de usuário</b>: Crie uma interface de usuário para o cadastro de livros, permitindo que
o usuário insira informações como título, subtítulo, resumo, quantidade de páginas, data de publicação,
editora, edição e autor.
- <b>Validação de dados</b>: Certifique-se de que as informações inseridas pelo usuário estejam corretas e
completas antes de serem armazenadas no banco de dados. Por exemplo, verifique se o título do livro não está em branco ou se o mesmo não está cadastrado. Siga o modelo de dados da tabela do banco para as validações.
- <b>Listagem de livros</b>: Crie uma página que liste todos os livros cadastrados no banco de dados, permitindo
que o usuário filtre usando os campos de buscas.
- <b>Edição de livros</b>: Crie uma funcionalidade que permita ao usuário editar informações de um livro já
cadastrado no banco de dados.
- <b>Exclusão de livros</b>: Crie uma funcionalidade que permita ao usuário excluir um livro já cadastrado no
banco de dados.
- <b>Testes</b>: Certifique-se de testar o aplicativo para garantir que todas as funcionalidades funcionem
corretamente e sem erros.

<h2> O que será avaliado</h2>

- Estrutura do código;    
- Boas práticas;    
- Componentes visuais;    
- Criatividade;    
- Qualidade;    
- Desenvolvimento dos requisitos mínimos.    
