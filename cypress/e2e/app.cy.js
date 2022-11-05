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

describe('Creating an issue', () => {
  it('should work when all fields are provided', () => {})
  it('should work when only required field are provided', () => {})
  it('should not work when any required field is missing', () => {})
})

describe("Viewing a project's issue", () => {
  it('should work', () => {})
  it('should work with one filter', () => {})
  it('should not work with multiple filters', () => {})
})

describe("Viewing a project's issue", () => {
  it('should work', () => {})
  it('should work with one filter', () => {})
  it('should not work with multiple filters', () => {})
})

describe('Updating an issue', () => {
  it('should work when updating a single field ', () => {})
  it('should work when updating multiple fields ', () => {})
  it('should not? work with missing _id', () => {})
  it('should not? work with no fields to update', () => {})
  it('should not? work with invalid _id', () => {})
})

describe('Delete an issue', () => {
  it('should work', () => {})
  it('should not work with invalid _id', () => {})
  it('should not work with missing _id', () => {})
})
