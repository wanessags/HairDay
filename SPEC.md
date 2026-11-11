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

### Etapa 06.2 — Estilização da ScheduleSidebar

**Status:** Implementado; aguardando validação.

**Arquivo:**

- `src/components/ScheduleSidebar/ScheduleSidebar.css`

Atividades:

- Criação dos estilos da Sidebar.
- Definição de fundo escuro e tipografia.
- Configuração de espaçamentos internos.
- Definição de largura para desktop.
- Adaptação responsiva para tablet e mobile.
- Preparação visual para o formulário.

Observações:

- CSS ainda não importado pelo componente.
- Sidebar ainda não integrada ao App.tsx.
- Cores e proporções ainda precisam ser conferidas no Figma.
- Responsividade visual ainda não testada no navegador.

Validação:

- Build de produção.
- Verificação de formatação do Git.

### Etapa 06.3 — Integração do CSS da Sidebar

**Status:** Implementado; aguardando validação e commit.

**Arquivo:**

- `src/components/ScheduleSidebar/ScheduleSidebar.tsx`

Atividades:

- Importação do ScheduleSidebar.css.
- Integração dos estilos ao componente.
- Preservação das Props tipadas com ReactNode.
- Preservação da estrutura semântica e acessível.

Validação:

- Compilação TypeScript.
- Build de produção.

Observações:

- A Sidebar ainda não está integrada ao App.tsx.
- A interface ainda precisa ser comparada ao Figma.
- A responsividade visual ainda precisa ser testada.

### Etapa 06.4 — Integração da Sidebar ao App

**Status:** Implementado; aguardando validação.

**Arquivo:**

- `src/App.tsx`

Atividades:

- Importação do componente ScheduleSidebar.
- Criação da estrutura principal da aplicação.
- Inclusão do título "Sua agenda".
- Criação da área reservada aos agendamentos.
- Utilização de elementos semânticos e aria-label.
- Preservação da importação do App.css.

Observações:

- O formulário ainda será implementado.
- A listagem ainda será implementada.
- Os estilos do layout principal ainda precisam ser criados.
- Fidelidade ao Figma ainda não validada.

Validação:

- Compilação TypeScript.
- Build de produção.
- Verificação visual no navegador.

### Etapa 06.5 — Layout principal responsivo

**Status:** Implementado; aguardando validação.

**Arquivo:**

- `src/App.css`

Atividades:

- Estilização do layout principal.
- Organização da Sidebar e agenda com Flexbox.
- Definição de cores e tipografia iniciais.
- Estilização do cabeçalho da agenda.
- Estilização da mensagem provisória.
- Implementação de media queries.
- Adaptação para desktop, tablet e mobile.

Observações:

- As cores e medidas ainda precisam ser
  comparadas com o Figma.
- O formulário de agendamento está pendente.
- A listagem dos agendamentos está pendente.
- A responsividade visual precisa ser testada.

Validação:

- Compilação TypeScript.
- Build de produção.
- Verificação visual em desktop e mobile.

### Etapa 06.6 — Estilos globais

**Status:** Implementado; aguardando validação e commit.

**Arquivo:**

- `src/index.css`

Atividades:

- Substituição dos estilos globais iniciais do Vite.
- Configuração de cores e variáveis CSS.
- Definição da tipografia global.
- Padronização de box-sizing.
- Normalização de botões e campos de formulário.
- Inclusão de foco visível para navegação por teclado.
- Respeito à preferência por movimento reduzido.
- Configuração de estilos de seleção de texto.

Observações:

- A identidade visual ainda precisa ser comparada
  com o protótipo oficial do Figma.
- Os componentes de formulário estão pendentes.
- Os testes de acessibilidade ainda não foram executados.

Validação:

- Compilação TypeScript.
- Build de produção.
- Verificação visual desktop e mobile.

### Etapa 07.1 — Componente AppointmentForm

**Status:** Implementado; aguardando validação e commit.

**Arquivo:**

- `src/components/AppointmentForm/AppointmentForm.tsx`

Atividades:

- Criação do formulário de agendamentos.
- Integração com o Hook useAppointments.
- Gerenciamento dos campos com useState.
- Seleção de horários por período.
- Utilização de map() para renderizar horários.
- Validação de campos obrigatórios.
- Inclusão de mensagens de erro e sucesso.
- Utilização de labels e atributos de acessibilidade.
- Preparação para integração com a Sidebar.

Observações:

- O CSS do formulário ainda será implementado.
- O formulário ainda não está integrado à Sidebar.
- A validação completa de datas permanece pendente.
- Os testes funcionais ainda não foram executados.
- A interface ainda precisa ser comparada ao Figma.

Validação:

- Compilação TypeScript.
- Build de produção.

### Etapa 07.2 — Estilização do AppointmentForm

**Status:** Implementado; aguardando validação e commit.

**Arquivo:**

- `src/components/AppointmentForm/AppointmentForm.css`

Atividades:

- Estilização dos campos de data e cliente.
- Criação do grid de seleção de horários.
- Estilização dos estados normal, hover e selecionado.
- Estilização do botão Agendar.
- Estilização das mensagens de erro e sucesso.
- Adaptação dos horários para telas pequenas.
- Inclusão de foco visível e suporte a movimento reduzido.

Observações:

- CSS ainda precisa ser importado no AppointmentForm.tsx.
- Formulário ainda não está integrado à Sidebar.
- Fidelidade visual ao Figma não validada.
- Testes funcionais ainda pendentes.

Validação:

- Build de produção.
- Verificação de formatação do Git.

### Etapa 07.3 — Integração do CSS do formulário

**Status:** Implementado; aguardando validação e commit.

**Arquivo:**

- `src/components/AppointmentForm/AppointmentForm.tsx`

Atividades:

- Importação do AppointmentForm.css.
- Integração dos estilos ao formulário.
- Preservação das validações dos campos.
- Preservação da seleção de horários.
- Preservação da integração com Context API.
- Preservação das mensagens de erro e sucesso.

Observações:

- O formulário ainda não está integrado à Sidebar.
- Os testes funcionais ainda não foram executados.
- A fidelidade visual ao Figma ainda precisa ser validada.

Validação:

- Compilação TypeScript.
- Build de produção.

### Etapa 07.4 — Integração do formulário à Sidebar

**Status:** Implementado; aguardando validação.

**Arquivo:** `src/App.tsx`

Atividades:

- Integração do AppointmentForm à ScheduleSidebar.
- Preservação do layout principal.
- Disponibilização do formulário na interface.
- Utilização do AppointmentProvider já configurado.

Observações:

- A listagem dos agendamentos ainda será implementada.
- A fidelidade visual ao Figma ainda precisa ser validada.
- Os testes funcionais completos continuam pendentes.

Validação:

- Compilação TypeScript.
- Build de produção.
- Teste visual e manual do formulário.

### Etapa 08.1 — Componente DateFilter

**Status:** Implementado; aguardando validação e commit.

**Arquivo:** `src/components/DateFilter/DateFilter.tsx`

Atividades:

- Criação do componente DateFilter.
- Integração com o Hook useAppointments.
- Utilização do Context API.
- Controle da data selecionada.
- Criação de Props tipadas.
- Utilização de useId para identificação acessível.
- Atualização do estado por meio do evento onChange.

Observações:

- O componente ainda não foi integrado ao App.tsx.
- O CSS será implementado na próxima etapa.
- A filtragem visual será conectada à listagem posteriormente.

Validação:

- Compilação TypeScript.
- Build de produção.

### Etapa 08.2 — Estilização do DateFilter

**Status:** Implementado; aguardando validação e commit.

**Arquivo:**

- `src/components/DateFilter/DateFilter.css`

Atividades:

- Estilização do seletor de data.
- Definição de cores, bordas e espaçamentos.
- Configuração de estados hover e focus-visible.
- Adaptação para dispositivos móveis.
- Suporte à preferência por movimento reduzido.

Observações:

- CSS ainda precisa ser importado no DateFilter.tsx.
- DateFilter ainda não está integrado ao App.tsx.
- A filtragem da listagem ainda será implementada.
- Fidelidade visual ao Figma não validada.

Validação:

- Compilação TypeScript.
- Build de produção.

### Etapa 08.3 — Integração do CSS do DateFilter

**Status:** Implementado; aguardando validação e commit.

**Arquivo:**

- `src/components/DateFilter/DateFilter.tsx`

Atividades:

- Importação do DateFilter.css.
- Integração dos estilos ao componente.
- Preservação da comunicação com Context API.
- Manutenção da Props label tipada.
- Utilização de useId para acessibilidade.
- Atualização da data selecionada via onChange.

Observações:

- DateFilter ainda precisa ser integrado ao App.tsx.
- A filtragem dos agendamentos será conectada à listagem.
- A fidelidade visual ao Figma ainda não foi validada.

Validação:

- Compilação TypeScript.
- Build de produção.

### Etapa 08.4 — Integração do DateFilter à agenda

**Status:** Implementado; aguardando validação e commit.

**Arquivo:**

- `src/App.tsx`

Atividades:

- Importação do componente DateFilter.
- Integração do seletor de data ao cabeçalho da agenda.
- Preservação da Sidebar e do formulário.
- Integração com a data selecionada no Context API.
- Manutenção da estrutura responsiva existente.

Observações:

- A alteração da data já atualiza o estado global.
- A listagem filtrada ainda não está implementada.
- O layout visual ainda precisa ser comparado ao Figma.

Validação:

- Compilação TypeScript.
- Build de produção.
- Verificação visual do seletor de data.
- Verificação da seleção de diferentes datas.

### Etapa 09.1 — Componente AppointmentItem

**Status:** Implementado; aguardando validação e commit.

**Arquivo:**

- `src/components/AppointmentItem/AppointmentItem.tsx`

Atividades:

- Criação do componente reutilizável AppointmentItem.
- Definição de Props tipadas com TypeScript.
- Exibição do horário e nome do cliente.
- Criação do botão de exclusão com ícone de lixeira.
- Implementação do callback onDelete utilizando o ID.
- Inclusão de atributos de acessibilidade.

Observações:

- A estilização CSS será implementada na próxima etapa.
- O componente ainda não está integrado à listagem.
- A exclusão visual ainda não foi testada.
- A fidelidade ao Figma ainda precisa ser validada.

Validação:

- Compilação TypeScript.
- Build de produção.
- Verificação de formatação do Git.

### Etapa 09.2 — Estilização do AppointmentItem

**Status:** Implementado; aguardando validação e commit.

**Arquivo:**

- `src/components/AppointmentItem/AppointmentItem.css`

Atividades:

- Estilização das linhas de agendamento.
- Destaque visual para os horários.
- Estilização do nome do cliente.
- Estilização do botão de exclusão.
- Inclusão de estados hover, focus-visible e active.
- Adaptação para dispositivos móveis.
- Configuração de área de clique de 44 × 44 pixels.
- Suporte à preferência por movimento reduzido.

Observações:

- O CSS ainda precisa ser importado no AppointmentItem.tsx.
- O componente ainda não está integrado à listagem.
- A exclusão funcional ainda precisa ser testada.
- A fidelidade visual ao Figma ainda não foi validada.

Validação:

- Compilação TypeScript.
- Build de produção.
- Verificação de formatação do Git.

### Etapa 09.3 — Integração do CSS do AppointmentItem

**Status:** Implementado; aguardando validação e commit.

**Arquivo:**

- `src/components/AppointmentItem/AppointmentItem.tsx`

Atividades:

- Importação do AppointmentItem.css.
- Integração dos estilos ao componente.
- Preservação das Props tipadas.
- Preservação da exibição de horário e cliente.
- Preservação do callback onDelete.
- Manutenção dos atributos de acessibilidade.

Observações:

- O componente ainda precisa ser integrado à listagem.
- A exclusão ainda não foi testada na interface.
- A fidelidade visual ao Figma ainda não foi validada.

Validação:

- Compilação TypeScript.
- Build de produção.

### Etapa 09.4 — Componente PeriodSection

**Status:** Implementado; aguardando validação e commit.

**Arquivo:**

- `src/components/PeriodSection/PeriodSection.tsx`

Atividades:

- Criação do componente reutilizável PeriodSection.
- Definição de Props tipadas com TypeScript.
- Identificação dos períodos por meio do tipo Period.
- Exibição do título e intervalo de horários.
- Ordenação cronológica usando sort().
- Renderização dos agendamentos usando map().
- Integração com o componente AppointmentItem.
- Preservação do callback de exclusão.
- Exibição da mensagem obrigatória de estado vazio.
- Utilização de elementos semânticos e aria-labelledby.

Observações:

- O CSS do PeriodSection ainda será implementado.
- O componente ainda não está integrado à agenda.
- Os testes funcionais ainda estão pendentes.
- A fidelidade visual ao Figma ainda não foi validada.

Validação:

- Compilação TypeScript.
- Build de produção.

### Etapa 09.6 — Integração do CSS do PeriodSection

**Status:** Implementado; aguardando validação e commit.

**Arquivo:**

- `src/components/PeriodSection/PeriodSection.tsx`

Atividades:

- Importação do PeriodSection.css.
- Aplicação dos estilos aos blocos de períodos.
- Preservação das Props tipadas.
- Preservação da ordenação cronológica.
- Preservação da mensagem obrigatória de estado vazio.
- Manutenção do callback de exclusão.

Observações:

- O PeriodSection ainda precisa ser integrado à agenda.
- Os testes funcionais ainda estão pendentes.
- A fidelidade visual ao Figma ainda não foi validada.

Validação:

- Compilação TypeScript.
- Build de produção.

### Etapa 09.7 — Componente AppointmentList

**Status:** Implementado; aguardando validação e commit.

**Arquivo:**

- `src/components/AppointmentList/AppointmentList.tsx`

Atividades:

- Criação do componente AppointmentList.
- Integração com useAppointments e Context API.
- Filtragem dos agendamentos pela data selecionada.
- Agrupamento dos agendamentos por períodos.
- Utilização de useMemo para otimizar cálculos.
- Utilização de reduce() para contar agendamentos.
- Utilização de map() para renderizar os períodos.
- Integração com PeriodSection.
- Conexão do callback de exclusão.
- Exibição do total de agendamentos da data.

Observações:

- O CSS do AppointmentList ainda será implementado.
- O componente ainda não está integrado ao App.tsx.
- Cadastro, filtro e exclusão ainda precisam
  ser testados na interface.
- A fidelidade ao Figma ainda não foi validada.

Validação:

- Compilação TypeScript.
- Build de produção.

### Etapa 09.8 — Estilização do AppointmentList

**Status:** Implementado; aguardando validação e commit.

**Arquivo:**

- `src/components/AppointmentList/AppointmentList.css`

Atividades:

- Estilização da listagem de agendamentos.
- Criação dos estilos do resumo da agenda.
- Organização visual dos períodos.
- Definição de espaçamentos e cores.
- Implementação de responsividade para tablet e mobile.

Observações:

- CSS ainda precisa ser importado no AppointmentList.tsx.
- A listagem ainda não está integrada ao App.tsx.
- A fidelidade visual ao Figma ainda não foi validada.
- Os testes funcionais continuam pendentes.

Validação:

- Compilação TypeScript.
- Build de produção.
- Verificação de formatação do Git.

### Etapa 09.9 — Integração do CSS do AppointmentList

**Status:** Implementado; aguardando validação e commit.

**Arquivo:**

- `src/components/AppointmentList/AppointmentList.tsx`

Atividades:

- Importação do AppointmentList.css.
- Integração dos estilos à listagem.
- Preservação do Context API e do Hook useAppointments.
- Preservação da filtragem por data.
- Preservação do agrupamento por períodos.
- Preservação do cálculo de total com reduce().
- Preservação do callback de exclusão.

Observações:

- A listagem ainda precisa ser integrada ao App.tsx.
- Os testes funcionais completos ainda estão pendentes.
- A fidelidade visual ao Figma ainda não foi validada.

Validação:

- Compilação TypeScript.
- Build de produção.

### Etapa 09.10 — Integração da listagem ao App

**Status:** Implementado; aguardando validação funcional.

**Arquivo:**

- `src/App.tsx`

Atividades:

- Integração do AppointmentList à agenda.
- Substituição da mensagem provisória.
- Conexão visual entre formulário e listagem.
- Utilização do Context API para atualização dos dados.
- Disponibilização do filtro por data.
- Exibição de agendamentos por períodos.
- Disponibilização da exclusão individual.

Validações necessárias:

- Cadastro de agendamentos.
- Atualização imediata da agenda.
- Filtragem por data.
- Agrupamento em Manhã, Tarde e Noite.
- Ordenação cronológica.
- Exibição da mensagem obrigatória de estado vazio.
- Exclusão individual sem afetar outros registros.
- Validação de campos obrigatórios.
- Compilação TypeScript.
- Build de produção.

Observações:

- A fidelidade visual ao Figma ainda não foi validada.
- Testes automatizados com Playwright ainda pendentes.
- Persistência em localStorage não implementada,
  pois é opcional no enunciado.

### Etapa 11.1 — Identidade visual do HairDay

**Status:** Implementado; aguardando validação.

**Arquivo:**

- `src/index.css`

Atividades:

- Revisão visual da aplicação com base no Figma.
- Atualização da paleta global para dourado e grafite.
- Definição de variáveis CSS reutilizáveis.
- Padronização das cores de textos e bordas.
- Preservação dos estilos globais de acessibilidade.
- Manutenção da responsividade existente.

Observações:

- Os componentes ainda utilizam algumas cores fixas.
- A nova paleta será aplicada gradualmente.
- As cores ainda precisam ser conferidas no Style Guide.
- Nenhuma funcionalidade de agendamento foi removida.

Validação:

- Compilação TypeScript.
- Build de produção.
- Verificação visual da aplicação.

### Etapa 11.2 — Ajustes visuais do formulário

**Status:** Implementado; aguardando validação.

**Arquivo:**

- `src/components/AppointmentForm/AppointmentForm.css`

Atividades:

- Substituição dos detalhes roxos por dourado.
- Aplicação das variáveis CSS globais.
- Ajuste das cores e bordas dos campos.
- Refinamento dos botões de horários.
- Destaque dourado para o horário selecionado.
- Estilização dourada do botão AGENDAR.
- Ajuste de espaçamentos e tipografia.
- Preservação dos estados de foco e acessibilidade.
- Manutenção da responsividade.

Observações:

- Nenhuma funcionalidade foi removida.
- As cores são aproximações visuais do Figma.
- Ainda precisamos ajustar os demais componentes.
- A comparação visual final permanece pendente.

Validação:

- Compilação TypeScript.
- Build de produção.
- Verificação visual do formulário.

### Etapa 11.3 — Ajustes visuais da Sidebar

**Status:** Implementado; aguardando validação.

**Arquivo:**

- `src/components/ScheduleSidebar/ScheduleSidebar.css`

Atividades:

- Atualização do fundo para grafite.
- Aplicação das variáveis globais de cores.
- Ajuste da largura da Sidebar no desktop.
- Refinamento dos espaçamentos internos.
- Ajuste da tipografia do cabeçalho.
- Melhoria da responsividade para tablet e celular.
- Preservação dos estilos e funcionalidades existentes.

Observações:

- A logo HairDay ainda será implementada.
- Os ajustes utilizam medidas aproximadas do Figma.
- A comparação visual final ainda está pendente.
- Nenhuma funcionalidade foi removida.

Validação:

- Compilação TypeScript.
- Build de produção.
- Verificação visual em desktop e mobile.

### Próxima etapa

Ajustar o App.css para melhorar o alinhamento
da agenda e o posicionamento do filtro de data.
