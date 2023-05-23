/// <reference types="cypress" />

before(() => {
    cy.log('before', 'executado antes de todos os testes')
    cy.visit('https://area-de-teste.vercel.app/')
})

beforeEach(() => {
    cy.log('beforeEach', 'executado antes de cada teste')
    cy.get('[href="/pacotes"]').click()
})

afterEach(() => {
    cy.log('afterEach', 'executado depois de cada teste')
})

after(() => {
    cy.log('after', 'executado depois de todos os testes')
})

describe('Suíte de testes', ()=>{
    it('Teste A', ()=>{
        cy.log('Executando teste A')
    })

    it('Teste B', ()=>{
        cy.log('Executando teste B')
    })
    
    it('deve encontrar o valor do card de Porto Alegre', () => {
        cy.get('[data-pacote="Porto Alegre"] .CardePacote_titulo___OTgk :nth-child(3)')
            .should('have.text', 'R$ 200,56')
            .get('[href="/"]').eq(0).click()
    })
})

