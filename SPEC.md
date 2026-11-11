# SPEC.md — HairDay

## 1. Identificação do projeto

**Projeto:** HairDay — Sistema de Agendamentos  
**Disciplina:** Single Page Application (SPA)  
**Tecnologias:** React, Vite 8, TypeScript e CSS  
**Ferramentas:** ChatGPT, Figma, Context7 MCP e Playwright MCP  
**Status:** Em desenvolvimento

## 2. Objetivo

Desenvolver uma aplicação web responsiva para gerenciamento
de agendamentos de salões de beleza e barbearias.

A aplicação deve reproduzir o protótipo do Figma e permitir
cadastrar, visualizar, filtrar e excluir agendamentos.

O desenvolvimento será realizado por etapas, aplicando
componentização, Props, Hooks, Context API, TypeScript
e manipulação de arrays.

## 3. Referências

### Notion — Enunciado e Board

https://deluxe-blue-bc1.notion.site/Projeto-04-HairDay-Agendamentos-com-React-TypeScript-IA-414dfca74d8d81919380c39dcde5d2e3

### Figma — Protótipo oficial

https://www.figma.com/design/0UAXn1uIaIWTUDnBj1Tzct/Plataforma-de-agendamento--Community---Copy-?node-id=3-376

### GitHub

https://github.com/wanessags/HairDay

## 4. Tecnologias obrigatórias

- React
- Vite 8
- TypeScript
- CSS
- Hooks
- Context API
- Providers
- Props
- useState
- map()
- filter()
- reduce()

## 5. Requisitos funcionais

### RF01 — Cadastrar agendamentos

Permitir o cadastro informando:

- Nome do cliente.
- Data do agendamento.
- Horário do atendimento.

Após o cadastro, atualizar imediatamente a interface.

### RF02 — Validar formulário

Não permitir agendamentos com campos obrigatórios vazios.

Exibir orientações claras quando o formulário estiver inválido.

### RF03 — Listar agendamentos

Exibir os agendamentos cadastrados com:

- Horário.
- Nome do cliente.
- Botão para excluir.

### RF04 — Filtrar por data

Permitir selecionar uma data e visualizar somente
os agendamentos correspondentes.

### RF05 — Organizar por períodos

Os agendamentos devem ser agrupados em:

**Manhã:** 09:00 às 12:00.

**Tarde:** 13:00 às 18:00.

**Noite:** 19:00 às 21:00.

Os horários devem aparecer em ordem cronológica.

### RF06 — Excluir agendamentos

Permitir excluir individualmente um agendamento.

A exclusão deve atualizar imediatamente a interface,
sem remover outros registros.

### RF07 — Estados vazios

Quando não houver agendamentos em determinado período,
exibir exatamente:

"Você ainda não tem agendamentos cadastrados nesse período."

## 6. Requisitos de interface

- Reproduzir o protótipo oficial do Figma.
- Sidebar de agendamento à esquerda no desktop.
- Agenda de atendimentos à direita.
- Layout responsivo para desktop e mobile.
- Componentes visuais reutilizáveis.
- Campos identificados com labels.
- Botões acessíveis por teclado.
- Interface organizada e legível.

## 7. Modelo de dados

Cada agendamento utilizará o tipo TypeScript:

```ts
type Appointment = {
  id: string;
  clientName: string;
  date: string;
  time: string;
};
```

Os agendamentos serão gerenciados inicialmente
em memória utilizando o estado do React.

Não será necessário desenvolver backend,
banco de dados ou autenticação.

## 8. Estrutura planejada

```text
src/
├── assets/
├── components/
│   ├── AppointmentForm/
│   ├── AppointmentItem/
│   ├── AppointmentList/
│   ├── DateFilter/
│   ├── PeriodSection/
│   └── ScheduleSidebar/
├── constants/
│   └── schedule.ts
├── contexts/
│   └── AppointmentContext.tsx
├── hooks/
│   └── useAppointments.ts
├── types/
│   └── appointment.ts
├── utils/
│   └── appointmentUtils.ts
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

## 9. Componentização

### ScheduleSidebar

Responsável pela área lateral de agendamento.

### AppointmentForm

Formulário de cadastro e validação.

### AppointmentList

Listagem de agendamentos da data selecionada.

### AppointmentItem

Representação visual de um agendamento.

### PeriodSection

Agrupamento dos agendamentos por período.

### DateFilter

Seleção da data exibida na agenda.

## 10. Gerenciamento de estado

Utilizar:

- useState para armazenar agendamentos.
- Context API para compartilhar dados.
- Provider para disponibilizar o contexto.
- Hook personalizado para consumir o contexto.
- Props para comunicação entre componentes.

Nunca modificar diretamente o estado do React.

## 11. Manipulação de arrays

### map()

Renderizar componentes e horários disponíveis.

### filter()

Filtrar agendamentos por data e remover registros.

### reduce()

Agrupar agendamentos nos períodos da agenda.

## 12. Testes e validações

Validar:

- Inicialização da aplicação.
- Cadastro de agendamento.
- Atualização imediata da lista.
- Validação dos campos obrigatórios.
- Filtro por data.
- Agrupamento por períodos.
- Ordenação cronológica.
- Mensagens de estado vazio.
- Exclusão individual.
- Responsividade desktop e mobile.
- Ausência de erros no console.

Registrar evidências de execução real
do Playwright MCP e consulta ao Context7 MCP.

## 13. Etapas de desenvolvimento

- [x] Criar projeto React + TypeScript com Vite 8.
- [x] Criar estrutura de pastas e arquivos.
- [x] Criar AGENTS.md.
- [ ] Finalizar e versionar SPEC.md.
- [ ] Analisar e implementar a interface do Figma.
- [ ] Criar tipos TypeScript.
- [ ] Configurar horários e períodos.
- [ ] Criar funções utilitárias.
- [ ] Implementar Context API e Provider.
- [ ] Criar Hook de agendamentos.
- [ ] Implementar formulário.
- [ ] Implementar listagem por data.
- [ ] Implementar agrupamento por períodos.
- [ ] Implementar exclusão.
- [ ] Validar responsividade.
- [ ] Executar testes com Playwright.
- [ ] Registrar evidências do Context7.
- [ ] Finalizar README.
- [ ] Capturar telas desktop e mobile.
- [ ] Publicar versão final no GitHub.

## 14. Funcionalidades opcionais

- Persistência usando localStorage.
- Bloqueio de horários duplicados.
- Personalização adicional da interface.

Essas funcionalidades somente serão implementadas
após a conclusão dos requisitos obrigatórios.

## 15. Regras de desenvolvimento

- Desenvolver uma etapa por vez.
- Manter arquivos completos e organizados.
- Preservar funcionalidades existentes.
- Atualizar SPEC.md em cada etapa.
- Validar antes de realizar commits.
- Criar um commit por etapa concluída.
- Não declarar testes aprovados sem executá-los.
- Seguir o Board do Notion.

## 16. Histórico de desenvolvimento

### Etapa 01 — Preparação

**Status:** Estrutura criada; validação e versionamento pendentes.

Atividades:

- Criação do projeto com React, TypeScript e Vite 8.
- Criação do AGENTS.md.
- Organização das pastas e arquivos.
- Preparação do SPEC.md.

### Próxima etapa

Implementar os tipos TypeScript e as constantes
de horários, mantendo a documentação atualizada.

### Etapa 02 — Tipos TypeScript

**Status:** Implementado; aguardando validação e commit.

Atividades:

- Criação do tipo Appointment.
- Definição dos períodos morning, afternoon e evening.
- Criação do tipo AppointmentFormData.
- Criação do agrupamento AppointmentsByPeriod.

Validação:

- Compilação TypeScript com `npx tsc -b`.

### Próxima etapa

Implementar as constantes de horários e períodos.

### Etapa 03 — Horários e períodos

**Status:** Implementado; aguardando validação e commit.

**Arquivo:** `src/constants/schedule.ts`

Atividades:

- Definição dos períodos Manhã, Tarde e Noite.
- Configuração dos 13 horários.
- Criação do tipo SchedulePeriod.
- Criação da constante AVAILABLE_TIMES.
- Utilização de flatMap() para reunir os horários.

Validação:

- Compilação TypeScript com `npx tsc -b`.

### Próxima etapa

Implementar as funções utilitárias para filtrar,
ordenar e agrupar os agendamentos.

### Etapa 04 — Funções utilitárias

**Status:** Implementado; aguardando validação e commit.

**Arquivo:** `src/utils/appointmentUtils.ts`

Atividades:

- Identificação do período por horário.
- Filtragem de agendamentos por data usando filter().
- Ordenação cronológica usando sort().
- Agrupamento por períodos usando reduce().
- Criação de função para consultar a agenda por data.
- Preservação do array original durante a ordenação.

Validação:

- Compilação TypeScript com `npx tsc -b`.

### Próxima etapa

Implementar AppointmentContext, Provider e
o Hook personalizado useAppointments.

### Etapa 05.1 — AppointmentContext

**Status:** Implementado; aguardando validação.

**Arquivo:** `src/contexts/AppointmentContext.tsx`

Atividades:

- Criação do AppointmentContext.
- Implementação do AppointmentProvider.
- Gerenciamento de agendamentos com useState.
- Gerenciamento da data selecionada.
- Implementação do cadastro com validação básica.
- Implementação da exclusão individual com filter().
- Utilização de useCallback e useMemo.

Observações:

- O Provider ainda precisa ser integrado ao main.tsx.
- O Hook useAppointments será criado na próxima etapa.
- Os dados permanecem em memória.

Validação:

- Compilação TypeScript.

### Etapa 05.2 — Hook useAppointments

**Status:** Implementado; aguardando validação.

**Arquivo:** `src/hooks/useAppointments.ts`

Atividades:

- Criação do Hook personalizado useAppointments.
- Integração com AppointmentContext.
- Utilização do Hook useContext.
- Retorno tipado com AppointmentContextData.
- Tratamento de erro quando utilizado fora do Provider.

Validação:

- Compilação TypeScript com npx tsc -b.

Observações:

- O AppointmentProvider ainda precisa ser integrado ao main.tsx.
- O Hook será utilizado pelos componentes do HairDay.

### Etapa 05.3 — Integração do AppointmentProvider

**Status:** Implementado; aguardando validação e commit.

**Arquivo:** `src/main.tsx`

Atividades:

- Importação do AppointmentProvider.
- Integração do Provider à raiz da aplicação.
- Preservação do React StrictMode.
- Disponibilização do contexto para os componentes filhos.

Validação:

- Compilação TypeScript.
- Build de produção.

Observações:

- O gerenciamento de agendamentos está preparado.
- Os componentes visuais ainda serão implementados.
- Os testes funcionais serão realizados após a integração da interface.

### Etapa 06.1 — Estrutura do ScheduleSidebar

**Status:** Implementado; aguardando validação.

**Arquivo:**

- `src/components/ScheduleSidebar/ScheduleSidebar.tsx`

Atividades:

- Criação do componente ScheduleSidebar.
- Definição de Props tipadas com ReactNode.
- Utilização de elementos semânticos.
- Inclusão de título e descrição.
- Preparação para receber o AppointmentForm.
- Inclusão de identificação acessível com aria-label.

Observações:

- Estilização CSS pendente.
- Integração ao App.tsx pendente.
- Fidelidade visual ao Figma ainda não validada.

Validação:

- Compilação TypeScript.
- Build de produção.

### Próxima etapa

Implementar o CSS do componente ScheduleSidebar.
