
// @author: luluguo
//This script is a functional test written with cypress-test-automation framework for Thinkific web-app platform

  
  beforeEach(() => {
    cy.visit('https://www.thinkific.com/signin/')
      
      cy.get('#email')
        .type('xinluguo@gmail.com')
        .should('have.value', 'xinluguo@gmail.com')
      cy.get('#password')
        .type('thinkific2021')
        .should('have.value', 'thinkific2021')
      cy.xpath('//*[@class="button button--icon button--icon--right signin__form__button"]').click()
      cy.url().should('include', '/manage')
  })
  

  describe('Navigate Instructors Page', () => {

    it('Correct page url', () => {
      var home_url = cy.url()
      var instructor_page_url = home_url + '/instructors'
      cy.log(instructor_page_url)
      // cy.visit('/instructors')

      //NOTE:should not be hardcoded but code above was not working in cypress runner
      cy.visit('https://lulu-s-school-031a.thinkific.com/manage/instructors')
      cy.url().should('include', '/manage/instructors')
      
    })
  })
  describe('Add a New Instructor Page', () => {
    it('Created a new instructor', () => {
      var new_instructor_url = "/manage/instructors/new"
      // cy.xpath('//*[@href="/manage/instructors/new"]').click()
      cy.visit('https://lulu-s-school-031a.thinkific.com/manage/instructors/new')
      cy.url().should('include', '/manage/instructors/new')

      cy.get('.mobile-title-bar__title').should('have.text', 'Create a new instructor')

      cy.get('#instructor_first_name')
        .type('Matthew')
        .should('have.value', 'Matthew')
      cy.get('#instructor_last_name')
        .type('Richardson')
        .should('have.value', 'Richardson')
      cy.get('#instructor_email')
        .type('mattrichardson+qatest@thinkific.com')
        .should('have.value', 'mattrichardson+qatest@thinkific.com')
      cy.get('#instructor_title')
        .type('Senior Instructor')
        .should('have.value', 'Senior Instructor')

      cy.xpath('//*[@class="button-submit button button--primary save-button"]').click()
      cy.get('.mobile-title-bar__title').should('have.text', 'Edit instructor')
    
    })
  })
  describe('Update Instructor Page', () => {
    it('Updated instructor', () => {
      cy.visit("https://lulu-s-school-031a.thinkific.com/manage/instructors")
      cy.url().should('include', '/manage/instructors')
      cy.contains('Matthew')
      cy.contains('Richardson')
      cy.contains('mattrichardson+qatest@thinkific.com')
      cy.contains('Senior Instructor')
    })
  })

  describe('Search for Instructor', () => {
    it('Results include added instructor', () => {
      cy.visit("https://lulu-s-school-031a.thinkific.com/manage/instructors")
      cy.url().should('include', '/manage/instructors')
      cy.get('#q')
        .type('Matthew')
        .should('have.value', 'Matthew')

      cy.get('#btn-search').click() 
      cy.contains('Matthew')
    })
  })

  