///<reference types="cypress" />
import '@4tw/cypress-drag-drop';


// Teste 1 de adicionar elementos
it("Add elements", () => {
  // Visita o site
  cy.visit('http://the-internet.herokuapp.com');

  // Espera que o elemento exista antes de clicar, para evitar problemas de carregamento
  cy.contains('Add/Remove Elements').click();

  // Aguarda até que a página de "Add/Remove Elements" carregue e o botão "Add Element" esteja visível
  cy.get('button').contains('Add Element', { timeout: 10000 }).should('be.visible').click();

  // Opcional: verificar se o elemento foi adicionado
  cy.get('.added-manually').should('exist');
});

// Teste 2 de adicionar elementos multiplos

it("Teste de adicionar varios elementos", () => {
  // Visita o site
  cy.visit('http://the-internet.herokuapp.com');

  // Tenta clicar no link "Add/Remove Elements" (isso passa normalmente)
  cy.contains("Add/Remove Elements").click();

  // Tenta clicar no botão "Add Element" duas vezes e depois procura por dois elementos adicionais (isso deve falhar)
  cy.get('button').contains('Add Element').click();
  cy.get('button').contains('Add Element').click();
  cy.get('button').contains('Add Element').click();
  cy.get('button').contains('Add Element').click();
  cy.get('button').contains('Add Element').click();
  
  // Falha proposital: verifica se dois elementos foram adicionados (quando apenas um foi)
  cy.get('#elements').find('.added-manually').should('have.length', 5);
});


// Teste 3 de drag and drop fail
// Tive até que usar biblioteca diferente para fazer o drag and drop
it("Teste de erro no drag and drop", () => {
  // Visita o site e navega até a seção de Drag and Drop
  cy.visit('http://the-internet.herokuapp.com');
  cy.contains('Drag and Drop').click();

  // Usa o plugin para fazer drag apenas
  cy.get('#column-a').drag('#column-b');

  // Verificação de erro esperado: Espera que `#column-a` não contenha o texto "B"
  cy.get('#column-a').should('not.contain.text', 'B');
});


// Teste 4 Disappearing Elements to home

it("Disappearing Elements and backing home", () => {
  // Visita o site e navega até a seção de Drag and Drop
  cy.visit('http://the-internet.herokuapp.com');
  cy.contains('Disappearing Elements').click();
  // Clica pra voltar para a home
  cy.get(':nth-child(1) > a').click();

  // Verifica se a home foi encontrada
  cy.get('.heading').should('have.text', 'Welcome to the-internet');

});

// Teste 5 erro ao achar portifolio
it("Disappearing Elements and backing home", () => {
  // Visita o site e navega até a seção de Drag and Drop
  cy.visit('http://the-internet.herokuapp.com');
  cy.contains('Disappearing Elements').click();

  // Seleciona a opção de Portfolio
  cy.get(':nth-child(4) > a').click();
  
  // Verifica se a página de Portfolio não foi encontrada
  cy.get('h1').should('have.text', 'Not Found');

});

//teste 6 Dropdown
it("Seleciona a primeira opção no dropdown e verifica o texto", () => {
  // Visita o site e navega até a seção de Dropdown
  cy.visit('http://the-internet.herokuapp.com');
  cy.contains('Dropdown').click();

  // Seleciona a primeira opção (índice 1, pois o índice 0 geralmente é a opção padrão 'Escolha uma opção')
  cy.get('#dropdown').select('Option 1');

  // Verifica se a opção selecionada é a 'Option 1'
  cy.get('#dropdown').should('have.value', '1');
});
