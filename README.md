# **React Feature Sliced Boilerplate**

O **React Feature Sliced Boilerplate** é um boilerplate para o desenvolvimento de aplicações React utilizando a arquitetura "feature sliced". Ele fornece uma estrutura inicial completa e configurada com tecnologias populares, como React, Vite, Tailwind e Storybook.

## **Características**

- **React**: Uma biblioteca JavaScript de código aberto para criar interfaces de usuário.
- **Vite**: Um bundler e servidor de desenvolvimento extremamente rápido para projetos JavaScript modernos.
- **Tailwind**: Um framework de CSS utilitário altamente configurável e de baixo nível.
- **Storybook**: Uma ferramenta de desenvolvimento de componentes UI isolados e reutilizáveis.

![Arquitetura Feature Sliced](public/feature-sliced.jpg "Diagrama da arquitetura Feature Sliced")

## **Arquitetura "Feature Sliced"**

O **React Feature Sliced Boilerplate** segue a abordagem da arquitetura "feature sliced" para organizar o código da sua aplicação. Essa abordagem divide o projeto em "features" independentes, agrupando todos os arquivos relacionados a uma determinada funcionalidade em um diretório específico. Essa estrutura facilita a escalabilidade e a manutenção do código, tornando-o mais modular e de fácil compreensão.

## **Pré-requisitos**

Certifique-se de ter as seguintes dependências instaladas em sua máquina de desenvolvimento:

- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes do Node.js)

## **Instalação e Uso**

Siga as etapas abaixo para utilizar o **react-feature-sliced-boilerplate** em seu projeto:

1. Clone este repositório em sua máquina local:

```
git clone git@github.com:lcoutox/react-feature-sliced-boilerplate.git
```

1. Acesse o diretório do projeto:

```
cd react-feature-sliced-boilerplate
```

1. Instale as dependências do projeto:

```
npm install
```

1. Execute o servidor de desenvolvimento:

```
npm run dev
```

Isso iniciará o servidor de desenvolvimento do Vite, onde você poderá visualizar a aplicação em seu navegador. A partir daí, você pode começar a desenvolver suas próprias features, componentes e estilos, seguindo a estrutura e os padrões estabelecidos pelo boilerplate.

## **Scripts disponíveis**

O **react-feature-sliced-boilerplate** inclui os seguintes scripts predefinidos:

- **`dev`**: Inicia o servidor de desenvolvimento do Vite.
- **`build`**: Compila o código para produção.
- **`lint`**: Executa o ESLint para verificar erros e problemas de estilo de código.
- **`lint:fix`**: Executa o ESLint e tenta corrigir automaticamente os problemas encontrados.
- **`preview`**: Inicia um servidor de pré-visualização para visualizar a versão de produção da aplicação.
- **`prepare`**: Configura o Husky para uso com ganchos de pré-commit.
- **`storybook`**: Inicia o servidor de desenvolvimento do Storybook.
- **`build-storybook`**: Compila a versão de produção do Storybook.

Certifique-se de consultar o arquivo **`package.json`** para ver a lista completa de scripts e suas descrições.