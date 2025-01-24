///<reference types ="cypress"/>

describe('Handling web UI', function(){
    it('web ui test case',function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //Checkbox
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('input[type="checkbox"]').check(['option1','option3'])

        //Dropdown
        //Static
        cy.get('select').select('option2').should('have.value','option2')
        //Dynamic
        cy.get('#autocomplete').type('in')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {

            if($el.text()==="Ukraine"){
                cy.wrap($el).click()
            }

        })
        cy.get('#autocomplete').should('have.value','Ukraine')

      //Visible-Invisible elements
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
        
      //Radio
      cy.get('[value="radio2"]').check().should('be.checked')

    })


})