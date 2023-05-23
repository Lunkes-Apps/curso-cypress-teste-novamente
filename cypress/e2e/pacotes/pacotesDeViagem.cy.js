before(()=>{
    cy.visit('https://area-de-teste.vercel.app/')
})

beforeEach(() => {
    cy.get('[href="/pacotes"]').click()
})

describe('Testes do Pacote de Viagens', () => {

    it('deve encontrar o valor do card de Porto Alegre', () => {
        cy.get('[data-pacote="Porto Alegre"] .CardePacote_titulo___OTgk :nth-child(3)')
            .should('have.text', 'R$ 200,56')
    })

    it('deve encontrar o valor do card de Belém', () => {
        cy.get('[data-pacote="Belém"] .CardePacote_titulo___OTgk :nth-child(3)')
            .should('have.text', 'R$ 100,56')
    })

})
