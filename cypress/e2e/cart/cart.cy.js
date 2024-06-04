describe('Cart Overview Page', () => {
    beforeEach(() => {
        cy.visit('/CartOverview');
    });

    it('should display the cart page correctly', () => {
        cy.contains('Cart:').should('be.visible');
    });

    it('should display products in the cart', () => {
        cy.get('.product-card').should('have.length.greaterThan', 0);
    });

    it('should remove a product from the cart', () => {
        cy.get('.product-card').first().find('button').contains('Eliminar del carrito').click();
        cy.get('.product-card').should('have.length.lessThan', 1);
    });

    it('should complete checkout with valid address', () => {
        cy.get('input#address').type('Avenida Siempreviva 742');
        cy.get('button').contains('Checkout').click();
        cy.contains('Order sent successfully!').should('be.visible');
    });
});
