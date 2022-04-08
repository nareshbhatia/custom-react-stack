describe('Home page', function () {
  it('renders correctly', function () {
    // Go to home page
    cy.visit('/');

    // Verify that the correct title is rendered
    cy.contains('Top 10 Movies Of All Time');

    // Verify that 10 movies are rendered
    const movies = cy.get('[data-testid="movie-table"] > tbody > tr');
    movies.should('have.length', 10);

    // Go to Settings Page
    cy.get('[aria-label="Settings"]').click();
    cy.contains('Manage your Family Plan');

    // Go back to Home Page
    cy.get('[aria-label="Home"]').click();
    cy.contains('Top 10 Movies Of All Time');
  });
});
