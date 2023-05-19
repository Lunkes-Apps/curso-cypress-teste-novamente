/// <reference types="cypress" />

describe('página home',()=>{
    it('',()=>{
        cy.visit('https://area-de-teste.vercel.app/')
            .get('#titulo-home aaasdasd')
            .should('have.text','Seja bem vindo à Área de Testes')
    })
})