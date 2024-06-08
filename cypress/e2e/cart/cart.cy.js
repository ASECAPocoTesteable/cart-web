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
        cy.intercept('GET', 'http://controltowerpt:8080/shop', {fixture: 'product.json'}).as('getProducts');

        /* ==== Generated with Cypress Studio ==== */
        cy.get('[href="/Store"] > button').click();
        cy.get('[style="display: flex; flex-direction: column; gap: 20px;"] > :nth-child(1) > button').click();
        cy.get('[style="display: flex; flex-direction: column; gap: 20px;"] > :nth-child(2) > button').click();
        cy.get('[href="/CartOverview"] > button').click();
        cy.get('[style="display: flex; flex-direction: column; gap: 10px;"] > :nth-child(1) > button').click();
        cy.get('[style="background-color: white; color: black; padding: 10px; border-radius: 10px; display: flex; flex-direction: column; align-items: center; text-align: center;"] > button').click();
        /* ==== End Cypress Studio ==== */
    });

    it('should add product to cart and do a checkout', () => {
        cy.intercept('GET', 'http://controltowerpt:8080/shop', {fixture: 'product.json'}).as('getProducts');
        cy.visit('/Store');

        cy.get('[style="display:flex;flex-direction:column;gap:20px"] > :nth-child(1) > button').click();
        cy.get('[style="display:flex;flex-direction:column;gap:20px"] > :nth-child(2) > button').click();
        cy.get('[href="/CartOverview"] > button').click();
        cy.get('#address').clear('C');
        cy.get('#address').type('Calle 123');
        cy.get('[style="border-radius: 10px; border: 2px solid black; padding: 10px 20px; background-color: green; color: white; cursor: pointer; margin-top: 20px;"]').click();
        cy.should('be.visible');

    });


});
