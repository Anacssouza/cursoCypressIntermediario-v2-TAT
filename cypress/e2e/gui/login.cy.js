describe('Login', () => {
  it('successfully', () => {
    cy.login()   // o comando ta vindo de support/gui_commands.js
 
    cy.get('.qa-user-avatar').should('be.visible')
  })

})