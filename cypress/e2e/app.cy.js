/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

import {
  MAINPAGE_SEO_TITLE,
  MAINPAGE_SEO_DESCRIPTION,
} from '../../constants/app.constants'

describe('Navigation', () => {
  it('should navigate have title and description in the main page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // check page title
    cy.title().should('include', MAINPAGE_SEO_TITLE)

    // check page description
    cy.get('head meta[name=description]')
      .should('have.attr', 'content')
      .should('include', MAINPAGE_SEO_DESCRIPTION)
  })
})
