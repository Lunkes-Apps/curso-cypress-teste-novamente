/// <reference types="cypress" />

it('deve preencher o formulário e enviar com sucesso',()=>{
    cy.get('[href="/formularios"]').click()
        .get('#nome-completoForm').type('Fulano do Teste')
        .get('#data-de-nascimentoForm').type('01021990')
        .get('#cpfForm').type(92335688854)
        .get('#celularForm').type(92992550565)
        .get('#emailForm').type('teste@teste.com')
        .get('#logradouroForm').type('Rua testada da silva')
        .get('#númeroForm').type('Rua testada da silva')
        .get('#complementoForm').type('Conjunto Testado')
        .get('#bairroForm').type('Bairro Sabará')
        .get('#cidadeForm').type('Porto Alegre')
        .get('#cepForm').type('91215600')
        .get('select').select('Amazonas (AM)')
        .get('[type="radio"]').check('casado')
        .get('[type="radio"]').check('superior incompleto')
        .get('[type="checkbox"]').check('Concordo com os termos de uso')
        .get('button').contains('Enviar').click()

        .get('p').contains('Estado Civil:').should('have.text','Estado Civil: casado')
        .get('p').contains('Nascimento:').should('have.text','Nascimento: 01/02/1990')


})

