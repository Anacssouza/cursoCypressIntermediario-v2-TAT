import { faker } from '@faker-js/faker'

const options = { env: { snapshotOnly: true } }

describe('Create Issue', options, () => {
  const issue = {       //dedicada pra criar a issue
    title: `issue-${faker.datatype.uuid()}`,
    description: faker.random.words(3),
    project: {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }
  }

  beforeEach(() => {   
    cy.api_deleteProjects()
    cy.login()  
    //cy.gui_createProject(issue.project)
    cy.api_createProject(issue.project)   //vai criar um projeto antes com os dados que vem do objeto issue -> project
  })

  it('successfully', () => {
    cy.gui_createIssue(issue) //chama o comando de criar issue e passa os dados do objeto issue criado antes

    cy.get('.issue-details')   // confere se na issue possui titulo e descrição pra verificar se foi criada mesmo
      .should('contain', issue.title)
      .and('contain', issue.description)
  })
})
