1 - Criar repositório no github para armazenar o projeto
2 - Criar localmente o projeto usando o create-react-app e após isso rodar o npm i
3 - Apagar arquivos do Yarn e Arquivos de CSS e Logo.
4 - Remover as importações desses aquivos.
5 - Criar as pastar assets, components, helpers, layouts, pages, server, store, tests
6 - Dar o primeiro commit e subir essa estrutura inicial do projeto
7 - Instalar as dependencias: npm i react-router-dom react-redux redux styled-components
8 - Instalar as dependencias de dev: npm i -D enzyme enzyme-adapter-react-16
9 - Configurar o setupTests.js para receber o Enzyme: https://airbnb.io/enzyme/docs/installation/react-16.html
10 - Criar a pasta, arquivo index e de estilo da página de Weather. (esse arquivo vai ficar em branco por enquanto)
11 - Criar a pasta, arquivo index e de estilo do componente de Timezone.
12 - Criar o arquivo de testes do componente de Timezone.
13 - Criar pasta de ContentLoader e arquivos do componente TimezoneLoader
14 - Importar o método Shallow do enzyme e React no arquivo de testes do timezone
15 - Criar o describe da suite de testes
16 - Criar um it() para o primeiro teste
17 - Criar um noPropWrapper para simular um componente sem prop
18 - Importar o componente de Timezone
19 - Passar um valor vazio como timezoneData
20 - Importar o ContentLoader
21 - Verificar se o ContentLoader está no Componente timezone
22 - Criar um it() para o segundo teste
23 - Criar um propWrapper para simular um componente com prop
24 - Criar um objeto timezoneData e passar por prop para o propWrapper
25 - Criar as validações dos 3 campos passados por prop

TESTES

Timezone

-   Enquanto o componente não receber os dados sobre o timezone por prop, ele deve mostrar um content loader no lugar do texto
-   Quando receber os dados por prop o componente deve mostra-los.

** Aprendizados **

-   Não testar tema do styled-components por componente e sim globalmente
-   No caso de renderização condicional, testar se a condição falsa não aparece no componente
-   Localizar childrens com classe e não displayName do StyledComponents
-   O metodo do shallow rendering dive() é util quando queremos encontrar um filho unico de um filho do componente à ser testado
