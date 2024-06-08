describe('Store Page', () => {
    it('should display the store page correctly', () => {
        cy.visit('/Store');
        cy.contains('Store:').should('be.visible');
        cy.get('button').contains('Cart').should('be.visible');
    });

    it('should add a product to the cart', () => {
        cy.intercept('GET', 'http://controltowerpt:8080/shop', { fixture: 'product.json' }).as('getProducts');
        cy.visit('/Store');
        cy.contains('Agregar al carrito').first().click();
        cy.contains('Sacar del carrito').should('be.visible');
    });

    it('should navigate to the cart overview page', () => {
        cy.visit('/Store');
        cy.get('button').contains('Cart').click();
        cy.url().should('include', '/CartOverview');
        cy.contains('Cart:').should('be.visible');
    });
});
