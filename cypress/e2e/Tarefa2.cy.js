///<reference types="cypress" />


describe("Teste da criação de registro, login, delete de registro e login denovo", () => {

  it("Teste login com sucesso", () => {
  
    let infos = criarUser();
  
    cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('#username').type(infos[0])
    cy.get('#password').type(infos[1])
    cy.get('.btn-primary').click()
    cy.get('.ng-binding > a').click();
    cy.get('.btn').click();                                              //Contain poderia ser para verificar se contem a palavra
    cy.get('#username').type(infos[0])
    cy.get('#password').type(infos[1])
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('have.text', 'Username or password is incorrect');
  });

})

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
