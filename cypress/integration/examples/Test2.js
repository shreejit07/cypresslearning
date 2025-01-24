///<reference types ="cypress"/>
describe('My first test', function(){
    it('My test case', function(){

        cy.visit("https://qa-lms.realestateu.com/")
        cy.get("input[type='text']").type('shreejit@simformsolutions.com')
        cy.get("input[type='password']").type('Simform@1234')
        cy.get("button[type='submit']").click()
        cy.get(':nth-child(1) > .package-courses > .course-list > :nth-child(2) > .justify-content-between > .col-sm-auto > .course-button').click()
    })

})