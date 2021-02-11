
// @author: luluguo
//This script is a functional test written with cypress-test-automation framework for Thinkific web-app platform
//It includes the test cases- Add New Instructor, Update Instructor, Search Instructor
  
  beforeEach(() => {
    cy.visit(Cypress.env('login_url'))
      cy.get('#email')
        .type(Cypress.env('test_login_email'))
        .should('have.value', Cypress.env('test_login_email'))
      cy.get('#password')
        .type(Cypress.env('test_login_password'))
        .should('have.value', Cypress.env('test_login_password'))
      cy.xpath('//*[@class="button button--icon button--icon--right signin__form__button"]').click()
      cy.url().should('include', '/manage')
  })
  

  describe('Navigate Instructors Page', () => {

    it('Correct page url', () => {
      var instructor_page_url = Cypress.env('base_url') + '/manage/instructors'
      cy.visit(instructor_page_url)
      cy.url().should('include', '/manage/instructors')
      
    })
  })
  describe('Add a New Instructor Page', () => {
    it('Created a new instructor', () => {
      cy.visit(Cypress.env('base_url') + '/manage/instructors/new')
      cy.url().should('include', '/manage/instructors/new')
      //TITLE
      cy.get('.mobile-title-bar__title').should('have.text', 'Create a new instructor')
      //INPUT FIELDS
      cy.get('#instructor_first_name')
        .type(Cypress.env('test_instructor_first_name'))
        .should('have.value', Cypress.env('test_instructor_first_name'))
      cy.get('#instructor_last_name')
        .type(Cypress.env('test_instructor_last_name'))
        .should('have.value', Cypress.env('test_instructor_last_name'))
      cy.get('#instructor_email')
        .type(Cypress.env('test_instructor_email'))
        .should('have.value', Cypress.env('test_instructor_email'))
      cy.get('#instructor_title')
        .type(Cypress.env('test_instructor_title'))
        .should('have.value', Cypress.env('test_instructor_title'))
      //SAVE BUTTON
      cy.xpath('//*[@class="button-submit button button--primary save-button"]').click()
      cy.get('.mobile-title-bar__title').should('have.text', 'Edit instructor')
    
    })
  })
  describe('Update Instructor Page', () => {
    it('Updated instructor', () => {
      cy.visit(Cypress.env('base_url') + '/manage/instructors')
      cy.url().should('include', '/manage/instructors')
      cy.contains('Matthew')
      cy.contains('Richardson')
      cy.contains('mattrichardson+qatest@thinkific.com')
      cy.contains('Senior Instructor')
    })
  })

  describe('Search for Instructor', () => {
    it('Results include added instructor', () => {
      cy.visit(Cypress.env('base_url') + '/manage/instructors')
      cy.url().should('include', '/manage/instructors')
      //SEARCH FIELD
      cy.get('#q')
        .type('Matthew')
        .should('have.value', 'Matthew')
      //SEARCH BUTTON
      cy.get('#btn-search').click() 
      cy.contains('Matthew')
    })
  })

  