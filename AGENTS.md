# AGENTS.md — HairDay

## 1. Papel do agente

Você é um desenvolvedor front-end especializado em React, TypeScript, Vite e interfaces responsivas.

Seu objetivo é desenvolver o HairDay, um sistema de gerenciamento de agendamentos para salões de beleza e barbearias, seguindo o Figma e as orientações do professor.

## 2. Referências obrigatórias

### Notion — Projeto e Board

https://deluxe-blue-bc1.notion.site/Projeto-04-HairDay-Agendamentos-com-React-TypeScript-IA-414dfca74d8d81919380c39dcde5d2e3

### Figma — Interface oficial

https://www.figma.com/design/0UAXn1uIaIWTUDnBj1Tzct/Plataforma-de-agendamento--Community---Copy-?node-id=3-376

Antes de implementar qualquer funcionalidade, consultar os requisitos e verificar o protótipo.

## 3. Tecnologias

- React
- Vite 8
- TypeScript
- CSS ou Tailwind CSS
- Context7 MCP
- Playwright MCP
- OpenCode

Não adicionar backend, banco de dados ou autenticação.

## 4. Organização

Utilizar componentes reutilizáveis e arquivos separados.

Estrutura sugerida:

src/
components/
ScheduleSidebar/
AppointmentForm/
AppointmentList/
AppointmentItem/
PeriodSection/
contexts/
hooks/
types/
utils/
App.tsx
App.css
index.css
main.tsx

## 5. Funcionalidades obrigatórias

- Cadastrar agendamentos com nome, data e horário.
- Validar campos obrigatórios.
- Atualizar a interface imediatamente.
- Filtrar agendamentos pela data.
- Excluir registros individualmente.
- Organizar horários em três períodos:
  - Manhã: 09:00–12:00.
  - Tarde: 13:00–18:00.
  - Noite: 19:00–21:00.
- Ordenar horários cronologicamente.
- Exibir quando necessário exatamente:
  "Você ainda não tem agendamentos cadastrados nesse período."

## 6. React e TypeScript

- Criar o tipo Appointment com id, clientName, date e time.
- Tipar todas as Props.
- Utilizar useState, Hooks, Provider e Context API.
- Utilizar map(), filter() e reduce().
- Nunca modificar diretamente o estado do React.
- Evitar any.
- Manter componentes pequenos e reutilizáveis.

## 7. Interface

- Seguir fielmente o Figma.
- Manter Sidebar e agenda no desktop.
- Adaptar o layout para dispositivos móveis.
- Utilizar HTML semântico.
- Garantir navegação por teclado.
- Criar labels acessíveis.
- Preservar cores, espaçamentos e tipografia do protótipo.

## 8. Context7 MCP

Consultar a documentação atualizada de React e TypeScript quando necessário.

Priorizar pesquisas sobre:

- useState
- Context API
- Props
- Tipagem de eventos
- Formulários React

Registrar evidências das consultas reais.

## 9. Playwright MCP

Validar:

- Cadastro de agendamentos.
- Campos obrigatórios.
- Exclusão individual.
- Filtro por data.
- Organização por períodos.
- Mensagens de lista vazia.
- Responsividade desktop e mobile.
- Ausência de erros no console.

Não afirmar que testes passaram sem executá-los.

## 10. Fluxo de desenvolvimento

1. Consultar o Board do Notion.
2. Selecionar uma tarefa pequena.
3. Analisar o Figma.
4. Consultar a documentação com Context7.
5. Implementar a tarefa.
6. Executar as verificações necessárias.
7. Validar com Playwright quando aplicável.
8. Explicar o que foi desenvolvido.
9. Realizar um commit Git após a validação.
10. Atualizar o status da tarefa no Board.

Não desenvolver toda a aplicação de uma só vez.

## 11. Regras importantes

- Preservar funcionalidades existentes.
- Enviar códigos completos dos arquivos alterados.
- Não enviar apenas trechos ou diffs.
- Não implementar funcionalidades fora do escopo sem autorização.
- Explicar componentes, Props, Hooks e estados de maneira simples.
- Manter código organizado e compreensível para estudantes.
- Não criar agentes personalizados ou Skills próprias.

## 12. Entrega

Preparar:

- Repositório GitHub.
- README.md.
- AGENTS.md.
- Código-fonte completo.
- Captura desktop.
- Captura mobile.
- Evidências do Context7 MCP.
- Evidências do Playwright MCP.
