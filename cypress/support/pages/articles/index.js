const el = require('./elements').ELEMENTS

const articleName = 'Automation test using Cypress'

class Articles {
  accessForm () {
    cy.get(el.linkNewArticle).click()
  }

  fillForm () {
    cy.get(el.inputTitle).type(articleName)
    cy.get(el.inputDescription).type('Testing automation in Agilizei Bootcamp')
    cy.get(el.inputBody).type('How to do an end-to-end test using Cypress')
    cy.get(el.inputTag).type('cypress')
  }

  submitForm () {
    cy.contains('button', 'Publish Article').click()
  }

  checkArticleCreation () {
    cy.get('h1').should('have.text', articleName)
  }
}

export default new Articles()
