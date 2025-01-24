// cypress/integration/automationPractice.spec.js

describe('Automation Practice Page Element Verification', () => {
    const url = 'https://rahulshettyacademy.com/AutomationPractice/';
  
    beforeEach(() => {
      // Visit the Automation Practice page before each test
      cy.visit(url);
    });
  
    it('verifies the page title', () => {
      // Assert the page title
      cy.title().should('eq', 'Automation Practice Site');
    });
  
    it('verifies the presence of main page elements', () => {
      // **Table**
      cy.get('#product').should('be.visible'); // Table container
      cy.get('#product tr').should('have.length.greaterThan', 1); // At least one table row
  
      // **Radio Buttons**
      cy.get('[name="radioButton"]').should('have.length', 3); // Three radio buttons
      cy.get('[value="radio1"]').should('be.visible'); // Radio button 1
      cy.get('[value="radio2"]').should('be.visible'); // Radio button 2
      cy.get('[value="radio3"]').should('be.visible'); // Radio button 3
  
      // **Suggestion Class (Auto-Suggest)**
      cy.get('#autocomplete').should('be.visible'); // Input field
      // **Note:** Fully testing the auto-suggest functionality requires more complex steps, including typing and verifying suggestions.
  
      // **Dropdown**
      cy.get('#dropdown-class-example').should('be.visible'); // Dropdown select
      cy.get('#dropdown-class-example > option').should('have.length', 4); // Four options
  
      // **Checkbox**
      cy.get('[type="checkbox"]').should('have.length', 2); // Two checkboxes
      cy.get('#checkBoxOption1').should('be.visible'); // Checkbox 1
      cy.get('#checkBoxOption2').should('be.visible'); // Checkbox 2
      cy.get('#checkBoxOption3').should('be.visible'); // Checkbox 3 (hidden, but should be present in DOM)
      cy.get('#checkBoxOption1 + label').should('contain', 'Option1'); // Label for Checkbox 1
  
      // **Open Window**
      cy.get('#openwindow').should('be.visible'); // Button to open a new window
      // **Note:** Testing the new window requires using `cy.window()` or adjusting the test to handle the new window context.
  
      // **Alerts**
      cy.get('#alertbtn').should('be.visible'); // Alert button
      cy.get('#confirmbtn').should('be.visible'); // Confirm button
      // **Note:** Fully testing alerts and confirms involves more complex steps, including verifying alert/confirm box text and buttons.
  
      // **Element Displayed**
      cy.get('#displayed-text').should('not.be.visible'); // Initially not visible
      cy.get('#show-textbtn').should('be.visible').click(); // Button to show text
      cy.get('#displayed-text', { timeout: 10000 }).should('be.visible'); // Should be visible after clicking
  
      // **Hide Text Box**
      cy.get('#hide-textbox').should('be.visible').click(); // Button to hide text box
      cy.get('#box', { timeout: 10000 }).should('not.be.visible'); // Text box should not be visible
  
      // **Mouse Hover**
      cy.get('#mousehover').should('be.visible'); // Mouse hover button
      // **Note:** Testing the hover effect involves more complex steps, possibly requiring `cy.trigger()` or a custom command.
  
      // **iFrame**
      cy.get('#courses-iframe').should('be.visible'); // iFrame
      // **Note:** Interacting with iFrame content requires using `cy.frame()` to change the subject.
  
      // **Table Next Page**
      cy.get('.tableFixHead > .next-link').should('be.visible'); // Next link in table pagination
    });
  });
  