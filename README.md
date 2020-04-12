<h2 align="center">
    💻 Dev Land 🏰
</h2>

## 🔗 Acesso
Neste repositório, você encontra o código do Front-end da aplicação, ela é hospedada no [Netlify](https://www.netlify.com/). 
É possível acessar e interagir com essa aplicação clicando no link abaixo.

#### Link de acesso: https://devland.netlify.com/


## 🏣 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org)
- [Axios](https://www.npmjs.com/package/axios)
- [Commitlint](https://github.com/conventional-changelog/commitlint)
- [Commitizen](https://github.com/commitizen/cz-cli)


## 💻 Projeto
Esse projeto é desenvolvido para ser utilizado na web, seu objetivo é auxiliar desenvolvedores em tarefas que podem surgir durante o desenvolvimento de softwares.


## 🔖 Como realizar um commit ?
Neste projeto, foram utilizados o [Commitlint](https://github.com/conventional-changelog/commitlint) e o [Commitizen](https://github.com/commitizen/cz-cli) para padronizar a mensagem do commit e automatizar esse processo. Logo, é preciso seguir alguns passos para realizar o commit de forma adequada:

1) Certifique-se de ter uma issue criada antes de continuar. 
2) Digite o comando a seguir para começar o processo de commit:
- `npm run commit OU yarn commit`
3) Escolha uma das opções:

- **feat** - Escolha quando houver alterações ou adição de um novo recurso (feature) ou funcionalidade, que ainda não está em produção ou homologação. Exemplo: Desenvolver uma nova tela.

- **fix** - Escolha quando for consertar um bug. Que já está em homologação ou produção.

- **docs** - Escolha quando houver alterações na documentação do projeto.

- **style** - Escolha quando houver alterações na estilização do codigo, mudanças que não afetam o significado ou funcionamento do código. Exemplos: Espaços em branco, ponto e vírgula ou quebra de linha. (Essa opção não se refere a estilização de páginas: css ou scss)

- **refactor** - Escolha quando houver alterações em um código que nao corrige um bug nem adiciona uma funcionalidade ou recurso.

- **perf** - Escolha quando houver alterações em um código que melhora o desempenho daquela funcionalidade.

- **test** - Escolha quando houver adição de testes ou correção de testes existentes.

- **build** - Escolha quando houver mudanças que afetam a construção do sistema ou suas dependências. Exemplo: Adicionar uma nova dependência no package.json ou alterar o package-lock.json.

- **ci** - Escolha quando houver alterações nos arquivos e scripts de configuração da CI.

- **chore** - Escolha quando houver alterações que não estão relacionadas ao src ou testes. Exemplo: Alterar .gitignore, pasta public ou outros arquivos/pastas na raiz do projeto.

- **revert** - Escolha quando for reverter as mudanças realizadas em outro commit.

4) Certifique-se de ter adicionados os arquivos corretos para a opção e a issue especificada durante esse commit.

5) Deve aparecer a seguinte pergunta: "What is the scope of this change (e.g. component or file name): (press enter to skip) ", aperte Enter para seguir. (Não há necessidade de especificar o escopo neste projeto)

6) A seguir, você deve colocar uma hashtag (#) e o número da issue logo em seguida, depois deve descrever uma mensagem resumida e explicativa sobre o commit. Exemplo: #5 Desenvolvendo a tela de home do site

7) Você será questionado se deseja adicionar uma descrição mais detalhada sobre o commit, é opcional. Adicione uma descrição se achar necessário.

8) Digite N e Enter para a seguinte pergunta: “Are there any breaking changes?”. Não iremos tratar casos de breaking changes neste projeto.

9) Digite N e Enter para a seguinte pergunta: “Does this change affect any open issues?”. Não iremos utilizar a automatização de issues neste projeto.

10) Seu commit deve ser realizado com sucesso. Repita esses passos novamente se quiser realizar mais commits.

