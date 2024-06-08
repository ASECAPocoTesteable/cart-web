describe('Orders Overview Page', () => {
    it('should display the orders page correctly', () => {
        cy.visit('/OrdersOverview');
        cy.contains('Orders:').should('be.visible');
    });

    it('should display orders when available', () => {
        cy.visit('/OrdersOverview');
        cy.intercept('GET', '/order/getAll', { fixture: 'orders.json' }).as('getOrders');
        cy.reload();
        cy.wait('@getOrders');
        cy.contains('Order ID:').should('be.visible');
    });

    it('should display appropriate message when there are no orders', () => {
        cy.visit('/OrdersOverview');
        cy.intercept('GET', '/order/getAll', { fixture: 'noOrders.json' }).as('getNoOrders');
        cy.reload();
        cy.wait('@getNoOrders');
        cy.contains('No orders available').should('be.visible');
    });
});
