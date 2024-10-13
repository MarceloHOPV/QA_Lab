///<reference types="cypress" />

describe("Teste da criação de registro e login", () => {
  
  it("Teste criação de usuario com sucesso", () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get(cy.get('.btn-link').click())
    cy.get('#firstName').type('Vitinho')
    cy.get('#Text1').type('Vitinho')
    cy.get('#username').type('Vitinho')
    cy.get('#password').type('Vitinho')
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('have.text', 'Registration successful')

  });

  it("Teste criação de usuario sem sucesso", () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type('Vitinho')
    cy.get('#Text1').type('Vitinho')
    cy.get('#username').type('Vitinho')
    cy.get('.btn-primary').should('be.disabled')

  });

it("Teste login com sucesso", () => {
  
  let infos = criarUser();

  cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login')
  cy.get('#username').type(infos[0])
  cy.get('#password').type(infos[1])
  cy.get('.btn-primary').click()
  cy.get('div.ng-scope > :nth-child(2)').should('have.text', 'You\'re logged in!!')
                                                //Contain poderia ser para verificar se contem a palavra

});

function criarUser(){
  let hora = new Date().getHours().toString();
  let minuto = new Date().getMinutes().toString();
  let segundo = new Date().getSeconds().toString();
  let id = hora + minuto + segundo + "id";
  let senha = hora + minuto + segundo + "senha";
  let infos = [id, senha];

  cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login');
  cy.get('.btn-link').click();
  cy.get('#firstName').type(id);
  cy.get('#Text1').type(id);
  cy.get('#username').type(id);
  cy.get('#password').type(senha);
  cy.get('.btn-primary').click();
  cy.get('.ng-binding').should('have.text', 'Registration successful');
  return infos;
  }
});