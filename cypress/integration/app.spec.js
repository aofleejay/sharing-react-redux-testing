it('should display once more item per load more button click', () => {
  cy.visit('/')
  cy.get('.box').should('have.length', 1)
  cy.contains(/load more/i).click()
  cy.get('.box').should('have.length', 2)
})
