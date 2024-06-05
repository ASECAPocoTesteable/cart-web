describe('Cart Overview Page', () => {
    beforeEach(() => {
        cy.visit('/CartOverview');
    });

    it('should display the cart page correctly', () => {
        cy.contains('Cart:').should('be.visible');
    });

    it('should display no products in cart when empty', () => {
        cy.get('.product-card').should('have.length', 0);
    });


    it('should remove a product from the cart', () => {
        cy.intercept('GET', 'http://controltowerpt:8080/shop', { fixture: 'product.json' }).as('getProducts');
        cy.visit('/Store');

        cy.get('div > button').click();
        cy.get('div > button').click();
    });

    it('should throw error if no stock for the product', () => {
        cy.intercept('GET', 'http://controltowerpt:8080/shop', { fixture: 'product.json' }).as('getProducts');
        cy.visit('/Store');

        cy.get('div > button').click();
        cy.get('[href="/CartOverview"] > button').click();
        cy.get('#address').clear('C');
        cy.get('#address').type('Calle 123');
        cy.get('[style="border-radius: 10px; border: 2px solid black; padding: 10px 20px; background-color: green; color: white; cursor: pointer; margin-top: 20px;"]').click();
    });


});
