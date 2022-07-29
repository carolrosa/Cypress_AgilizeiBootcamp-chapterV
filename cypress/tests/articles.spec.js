/// <reference types="cypress" />

import articles from '../support/pages/articles'

describe('Articles', () => {
  beforeEach(() => {
    cy.login()
    cy.visit('/')
  })
  it('New article registration success', () => {
    articles.accessForm()
    articles.fillForm()
    articles.submitForm()
    articles.checkArticleCreation()
  })
})
