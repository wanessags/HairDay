# 💛 HairDay — Sistema de Agendamentos

Aplicação web desenvolvida com **React, TypeScript e Vite 8** para gerenciamento de agendamentos em salões de beleza e barbearias.

O HairDay permite cadastrar, visualizar, filtrar e excluir atendimentos de maneira simples e organizada, com uma interface responsiva inspirada no protótipo do Figma.

## Sobre o projeto

O HairDay foi desenvolvido como atividade da disciplina **Single Page Application (SPA)**, com o objetivo de aplicar conceitos fundamentais do React, componentização, gerenciamento de estado, TypeScript e desenvolvimento assistido por Inteligência Artificial.

A interface apresenta um formulário para novos agendamentos e uma agenda organizada por períodos do dia.

## Funcionalidades

- Cadastro de agendamentos com nome, data e horário.
- Validação dos campos obrigatórios.
- Atualização imediata da agenda após o cadastro.
- Filtro de agendamentos por data.
- Organização por Manhã, Tarde e Noite.
- Ordenação cronológica dos horários.
- Exclusão individual de agendamentos.
- Mensagens para períodos sem atendimentos.
- Interface responsiva para desktop e dispositivos móveis.
- Navegação por teclado e recursos básicos de acessibilidade.

### Períodos disponíveis

| Período | Horários       |
| ------- | -------------- |
| Manhã   | 09:00 às 12:00 |
| Tarde   | 13:00 às 18:00 |
| Noite   | 19:00 às 21:00 |

## Tecnologias utilizadas

- React
- TypeScript
- Vite 8
- CSS
- Lucide React
- React Hooks
- Context API
- Playwright
- Git e GitHub

## Conceitos aplicados

**Componentização:** a interface foi dividida em componentes reutilizáveis, como `AppointmentForm`, `AppointmentList`, `AppointmentItem`, `PeriodSection`, `DateFilter` e `ScheduleSidebar`.

**Hooks:** utilização de `useState`, `useContext`, `useMemo` e `useCallback`.

**Context API:** compartilhamento dos agendamentos e da data selecionada por meio do `AppointmentProvider` e do Hook `useAppointments`.

**TypeScript:** utilização de tipos e interfaces para representar agendamentos, períodos e propriedades dos componentes.

**Manipulação de arrays:** utilização de `map()`, `filter()`, `reduce()`, `sort()` e `flatMap()`.

## Estrutura do projeto

```text
hairday/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AppointmentForm/
│   │   ├── AppointmentItem/
│   │   ├── AppointmentList/
│   │   ├── DateFilter/
│   │   ├── PeriodSection/
│   │   └── ScheduleSidebar/
│   ├── constants/
│   ├── contexts/
│   ├── hooks/
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── tests/
│   └── hairday.spec.ts
├── AGENTS.md
├── SPEC.md
├── README.md
├── package.json
├── package-lock.json
└── vite.config.ts
```

## Como executar o projeto

### Pré-requisitos

- Node.js compatível com Vite 8.
- npm.
- Git.

### 1. Clonar o repositório

```bash
git clone https://github.com/wanessags/HairDay.git
```

### 2. Acessar a pasta

```bash
cd HairDay
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Iniciar a aplicação

```bash
npm run dev
```

Acesse o endereço informado pelo Vite, normalmente:

http://localhost:5173/

## Compilação e build

Para validar a tipagem TypeScript:

```bash
npx tsc -b
```

Para gerar a versão de produção:

```bash
npm run build
```

Para visualizar o build:

```bash
npm run preview
```

## Testes automatizados

O projeto utiliza **Playwright** para realizar testes funcionais automatizados.

### Instalar o navegador de testes

```bash
npx playwright install chromium
```

### Executar os testes

Primeiro, mantenha a aplicação iniciada com:

```bash
npm run dev
```

Em outro terminal:

```bash
npx playwright test tests/hairday.spec.ts --workers=1
```

### Cenários testados

| ID  | Cenário                                  | Resultado |
| --- | ---------------------------------------- | --------- |
| 01  | Cadastrar e excluir agendamento          | Aprovado  |
| 02  | Validar nome obrigatório                 | Aprovado  |
| 03  | Validar horário obrigatório              | Aprovado  |
| 04  | Validar data obrigatória                 | Aprovado  |
| 05  | Filtrar agendamentos por data            | Aprovado  |
| 06  | Organizar por períodos                   | Aprovado  |
| 07  | Ordenar horários cronologicamente        | Aprovado  |
| 08  | Excluir somente o registro selecionado   | Aprovado  |
| 09  | Validar funcionamento em viewport mobile | Aprovado  |

**Resultado da última execução: 9 testes aprovados em 16,7 segundos.**

A execução foi realizada com Playwright instalado no projeto. As evidências específicas de utilização do Playwright MCP ainda devem ser documentadas separadamente, conforme a exigência da atividade.

## Responsividade

O layout foi desenvolvido para adaptar a apresentação do formulário e da agenda a diferentes tamanhos de tela.

O teste automatizado mobile utiliza uma viewport de 390 × 844 pixels, verificando o funcionamento do cadastro, a exibição do agendamento e a ausência de rolagem horizontal.

## Acessibilidade

Foram utilizados recursos como:

- Elementos HTML semânticos.
- Labels nos campos do formulário.
- Identificação acessível de controles.
- Estados de foco visíveis.
- Mensagens de validação.
- Navegação por teclado.
- Respeito à preferência por movimento reduzido.

Os recursos básicos foram verificados manualmente. Uma auditoria completa de acessibilidade não foi realizada.

## Armazenamento dos dados

Os agendamentos são gerenciados em memória utilizando o estado do React e a Context API.

Não há necessidade de backend, banco de dados ou autenticação para o escopo desta atividade.

**Observação:** os agendamentos não são preservados após recarregar a página.

## Desenvolvimento assistido por IA

O ChatGPT foi utilizado como ferramenta de apoio no planejamento, implementação, revisão e testes do projeto.

O arquivo `AGENTS.md` registra as orientações do desenvolvimento, enquanto o arquivo `SPEC.md` reúne os requisitos, a estrutura, o histórico e os resultados das validações.

## Documentação complementar

- `AGENTS.md` — Orientações para o desenvolvimento assistido por IA.
- `SPEC.md` — Especificação técnica, requisitos e histórico de desenvolvimento.
- `tests/hairday.spec.ts` — Testes automatizados de funcionalidades.

## Referências

**Enunciado no Notion:**

https://deluxe-blue-bc1.notion.site/Projeto-04-HairDay-Agendamentos-com-React-TypeScript-IA-414dfca74d8d81919380c39dcde5d2e3

**Protótipo no Figma:**

https://www.figma.com/design/0UAXn1uIaIWTUDnBj1Tzct/Plataforma-de-agendamento--Community---Copy-?node-id=3-376

**Repositório no GitHub:**

https://github.com/wanessags/HairDay

---

**HairDay — Projeto acadêmico de Single Page Application (SPA).**

Desenvolvido com React, TypeScript, Vite 8 e apoio de Inteligência Artificial.
