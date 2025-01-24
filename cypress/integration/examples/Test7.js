describe('Automation Practice Page - Element Verification', () => {
    
    before(() => {
        // Visit the webpage before the tests
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    });

    it('Verifies radio buttons', () => {
        // Check the presence and functionality of radio buttons
        cy.get('input[value="radio1"]').should('be.visible').check().should('be.checked');
        cy.get('input[value="radio2"]').should('be.visible').check().should('be.checked');
        cy.get('input[value="radio3"]').should('be.visible').check().should('be.checked');
    });

    it('Verifies suggestion class input box', () => {
        // Verify the autocomplete input box
        cy.get('#autocomplete').should('be.visible').type('India');
        cy.get('.ui-menu-item').contains('India').click();
    });

    it('Verifies dropdown', () => {
        // Check static dropdown
        cy.get('#dropdown-class-example').should('be.visible').select('Option1').should('have.value', 'option1');
        cy.get('#dropdown-class-example').select('Option2').should('have.value', 'option2');
        cy.get('#dropdown-class-example').select('Option3').should('have.value', 'option3');
    });

    it('Verifies checkboxes', () => {
        // Check checkboxes
        cy.get('input#checkBoxOption1').should('be.visible').check().should('be.checked');
        cy.get('input#checkBoxOption2').check().should('be.checked');
        cy.get('input#checkBoxOption3').check().should('be.checked');
        cy.get('input#checkBoxOption1').uncheck().should('not.be.checked');
    });

    it('Verifies alert handling', () => {
        // Handle JavaScript alerts
        cy.get('#alertbtn').click();
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Hello , share this practice page and share your knowledge');
        });
        
        cy.get('#confirmbtn').click();
        cy.on('window:confirm', (confirmText) => {
            expect(confirmText).to.equal('Hello , Are you sure you want to confirm?');
        });
    });

    it('Verifies visible and hidden text', () => {
        // Toggle visibility of text
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible');
    });

    it('Verifies web table data', () => {
        // Verify table data
        cy.get('table#product').should('be.visible');
        cy.get('table#product tbody tr').should('have.length.greaterThan', 0);
        cy.get('table#product tbody tr td').contains('Learn SQL in Practical + Database Testing from Scratch').should('exist');
    });

    it('Verifies mouse hover functionality', () => {
        // Hover over an element
        cy.get('.mouse-hover-content').invoke('show');
        cy.contains('Top').click();
        cy.url().should('include', '#top');
    });

    it('Verifies iframe handling', () => {
        // Handle iframes
        cy.get('#courses-iframe').then($iframe => {
            const body = $iframe.contents().find('body');
            cy.wrap(body).find('a[href*="mentorship"]').should('be.visible').click();
        });
    });

    it('Verifies window/tab handling', () => {
        // Verify opening of a new tab
        cy.get('#opentab').should('have.attr', 'href', 'https://www.rahulshettyacademy.com/');
    });
    
    it('Verifies multiple windows handling', () => {
        // Verify opening a new window
        cy.get('#openwindow').should('have.attr', 'onclick').and('include', 'window.open');
    });
});
