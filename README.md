# Di Cara - Companheiro para Ansiedade

Este é um aplicativo web desenvolvido para ser um companheiro de primeiros socorros para pessoas que enfrentam crises de ansiedade. Ele oferece técnicas simples e eficazes para ajudar a gerenciar momentos de crise, com foco em respiração, aterramento e reestruturação cognitiva.

O projeto foi criado com o objetivo de fornecer apoio imediato e acessível, baseado no programa DI CARA (Diagnóstico, Intervenção, Controle, Alívio).

## ✨ Funcionalidades

- **Técnicas Guiadas:** Seções dedicadas a técnicas de respiração, aterramento, cognitivas e físicas.
- **Ajuda Imediata:** Informações claras sobre quando procurar ajuda médica e contato direto com o CVV.
- **Suporte via WhatsApp:** Um gerador de mensagens com IA para facilitar o pedido de ajuda a um contato de confiança.
- **Informações sobre o Programa:** Detalhes sobre os pilares do programa DI CARA.
- **Página do Criador:** Apresentação do terapeuta responsável pelo método.

## 🚀 Tecnologias Utilizadas

- **Framework:** [Next.js](https://nextjs.org/) (com App Router)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Componentes UI:** [shadcn/ui](https://ui.shadcn.com/)
- **Inteligência Artificial:** [Google AI (Genkit)](https://firebase.google.com/docs/genkit)
- **Banco de Dados (para logs):** [Firebase Firestore](https://firebase.google.com/docs/firestore)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)

## 🛠️ Como Rodar o Projeto Localmente

Siga os passos abaixo para executar o projeto em seu ambiente de desenvolvimento.

### 1. Pré-requisitos

- [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
- `pnpm` (ou `npm`/`yarn`)

### 2. Configuração do Ambiente

Primeiro, clone o repositório:

```bash
git clone https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
cd NOME_DO_REPOSITORIO
```

Em seguida, crie um arquivo `.env.local` na raiz do projeto, seguindo o modelo do `.env.example`. Você precisará preencher com suas credenciais do Firebase para que o log de acessos funcione.

```
# Exemplo de .env.local
NEXT_PUBLIC_FIREBASE_API_KEY=sua_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=seu_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=seu_project_id
# ... e outras variáveis do Firebase
```

### 3. Instalação das Dependências

Instale os pacotes necessários:

```bash
pnpm install
```

### 4. Executando o Servidor de Desenvolvimento

Inicie o servidor:

```bash
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) em seu navegador para ver o resultado.
