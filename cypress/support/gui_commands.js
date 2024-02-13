Cypress.Commands.add('login', (  //criou um comando
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password'),
    ) => {
    const login = () => {
      cy.visit('/users/sign_in')
  
      cy.get("[data-qa-selector='login_field']").type(user)
      cy.get("[data-qa-selector='password_field']").type(password, { log: false })
      cy.get("[data-qa-selector='sign_in_button']").click()
    }
  
    login()
})

Cypress.Commands.add('logout', () => {
    const logout = () => {

    cy.get("[data-qa-selector='user_menu']").click()
    cy.contains("Sign Out").click()

    }

    logout()

})

Cypress.Commands.add('gui_createProject', project => {
    cy.visit('/projects/new')

    cy.get('#project_name').type(project.name)
    cy.get('#project_description').type(project.description)
    cy.get('.qa-initialize-with-readme-checkbox').check()
    cy.contains('Create project').click()
})