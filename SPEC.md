# SPEC.md — HairDay

## 1. Identificação do projeto

**Projeto:** HairDay — Sistema de Agendamentos  
**Disciplina:** Single Page Application (SPA)  
**Tecnologias:** React, Vite 8, TypeScript e CSS  
**Biblioteca de ícones:** Lucide React  
**Ferramentas:** ChatGPT, Figma, Context7 MCP e Playwright MCP  
**Repositório:** https://github.com/wanessags/HairDay  
**Status:** Em desenvolvimento — fase de testes e revisão final

---

## 2. Objetivo

Desenvolver uma aplicação web responsiva para gerenciamento de agendamentos de salões de beleza e barbearias, reproduzindo a interface disponibilizada no Figma.

A aplicação permite cadastrar, visualizar, filtrar e excluir agendamentos, organizando os atendimentos por data e período.

O projeto aplica conceitos de:

- Componentização e reutilização de componentes.
- Props tipadas com TypeScript.
- Hooks do React.
- Gerenciamento de estado com `useState`.
- Context API e Provider.
- Manipulação de arrays com `map()`, `filter()` e `reduce()`.
- Validação de formulários.
- Desenvolvimento assistido por Inteligência Artificial.
- Responsividade e acessibilidade.

O desenvolvimento é realizado por etapas, mantendo documentação, testes e commits organizados.

---

## 3. Referências oficiais

### Notion — Enunciado e Board

https://deluxe-blue-bc1.notion.site/Projeto-04-HairDay-Agendamentos-com-React-TypeScript-IA-414dfca74d8d81919380c39dcde5d2e3

### Figma — Protótipo oficial

https://www.figma.com/design/0UAXn1uIaIWTUDnBj1Tzct/Plataforma-de-agendamento--Community---Copy-?node-id=3-376

### GitHub

https://github.com/wanessags/HairDay

---

## 4. Tecnologias utilizadas

| Tecnologia     | Finalidade                              |
| -------------- | --------------------------------------- |
| React          | Desenvolvimento da interface            |
| Vite 8         | Ambiente de desenvolvimento e build     |
| TypeScript     | Tipagem estática                        |
| CSS            | Estilização e responsividade            |
| Lucide React   | Ícones da aplicação                     |
| Context API    | Compartilhamento de estado              |
| React Hooks    | Gerenciamento de estado e comportamento |
| Git            | Versionamento                           |
| GitHub         | Hospedagem do código-fonte              |
| ChatGPT        | Desenvolvimento assistido por IA        |
| Figma          | Referência de design                    |
| Context7 MCP   | Consulta de documentação                |
| Playwright MCP | Testes automatizados                    |

**Observação:** Context7 MCP e Playwright MCP fazem parte das ferramentas previstas no projeto, mas suas utilizações ainda precisam ser executadas e documentadas com evidências.

---

## 5. Requisitos funcionais

### RF01 — Cadastro de agendamentos

**Status:** Implementado e aprovado em teste manual.

A aplicação deve permitir cadastrar agendamentos informando:

- Nome do cliente.
- Data do atendimento.
- Horário do atendimento.

Após o cadastro, a agenda deve ser atualizada imediatamente, sem recarregar a página.

### RF02 — Validação do formulário

**Status:** Parcialmente validado.

O formulário deve:

- Impedir cadastro sem nome do cliente.
- Impedir cadastro sem horário.
- Impedir cadastro sem data.
- Apresentar mensagens claras de erro.
- Exibir confirmação após cadastro válido.

**Testes aprovados:** nome obrigatório e horário obrigatório.

**Pendente:** teste de data obrigatória e revisão de datas inválidas.

### RF03 — Listagem de agendamentos

**Status:** Implementado e validado parcialmente.

Cada agendamento deve apresentar:

- Horário.
- Nome do cliente.
- Ícone de lixeira para exclusão.

Os registros devem aparecer na data e no período correspondentes.

### RF04 — Filtro por data

**Status:** Implementado e aprovado em teste manual.

O calendário da agenda permite selecionar uma data e visualizar somente os agendamentos correspondentes.

Alterar a data não deve excluir nem modificar os registros.

### RF05 — Agrupamento por períodos

**Status:** Implementado e aprovado em teste manual.

Os agendamentos devem ser organizados em:

| Período | Horários       |
| ------- | -------------- |
| Manhã   | 09:00 às 12:00 |
| Tarde   | 13:00 às 18:00 |
| Noite   | 19:00 às 21:00 |

Os registros devem aparecer em ordem cronológica.

**Pendente:** teste específico de ordenação com múltiplos registros fora de ordem.

### RF06 — Exclusão de agendamentos

**Status:** Implementado e aprovado em teste manual.

O sistema deve excluir somente o agendamento selecionado pelo botão de lixeira.

A exclusão deve atualizar imediatamente a interface.

### RF07 — Estados vazios

**Status:** Implementado e observado no teste manual de exclusão.

Quando um período não possuir agendamentos, deve aparecer exatamente:

> Você ainda não tem agendamentos cadastrados nesse período.

### RF08 — Gerenciamento em memória

**Status:** Implementado.

Os agendamentos são armazenados no estado do React durante a utilização da aplicação.

Não é necessário backend, banco de dados ou autenticação.

Os dados não possuem persistência obrigatória após recarregar a página.

---

## 6. Requisitos de interface

A interface deve reproduzir visualmente o Figma do HairDay.

### Sidebar

- Identidade visual HairDay.
- Ícone de tesoura.
- Título de agendamento.
- Descrição do formulário.
- Campo de data com ícone.
- Horários disponíveis.
- Campo Cliente com ícone.
- Botão AGENDAR.

### Agenda

- Título "Sua agenda".
- Descrição dos atendimentos.
- Filtro de data.
- Seção Manhã.
- Seção Tarde.
- Seção Noite.
- Ícones correspondentes aos períodos.
- Linhas de agendamentos.
- Ícones de exclusão.
- Mensagens de períodos vazios.

### Identidade visual

- Fundo em tons de grafite.
- Destaques dourados.
- Bordas discretas.
- Tipografia legível.
- Ícones Lucide React.
- Layout organizado e responsivo.

**Situação:** interface desktop visualmente revisada com capturas de tela. Fidelidade exata ao Figma ainda não confirmada.

### Responsividade

A interface deve funcionar em:

- Desktop.
- Notebook.
- Tablet.
- Celular.

No desktop, a Sidebar aparece à esquerda e a agenda à direita.

Em dispositivos menores, o layout deve se reorganizar verticalmente.

**Status:** regras responsivas implementadas; testes visuais mobile pendentes.

---

## 7. Modelo de dados TypeScript

Cada agendamento utiliza a estrutura:

```typescript
export type Appointment = {
  id: string;
  clientName: string;
  date: string;
  time: string;
};
```

Tipos auxiliares:

```typescript
export type Period = "morning" | "afternoon" | "evening";

export type AppointmentFormData = Omit<Appointment, "id">;

export type AppointmentsByPeriod = Record<Period, Appointment[]>;
```

### Descrição

- `id`: identificador único do agendamento.
- `clientName`: nome do cliente.
- `date`: data do atendimento.
- `time`: horário selecionado.
- `Period`: período correspondente.
- `AppointmentFormData`: dados utilizados no cadastro.
- `AppointmentsByPeriod`: agrupamento dos atendimentos.

---

## 8. Estrutura do projeto

```text
hairday/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AppointmentForm/
│   │   │   ├── AppointmentForm.tsx
│   │   │   └── AppointmentForm.css
│   │   ├── AppointmentItem/
│   │   │   ├── AppointmentItem.tsx
│   │   │   └── AppointmentItem.css
│   │   ├── AppointmentList/
│   │   │   ├── AppointmentList.tsx
│   │   │   └── AppointmentList.css
│   │   ├── DateFilter/
│   │   │   ├── DateFilter.tsx
│   │   │   └── DateFilter.css
│   │   ├── PeriodSection/
│   │   │   ├── PeriodSection.tsx
│   │   │   └── PeriodSection.css
│   │   └── ScheduleSidebar/
│   │       ├── ScheduleSidebar.tsx
│   │       └── ScheduleSidebar.css
│   ├── constants/
│   │   └── schedule.ts
│   ├── contexts/
│   │   └── AppointmentContext.tsx
│   ├── hooks/
│   │   └── useAppointments.ts
│   ├── types/
│   │   └── appointment.ts
│   ├── utils/
│   │   └── appointmentUtils.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── AGENTS.md
├── SPEC.md
├── README.md
├── package.json
├── package-lock.json
├── index.html
└── vite.config.ts
```

---

## 9. Componentização

### ScheduleSidebar

Responsável pela área lateral da aplicação.

Contém a identidade HairDay, o título e o formulário recebido por `children`.

Utiliza Props tipadas com `ReactNode`.

### AppointmentForm

Responsável pelo cadastro dos agendamentos.

Utiliza:

- `useState`.
- `useAppointments`.
- Eventos de formulário.
- Validação de campos.
- Seleção de horários.
- Mensagens de erro e sucesso.

### AppointmentItem

Representa um agendamento individual.

Recebe Props tipadas e utiliza o callback `onDelete` para solicitar a exclusão pelo ID.

### AppointmentList

Responsável pela listagem dos agendamentos da data selecionada.

Utiliza `useMemo`, Context API, funções utilitárias e renderização de períodos com `map()`.

### PeriodSection

Responsável pela apresentação de um período.

Exibe:

- Ícone.
- Título.
- Intervalo de horários.
- Lista de agendamentos.
- Mensagem de estado vazio.

### DateFilter

Responsável pelo calendário da agenda.

Utiliza o contexto para acessar e modificar a data selecionada.

---

## 10. Gerenciamento de estado

O gerenciamento de estado utiliza:

- `useState`.
- `useContext`.
- `useCallback`.
- `useMemo`.
- Context API.
- AppointmentProvider.
- Hook personalizado `useAppointments`.

### AppointmentContext

Centraliza:

- Lista de agendamentos.
- Data selecionada.
- Função de cadastro.
- Função de exclusão.
- Atualização da data.

### AppointmentProvider

Disponibiliza os dados aos componentes da aplicação.

O Provider está integrado ao `main.tsx`.

### useAppointments

Hook responsável por consumir o contexto.

Permite aos componentes acessar os dados sem duplicar o gerenciamento de estado.

---

## 11. Manipulação de arrays

### map()

Utilizado para renderizar:

- Horários disponíveis.
- Períodos da agenda.
- Agendamentos individuais.

### filter()

Utilizado para:

- Filtrar agendamentos por data.
- Remover agendamentos pelo identificador.

### reduce()

Utilizado para agrupar os agendamentos por período.

### sort()

Utilizado para organizar os registros cronologicamente.

### flatMap()

Utilizado para reunir os horários disponíveis dos três períodos.

---

## 12. Histórico de desenvolvimento

### Etapa 01 — Preparação do projeto

**Status:** Implementado.

- Criação do projeto React com TypeScript e Vite 8.
- Inicialização do Git.
- Configuração do repositório GitHub.
- Criação do AGENTS.md.
- Preparação do SPEC.md.
- Criação da estrutura de pastas.

### Etapa 02 — Tipos TypeScript

**Status:** Implementado.

- Criação de Appointment.
- Definição de Period.
- Criação de AppointmentFormData.
- Criação de AppointmentsByPeriod.

### Etapa 03 — Horários disponíveis

**Status:** Implementado.

- Configuração dos três períodos.
- Definição de 13 horários.
- Criação de SCHEDULE_PERIODS.
- Criação de AVAILABLE_TIMES.

### Etapa 04 — Funções utilitárias

**Status:** Implementado.

- Filtragem por data.
- Identificação do período.
- Ordenação cronológica.
- Agrupamento por período.
- Preservação do array original durante a ordenação.

### Etapa 05 — Context API e Hooks

**Status:** Implementado.

- Criação do AppointmentContext.
- Implementação do AppointmentProvider.
- Criação de useAppointments.
- Integração ao main.tsx.
- Cadastro e exclusão utilizando estado React.

### Etapa 06 — Estrutura visual

**Status:** Implementado.

- Criação da ScheduleSidebar.
- Criação do layout principal.
- Configuração dos estilos globais.
- Estilização da Sidebar.
- Implementação das regras responsivas iniciais.

### Etapa 07 — Formulário

**Status:** Implementado.

- Criação do AppointmentForm.
- Campos de nome e data.
- Seleção de horários.
- Validação de campos obrigatórios.
- Mensagens de erro e sucesso.
- Integração ao Context API.
- Estilização do formulário.

### Etapa 08 — Filtro de data

**Status:** Implementado.

- Criação do DateFilter.
- Integração com Context API.
- Estilização do calendário.
- Posicionamento do filtro na agenda.
- Atualização dinâmica da data selecionada.

### Etapa 09 — Listagem de agendamentos

**Status:** Implementado.

- Criação do AppointmentItem.
- Criação do PeriodSection.
- Criação do AppointmentList.
- Exibição de registros por período.
- Implementação das mensagens de estado vazio.
- Integração da exclusão.
- Integração da listagem ao App.tsx.

### Etapa 10 — Integração funcional

**Status:** Implementado; verificações complementares pendentes.

- Integração entre formulário e listagem.
- Atualização imediata dos agendamentos.
- Integração do filtro por data.
- Exclusão individual pelo Context API.

### Etapa 11 — Ajustes visuais conforme o Figma

**Status:** Implementado parcialmente; revisão final pendente.

#### Etapas 11.1 a 11.5

- Atualização da identidade visual para dourado e grafite.
- Ajustes do formulário e da Sidebar.
- Reorganização da agenda.
- Correção dos cards de períodos.
- Ajustes responsivos.

#### Etapas 11.6 a 11.10

- Instalação do Lucide React.
- Inclusão dos ícones dos períodos.
- Inclusão do ícone de exclusão.
- Inclusão de ícones no formulário.
- Ajustes visuais do seletor de data.

#### Etapa 11.11 — Correção do cabeçalho

- Identificação do CSS antigo.
- Atualização efetiva do App.css.
- Implementação do CSS Grid.
- Correção do alinhamento do filtro no desktop.

#### Etapas 11.12 e 11.13 — Marca HairDay

- Inclusão do ícone de tesoura.
- Inclusão do nome HairDay.
- Estilização e posicionamento da marca.
- Ajustes de espaçamento na Sidebar.

#### Etapa 11.14 — Revisão visual

- Conferência da tela desktop por captura.
- Verificação de Sidebar, ícones e cards.
- Identificação de diferenças restantes em relação ao Figma.

#### Etapa 11.15 — Refinamento da agenda

- Remoção do resumo visual acima dos períodos.
- Preservação das mensagens de estado vazio.
- Manutenção da filtragem e da exclusão.

---

## 13. Etapa 12 — Testes funcionais manuais

**Status:** 6 testes manuais aprovados conforme confirmação durante o desenvolvimento.

**Data do registro:** 12/11/2026.

**Ambiente:** HairDay executado no navegador, com React, TypeScript e Vite.

### Teste 01 — Cadastro de agendamento

**Resultado: APROVADO**

Dados utilizados:

- Cliente: Maria Silva.
- Data: 12/11/2026.
- Horário: 09:00.

Verificações:

- Cadastro realizado.
- Atualização imediata da agenda.
- Cliente exibida no período Manhã.
- Horário apresentado corretamente.

### Teste 02 — Exclusão de agendamento

**Resultado: APROVADO**

Verificações:

- Exclusão de Maria Silva pelo botão de lixeira.
- Remoção imediata da listagem.
- Exibição da mensagem de período vazio.

### Teste 03 — Filtro por data

**Resultado: APROVADO**

Dados utilizados:

- Cliente: Ana Oliveira.
- Data: 13/11/2026.
- Horário: 14:00.

Verificações:

- Agendamento apresentado em 13/11/2026.
- Alteração do filtro para 14/11/2026.
- Agendamento ocultado na outra data.
- Retorno para 13/11/2026.
- Agendamento apresentado novamente.

### Teste 04 — Nome obrigatório

**Resultado: APROVADO**

Procedimento:

- Tentativa de cadastro sem preencher o nome.

Verificações:

- Mensagem "Informe o nome do cliente." exibida.
- Cadastro impedido.

### Teste 05 — Horário obrigatório

**Resultado: APROVADO**

Procedimento:

- Cliente: Carlos Santos.
- Data: 13/11/2026.
- Horário não selecionado.

Verificações:

- Mensagem "Selecione um horário." exibida.
- Cadastro impedido.

### Teste 06 — Agrupamento por períodos

**Resultado: APROVADO**

Dados utilizados:

| Cliente      | Horário | Período |
| ------------ | ------- | ------- |
| João Silva   | 10:00   | Manhã   |
| Beatriz Lima | 16:00   | Tarde   |
| Pedro Costa  | 20:00   | Noite   |
| Ana Oliveira | 14:00   | Tarde   |

Verificações:

- Registros exibidos nos períodos correspondentes.
- Agendamento de Ana Oliveira preservado.
- Separação visual correta entre Manhã, Tarde e Noite.

**Observação:** os seis resultados acima são testes manuais relatados durante o desenvolvimento. Não representam testes automatizados com Playwright.

---

## 14. Checklist geral de desenvolvimento

### Estrutura e tecnologia

- [x] Criar projeto React + TypeScript com Vite 8.
- [x] Criar repositório Git.
- [x] Conectar ao GitHub.
- [x] Criar AGENTS.md.
- [x] Criar SPEC.md.
- [x] Criar estrutura de componentes.
- [x] Criar tipos TypeScript.
- [x] Configurar horários e períodos.
- [x] Implementar funções utilitárias.

### React e TypeScript

- [x] Implementar useState.
- [x] Implementar Context API.
- [x] Implementar AppointmentProvider.
- [x] Criar Hook useAppointments.
- [x] Utilizar Props tipadas.
- [x] Utilizar map().
- [x] Utilizar filter().
- [x] Utilizar reduce().
- [x] Implementar ordenação cronológica no código.

### Funcionalidades

- [x] Implementar cadastro.
- [x] Implementar listagem.
- [x] Implementar filtro por data.
- [x] Implementar agrupamento por períodos.
- [x] Implementar exclusão.
- [x] Implementar mensagens de período vazio.
- [x] Validar cadastro manualmente.
- [x] Validar exclusão manualmente.
- [x] Validar filtro por data manualmente.
- [x] Validar nome obrigatório.
- [x] Validar horário obrigatório.
- [x] Validar agrupamento por períodos.
- [ ] Testar data obrigatória.
- [ ] Testar datas inválidas e restrições.
- [ ] Testar ordenação com vários agendamentos.
- [ ] Confirmar preservação de outros registros após exclusão.

### Interface

- [x] Criar Sidebar.
- [x] Criar formulário.
- [x] Criar área da agenda.
- [x] Criar cards de períodos.
- [x] Aplicar identidade dourada e grafite.
- [x] Adicionar ícones Lucide React.
- [x] Adicionar marca HairDay.
- [x] Posicionar calendário à direita no desktop.
- [x] Implementar regras responsivas.
- [ ] Validar versão mobile visualmente.
- [ ] Conferir fidelidade final ao Figma.
- [ ] Revisar acessibilidade.

### Ferramentas e testes

- [x] Utilizar ChatGPT no desenvolvimento.
- [x] Realizar testes manuais.
- [ ] Registrar consulta real ao Context7 MCP.
- [ ] Executar testes com Playwright MCP.
- [ ] Salvar evidências das ferramentas.
- [ ] Conferir erros do console.
- [ ] Executar revisão final do build.

### Entrega

- [ ] Finalizar README.md.
- [ ] Revisar AGENTS.md.
- [ ] Finalizar SPEC.md.
- [ ] Capturar tela desktop final.
- [ ] Capturar tela mobile final.
- [ ] Confirmar histórico de commits.
- [ ] Conferir repositório GitHub.
- [ ] Enviar link e evidências pelo Blackboard.

---

## 15. Testes automatizados planejados

Os testes devem ser executados com Playwright MCP.

### Cenários previstos

**CT01 — Inicialização**

Verificar se a aplicação abre sem erros.

**CT02 — Cadastro válido**

Cadastrar cliente com nome, data e horário e verificar atualização imediata.

**CT03 — Nome obrigatório**

Verificar se um nome vazio impede o cadastro.

**CT04 — Horário obrigatório**

Verificar se um horário não selecionado impede o cadastro.

**CT05 — Data obrigatória**

Verificar se a ausência de data impede o cadastro.

**CT06 — Filtro por data**

Verificar se somente os agendamentos do dia selecionado aparecem.

**CT07 — Agrupamento por períodos**

Verificar se os registros aparecem nos períodos corretos.

**CT08 — Ordenação cronológica**

Cadastrar registros fora de ordem e verificar a apresentação cronológica.

**CT09 — Exclusão individual**

Excluir um registro e verificar que os demais permanecem.

**CT10 — Estados vazios**

Verificar a mensagem obrigatória nos períodos sem agendamentos.

**CT11 — Responsividade**

Validar a aplicação em viewport desktop e mobile.

**CT12 — Console do navegador**

Verificar a ausência de erros durante os fluxos principais.

**Status:** planejamento concluído; execução automatizada pendente.

Nenhum teste automatizado deve ser considerado aprovado antes de sua execução real.

---

## 16. Acessibilidade

### Recursos implementados

- Elementos HTML semânticos.
- Labels associados aos campos.
- Descrições acessíveis para botões de exclusão.
- Estados de foco visíveis.
- Atributos `aria-label`.
- Uso de `aria-invalid` nas validações.
- Mensagens de erro com `role="alert"`.
- Mensagens de sucesso com `role="status"`.
- Suporte à preferência por movimento reduzido.
- Botões de horários com `aria-pressed`.

### Validações pendentes

- [ ] Testar navegação completa por teclado.
- [ ] Verificar contraste de cores.
- [ ] Testar mensagens com leitor de tela.
- [ ] Verificar nomes acessíveis dos controles.
- [ ] Conferir responsividade sem rolagem horizontal.

---

## 17. Funcionalidades opcionais

As funcionalidades abaixo não fazem parte do escopo mínimo obrigatório:

- Persistência em localStorage.
- Bloqueio de horários duplicados.
- Personalização adicional da identidade visual.

Sua implementação poderá ser avaliada após a conclusão dos requisitos obrigatórios.

---

## 18. Regras de desenvolvimento

Durante a construção do HairDay, seguir:

1. Desenvolver um arquivo de código por vez.
2. Enviar arquivos completos.
3. Preservar funcionalidades já implementadas.
4. Manter código simples, organizado e tipado.
5. Atualizar SPEC.md em cada etapa.
6. Executar as verificações adequadas antes dos commits.
7. Criar commits com mensagens descritivas.
8. Enviar alterações ao GitHub após validação.
9. Não afirmar que testes passaram sem execução.
10. Seguir os requisitos do professor e o Board do Notion.
11. Preservar a acessibilidade e a responsividade.
12. Não adicionar backend ou funcionalidades desnecessárias.

---

## 19. Pendências para finalização

### Prioridade 1 — Validação funcional

- Testar data obrigatória.
- Verificar comportamento de datas inválidas.
- Confirmar ordenação cronológica.
- Revisar exclusão com múltiplos registros.

### Prioridade 2 — Interface

- Validar a versão mobile.
- Comparar os últimos detalhes com o Figma.
- Revisar acessibilidade.

### Prioridade 3 — Ferramentas

- Consultar a documentação utilizando Context7 MCP.
- Executar testes automatizados com Playwright MCP.
- Registrar evidências reais das duas ferramentas.

### Prioridade 4 — Documentação e entrega

- Finalizar README.md.
- Revisar AGENTS.md.
- Atualizar SPEC.md após os testes restantes.
- Capturar telas desktop e mobile.
- Conferir repositório e commits.
- Preparar a entrega no Blackboard.

---

## 20. Situação atual

**Última etapa registrada:** Etapa 12 — Testes funcionais manuais.

**Resultados conhecidos:**

- Seis testes manuais aprovados conforme confirmação durante o desenvolvimento.
- Estrutura principal da aplicação implementada.
- Interface desktop revisada visualmente.
- Cadastro, filtro e exclusão operacionais nos cenários manuais testados.
- Context API, Hooks, Props e TypeScript aplicados.

**Ainda pendente:**

- Testes automatizados com Playwright.
- Evidências de Context7 MCP.
- Revisão mobile e acessibilidade.
- Testes funcionais complementares.
- Finalização do README e documentação de entrega.

### Próxima etapa — 12.8

Executar o teste de data obrigatória, registrar o resultado real e continuar a validação do HairDay antes da entrega final.

---

**HairDay — Projeto 04 | Single Page Application (SPA)**

**Documentação consolidada em 12/11/2026.**
