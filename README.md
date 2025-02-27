# Template Mobile Nexus

A intenção desse template é mostrar uma forma de estrutura de projeto mobile hoje na Nexus.

Lembrando: Esse template não está escrito em pedra, ou seja, pode ser alterado conforme a necessidade do projeto, a ideia é dar um norte de como já sair com o projeto estruturado.


## Como devemos começar um projeto React Native?

```bash
npx create-expo-app@latest --template bare-minimum  
```

Após você rodar o comando acima, você tera o projeto cruo.

Se baseie nesse template para estruturar o seu projeto.

**Não** esqueça de adicionar o `.github` ao seu projeto.

## Configurações do Github

Não se esqueça de adicionar as pastas .github ao seu projeto.

Nela vai conter os templates de issues, pull requests e configuração de CI.

```bash
.github/
├── ISSUE_TEMPLATE/
│   ├── config.yml
│   ├── bug-report.md
│   ├── feature-request.md
│   └── question.md
├── workflows/  
│   ├── check-branch-name.yml
│   └── check-pr-title.yml
├── pull_request.yml
```

### Detalhes dos Templates de Issue

- **`ISSUE_TEMPLATE/config.yml`**: 
  - Configura como os templates de issues são gerenciados.
  - Desativa a criação de issues em branco.
  - Define templates específicos para novas tarefas e relatórios de bugs.

- **`ISSUE_TEMPLATE/bug-report.md`**: 
  - Template para reportar bugs.
  - Fornece um formato padrão para garantir que todas as informações necessárias sejam incluídas ao reportar um problema.
  - Inclui seções para descrição do bug, passos para reproduzir, comportamento esperado e capturas de tela.

- **`ISSUE_TEMPLATE/feature-request.md`**: 
  - Template para solicitações de novas funcionalidades.
  - Ajuda a padronizar como novas ideias ou melhorias são propostas.
  - Inclui seções para descrição da funcionalidade, justificativa e possíveis soluções.

- **`ISSUE_TEMPLATE/question.md`**: 
  - Template para questões ou dúvidas.
  - Estrutura para que os usuários possam fazer perguntas de forma clara e organizada.
  - Inclui seções para a pergunta, contexto adicional e links relevantes.

- **`workflows/check-branch-name.yml`**: 
  - Workflow do GitHub Actions para verificar os nomes das branches.
  - Garante que sigam um padrão específico para consistência.

- **`workflows/check-pr-title.yml`**: 
  - Workflow para verificar os títulos dos pull requests.
  - Assegura que sigam um formato específico para clareza e consistência.

- **`pull_request.yml`**: 
  - Contém configurações ou automações relacionadas aos pull requests.
  - Pode incluir rodar testes ou enviar notificações quando um PR é aberto, fechado ou atualizado.

## Estrutura de pastas (Projeto)

```bash
src/
├── @types/
├── assets/
├── components/
│   ├── Button/
│   ├── Input/
│   ├── Text/
├── constants/
├── entities/
├── hooks/
├── navigators/
│   ├── App/
│   ├── Auth/
├── screens/
│   ├── Home/
│   ├── Auth/
│     ├── hooks /
│           └── useAuth.ts
├── store/
│   ├── config/
│   ├── slices/
│   ├── services/
│   └── types/
├── theme/
│   ├── styled.d.ts
├── utils/
├── App.tsx
```

# Estrutura de Pastas e Propósito

- **📂 `@types/`**:

  - Esta pasta é usada para armazenar definições de tipos TypeScript que são utilizadas em todo o projeto. Ajuda a manter a segurança e a consistência dos tipos.

- **📂 `assets/`**:

  - Contém ativos estáticos, como imagens, fontes e outros arquivos de mídia usados na aplicação.

- **📂 `components/`**:

  - Abriga componentes de interface de usuário reutilizáveis. Esses componentes podem ser botões, entradas, elementos de texto, etc., que são usados em diferentes telas da aplicação.

- **📂 `constants/`**:

  - Armazena valores constantes que são usados em toda a aplicação. Isso pode incluir valores de configuração, URLs ou qualquer outro dado estático.

- **📂 `entities/`**:

  - Contém os modelos de dados ou entidades usadas na aplicação. Normalmente, são interfaces ou classes TypeScript que definem a estrutura dos dados.

- **📂 `hooks/`**:

  - Esta pasta é para hooks personalizados do React que encapsulam lógica reutilizável. Hooks podem ser usados para gerenciar estado, lidar com efeitos colaterais ou qualquer outra lógica que possa ser compartilhada entre componentes.

- **📂 `navigators/`**:

  - Contém a configuração de navegação para a aplicação. Isso inclui a configuração de pilhas de navegação, abas ou qualquer outro padrão de navegação usado.

- **📂 `screens/`**:

  - Armazena as diferentes telas ou páginas da aplicação. Cada tela normalmente corresponde a uma visão ou rota diferente no aplicativo.
  - **📂 `Auth/hooks/`**:
    - Contém hooks específicos para a tela de autenticação. Esses hooks encapsulam lógica relacionada à autenticação, como gerenciamento de estado de login, validação de credenciais, ou integração com serviços de autenticação.
    - **📄 `useAuth.ts`**: Um hook personalizado que pode gerenciar o estado de autenticação do usuário. Ele pode incluir funções para login, logout, e verificar o status de autenticação. Isso permite que a lógica de autenticação seja reutilizável e facilmente gerenciável dentro dos componentes da tela de autenticação.

- **📂 `store/`**:

  - Gerencia o estado global da aplicação usando Redux ou qualquer outra biblioteca de gerenciamento de estado.
  - **📂 `config/`**: Arquivos de configuração para a configuração do store.
  - **📂 `slices/`**: Slices do Redux que definem estado e reducers para diferentes partes da aplicação.
  - **📂 `services/`**: Contém serviços que interagem com APIs ou realizam outras operações assíncronas.
  - **📂 `types/`**: Definições de tipos específicas para o store, como tipos de ações ou formas de estado.

- **📂 `theme/`**:

  - Contém informações de tema para a aplicação, como esquemas de cores, estilos de fontes, etc.
  - **📄 `styled.d.ts`**: Definições de tipos para o tema, garantindo segurança de tipos ao usar styled-components.

- **📂 `utils/`**:

  - Funções utilitárias e auxiliares que são usadas em toda a aplicação. Isso pode incluir funções para formatação, cálculos ou qualquer outra lógica reutilizável.

- **📄 `App.tsx`**:
  - O ponto de entrada principal da aplicação onde o componente raiz é definido. Este arquivo normalmente configura o provedor para o store, navegação e quaisquer outras configurações globais.
