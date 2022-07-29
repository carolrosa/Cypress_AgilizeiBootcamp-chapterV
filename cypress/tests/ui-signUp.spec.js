/// <reference types="cypress" />

describe('Register', () => {
  it('Success register', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'
    }, {
      statusCode: 200,
      fixture: 'success-register'
    }).as('postUsers')

    cy.visit('register')

    cy.get('[placeholder=Username]').type('Name')
    cy.get('[placeholder=Email]').type('mail@mail.com.br')
    cy.get('[placeholder=Password]').type('123456')
    cy.get('button.btn-primary').click()

    cy.contains('No articles are here... yet.').should('be.visible')
  })

  it('Attempt to register an existing user', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'
    }, {
      statusCode: 422,
      fixture: 'register-existingUser'
    }).as('postUsers')

    cy.visit('register')

    cy.get('[placeholder=Username]').type('Name')
    cy.get('[placeholder=Email]').type('mail@mail.com.br')
    cy.get('[placeholder=Password]').type('123456')
    cy.get('button.btn-primary').click()

    cy.contains('username has already been taken').should('be.visible')
  })

  it('Attempt to register an existing email', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'
    }, {
      statusCode: 422,
      fixture: 'register-existingEmail'
    }).as('postUsers')

    cy.visit('register')

    cy.get('[placeholder=Username]').type('Name')
    cy.get('[placeholder=Email]').type('mail@mail.com.br')
    cy.get('[placeholder=Password]').type('123456')
    cy.get('button.btn-primary').click()

    cy.contains('email has already been taken').should('be.visible')
  })
})
