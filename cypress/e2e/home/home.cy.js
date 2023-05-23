/// <reference types="cypress" />


before(()=>{
    cy.log('before', 'teste do home')
})

describe('página home', () => {
    beforeEach(() => {
        cy.visit('https://area-de-teste.vercel.app/pacotes')
            .get('[data-pacote="Porto Alegre"] .CardePacote_titulo___OTgk :nth-child(3)', { log: true, timeout: 3500 })
            .as('valorPortoAlegre')
    })

    it('deve encontrar o valor do card de Porto Alegre', () => {
        cy.get('@valorPortoAlegre')
            .should('have.text', 'R$ 200,56')
    })

    it('deve encontrar o valor do card de Belém', () => {
        cy.get('[data-pacote="Belém"]')
            .find('.CardePacote_titulo___OTgk :nth-child(3)')
            .should('have.text', 'R$ 100,56')
    })

})