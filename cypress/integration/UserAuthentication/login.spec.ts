describe('When an unauthenticated user connects to the app', () => {
  it('Successfully loads', () => {
    cy.visit('/');
  });

  it('Displays a "Sign in to Nimble" message', () => {
    cy.visit('/');

    expect(cy.contains('Sign in to Nimble'));
  });
});
